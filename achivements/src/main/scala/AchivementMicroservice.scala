import akka.actor.ActorSystem
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.marshalling.ToResponseMarshallable
import akka.http.scaladsl.model.StatusCodes._

import akka.stream.{ActorMaterializer, Materializer}
import com.typesafe.config.{Config, ConfigFactory}
import spray.json.DefaultJsonProtocol

import scala.concurrent.{ExecutionContextExecutor, Future}
import akka.http.scaladsl.Http

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server._
import ch.megard.akka.http.cors.CorsDirectives._
import ch.megard.akka.http.cors.{CorsDirectives, CorsSettings}

//TODO move to antoher file
case class Achiv(name: String, description: String, imageURL: String)

case class Achievement(userId: Int, achievements: Option[List[Achiv]])

case class NewAchivementsList(achivements: Option[List[Achiv]])

case class Feed(map: Map[String, String])

trait Protocols extends DefaultJsonProtocol {
  implicit val updateDBFormat = jsonFormat1(Feed.apply)
  implicit val AchivFormat = jsonFormat3(Achiv.apply)
  implicit val newAchivementFormat = jsonFormat1(NewAchivementsList.apply)
  implicit val achivemenetFormat = jsonFormat2(Achievement.apply)

}

trait Service extends Protocols {
  implicit val system: ActorSystem

  implicit def executor: ExecutionContextExecutor

  implicit val materializer: Materializer

  implicit val h2Data: H2Data

  def config: Config

  val logger: LoggingAdapter

  val minValueToAchivement = 10

  val allAchivements: Seq[Achivement]

  var newAchivementMap: Map[Int, Achievement] = Map[Int, Achievement]()

  var achivementResult: List[Achiv] = List[Achiv]()

  def getAchivements(id: Option[Int]): Future[Either[String, Achievement]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(s) =>
        val player = h2Data.getResult(h2Data.dao.player(s))
        player match {
          case None => Future.successful(Left("Cannot find player"))
          case Some(s) => {
            for (achi <- allAchivements) {
              achi.field match {
                case "TotalWins" => {
                  if (Conditions.map(achi.conditions)(s.totalWins, achi.minVal)) {
                    achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
                  }
                }
                case "TournametsWins" => {
                  if (Conditions.map(achi.conditions)(s.tournamentWins, achi.minVal)) {
                    achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
                  }
                }

              }
            }
            val a = achivementResult
            achivementResult = List[Achiv]()
            Future.successful(Right(Achievement(s.playerId, Some(a))))
          }
        }
    }
  }

  def updateWinCounter(id: Option[Int], field: String = "TotalWins"): Future[Either[String, String]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(i) =>
        val player = h2Data.getResult(h2Data.dao.player(i))
        player match {
          case None => Future.successful(Left("Cannot find player"))
          case Some(p) => {
            field match {
              case "TotalWins" => {
                h2Data.dao.updateTotalWins(i, p.totalWins + 1)
                allAchivements.filter(_.field == "TotalWins").sortBy(_.minVal).foreach(
                  x => if (Conditions.map(x.conditions)(p.totalWins + 1, x.minVal) && !Conditions.map(x.conditions)(p.totalWins, x.minVal)) {
                    newAchivementMap += p.playerId -> Achievement(p.playerId, Some(List(Achiv(x.name, x.description, x.url))))
                  }
                )
                Future.successful(Right("Done"))
              }
            }
          }
        }
    }
  }

  def printPlayers(): Future[Either[String, String]] = {
    h2Data.printResults(h2Data.dao.players)
    Future.successful(Right("Done"))
  }

  def addPlayer(): Future[Either[String, String]] = {
    val id = h2Data.dao.getHighestPlayerId()
    h2Data.dao.addPlayer(h2Data.getOptional(id))
    Future.successful(Right("Done"))
  }

  def getNewAchivements(id: Option[Int]): Future[Either[String, Option[Achievement]]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(i) => {
        val result = Future.successful(Right(newAchivementMap.get(i)))
        newAchivementMap -= i
        result
      }
    }
  }

  def getAllAchivements(): Future[Either[String, List[Achiv]]] = {
    var result = List[Achiv]()
    for (a <- allAchivements) {
      result ++= List(Achiv(a.name, a.description, a.url))
    }
    Future.successful(Right(result))
  }

  val settings = CorsSettings.defaultSettings.copy(allowCredentials = true)
  val routes: Route = handleRejections(CorsDirectives.corsRejectionHandler) {
    cors(settings) {
      handleRejections(RejectionHandler.default) {
        //TODO fix all routes
        import StringUtils._
        logRequestResult("AchivementMicroservice") {
          pathPrefix("achi") {
            (get & path(Segment)) {
              id =>
                complete {
                  getAchivements(id.toIntOpt).map[ToResponseMarshallable] {
                    case Right(response) => response
                    case Left(errorMessage) => BadRequest -> errorMessage
                  }
                }
            }
          } ~
            pathPrefix("update") {
              (get & path(Segment)) {
                id =>
                  complete {
                    updateWinCounter(id.toIntOpt).map[ToResponseMarshallable] {
                      case Right(response) => response
                      case Left(errorMessage) => BadRequest -> errorMessage
                    }
                  }
              }
            } ~
            pathPrefix("add") {
              get {
                complete {
                  addPlayer().map[ToResponseMarshallable] {
                    case Right(response) => response
                    case Left(errorMessage) => BadRequest -> errorMessage
                  }
                }
              }
            } ~
            pathPrefix("newAchivements") {
              (get & path(Segment)) {
                id =>
                  complete {
                    getNewAchivements(id.toIntOpt).map[ToResponseMarshallable] {
                      case Right(response) => response
                      case Left(errorMessage) => BadRequest -> errorMessage
                    }
                  }
              }
            } ~
            pathPrefix("allAchivements") {
              get {
                complete {
                  getAllAchivements().map[ToResponseMarshallable] {
                    case Right(response) => response
                    case Left(errorMessage) => BadRequest -> errorMessage
                  }
                }
              }
            }
        }
      }
    }
  }
}

object StringUtils {

  implicit class StringImprovements(val s: String) {

    import scala.util.control.Exception._

    def toIntOpt = catching(classOf[NumberFormatException]) opt s.toInt
  }

}

object AchivementMicroservice extends App with Service {
  override implicit val system = ActorSystem()
  override implicit val executor = system.dispatcher
  override implicit val materializer = ActorMaterializer()
  override implicit val h2Data = new H2Data
  h2Data.run
  override val config = ConfigFactory.load()
  override val logger = Logging(system, getClass)
  override val allAchivements: Seq[Achivement] = getAchivementsFromDatabase

  Http().bindAndHandle(routes, config.getString("http.interface"), config.getInt("http.port"))

  def getAchivementsFromDatabase(): Seq[Achivement] = {
    val result = h2Data.getResult(h2Data.dao.getDefinedAchivements())
    result match {
      case None => null
      case Some(s) => s
    }
  }
}
