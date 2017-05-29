import akka.actor.ActorSystem
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.Http
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.marshalling.ToResponseMarshallable
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server._
import akka.stream.{ActorMaterializer, Materializer}
import ch.megard.akka.http.cors.CorsDirectives._
import ch.megard.akka.http.cors.{CorsDirectives, CorsSettings}
import com.schema.Tables.UserRow
import com.typesafe.config.{Config, ConfigFactory}
import spray.json.DefaultJsonProtocol

import scala.concurrent.{ExecutionContextExecutor, Future}

//TODO move to antoher file
case class Achiv(name: String, description: String, imageURL: String)

case class Achievement(userId: Long, achievements: Option[List[Achiv]])

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

  implicit val mySqlData: MySQLData

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
        val player = mySqlData.getResult(mySqlData.getPlayer(s))
        player match {
          case None => Future.successful(Left("Cannot find player"))
          case Some(player) => {
            for (achi <- allAchivements) {
              achi.field match {
                case AchivementsFields.TournamentsWins => {
                  getWinAchivement(achi, player, mySqlData.getTournamentsWins)
                }
                case AchivementsFields.SparringWins => {
                  getWinAchivement(achi, player, mySqlData.getSparringWins)
                }
                case AchivementsFields.EventOrganizer => {
                  getSimpleAchivement(achi, player, mySqlData.getOrganizedEvents)
                }
                case AchivementsFields.TournamentLooser => {
                  getWinAchivement(achi, player, mySqlData.getTournamentsWins, 2)
                }
                case AchivementsFields.Tournament3rdPlace => {
                  getWinAchivement(achi, player, mySqlData.getTournamentsWins, 3)
                }
                case AchivementsFields.SparringLooser => {
                  getWinAchivement(achi, player, mySqlData.getSparringWins, 2)
                }
                case AchivementsFields.Login => {
                  getSimpleAchivement(achi, player, mySqlData.getLogins)
                }
              }
            }
            val result = achivementResult
            achivementResult = List[Achiv]()
            Future.successful(Right(Achievement(player.id, Some(result))))
          }
        }
    }
  }

  def getWinAchivement(achi: Achivement, player: UserRow, winFunction: (UserRow, Int) => Future[Int], place: Int = 1): Unit = {
    getAchivement(achi, player, place, winFunction = Some(winFunction))
  }

  def getSimpleAchivement(achi: Achivement, player: UserRow, simpleAchivementFunction: (UserRow) => Future[Int]): Unit = {
    getAchivement(achi, player, simpleAchivementFunction = Some(simpleAchivementFunction))
  }

  def getAchivement(achi: Achivement, player: UserRow, place: Int = 1, winFunction: Option[(UserRow, Int) => Future[Int]] = None, simpleAchivementFunction: Option[(UserRow) => Future[Int]] = None): Unit = {
    winFunction match {
      case Some(function) => {
        mySqlData.getResult(function(player, place)) match {
          case None => {
            if (Conditions.map(achi.conditions)(0, achi.minVal)) {
              achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
            }
          }
          case Some(amount) => {
            if (Conditions.map(achi.conditions)(amount, achi.minVal)) {
              achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
            }
          }
        }
      }
      case None => {
        simpleAchivementFunction match {
          case Some(function) => {
            mySqlData.getResult(function(player)) match {
              case None => {
                if (Conditions.map(achi.conditions)(0, achi.minVal)) {
                  achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
                }
              }
              case Some(amount) => {
                if (Conditions.map(achi.conditions)(amount, achi.minVal)) {
                  achivementResult ++= List(Achiv(achi.name, achi.description, achi.url))
                }
              }
            }
          }
          case None =>
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
    //    val id = h2Data.dao.getHighestPlayerId()
    //    h2Data.dao.addPlayer(h2Data.getOptional(id))
    Future.successful(Right("[]"))
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
                      case Right(response) => response match {
                        case None => "[]"
                        case Some(i) => i
                      }
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
  override implicit val mySqlData = new MySQLData
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

object TadaSchema extends App {
  slick.codegen.SourceCodeGenerator.main(
    Array("slick.driver.MySQLDriver", "com.mysql.jdbc.Driver", "jdbc:mysql://192.168.99.100:3306/db_example", "./achivements/src/main/scala/", "com.schema", "root", "password"))
}
