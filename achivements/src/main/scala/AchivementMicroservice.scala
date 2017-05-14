import akka.actor.ActorSystem
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.Http
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.marshalling.ToResponseMarshallable
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.server.Directives._
import akka.stream.{ActorMaterializer, Materializer}
import com.typesafe.config.{Config, ConfigFactory}
import spray.json.DefaultJsonProtocol

import scala.concurrent.{ExecutionContextExecutor, Future}

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

  var newAchivementList: List[Achiv] = List[Achiv]()

  def getAchivements(id: Option[Int]): Future[Either[String, Achievement]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(s) =>
        val result = h2Data.getWinAmount(h2Data.dao.player(s))
        result match {
          case -1 =>
            printPlayers()
            Future.successful(Left("User not found"))
          case _ =>
            if (result > minValueToAchivement) {
              Future.successful(Right(Achievement(s, Some(List(Achiv("name", "desc", "url"))))))
            } else {
              Future.successful(Right(Achievement(s, None)))
            }
        }
    }
  }

  def updateWinCounter(id: Option[Int]): Future[Either[String, String]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(s) =>
        val result = h2Data.getWinAmount(h2Data.dao.player(s))
        result match {
          case -1 => {
            printPlayers()
            println(newAchivementList)
            Future.successful(Left("User not found"))
          }
          case _ => {
            h2Data.dao.updateWinsAmount(s, result + 1)
            if (result + 1 == minValueToAchivement) {
              newAchivementList ++= List(Achiv("name", "desc", "Url"))
            }
            Future.successful(Right("Done"))
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

  def getNewAchivements(): Future[Either[String, List[Achiv]]] = {
    val a = newAchivementList
    newAchivementList = List[Achiv]()
    Future.successful(Right(a))
  }

  def update(feed: Feed): Future[Either[String, Feed]] = {
    println(feed.map)
    Future.successful(Left("OK"))
  }

  val routes = {
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
        pathPrefix("updateDB") {
          (post & entity(as[Feed])) { feed =>
            complete {
              update(feed).map[ToResponseMarshallable] {
                case Left("OK") => "OK"
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
          get {
            complete {
              getNewAchivements().map[ToResponseMarshallable] {
                case Right(response) => response
                case Left(errorMessage) => BadRequest -> errorMessage
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

  override val config = ConfigFactory.load()
  override val logger = Logging(system, getClass)

  h2Data.run
  Http().bindAndHandle(routes, config.getString("http.interface"), config.getInt("http.port"))
}
