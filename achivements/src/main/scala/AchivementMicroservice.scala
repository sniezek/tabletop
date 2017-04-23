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

case class Achievement(userId: Int, achievements: Option[List[Int]])
case class Feed(map: Map[String,String])

trait Protocols extends DefaultJsonProtocol {
  implicit val updateDBFormat = jsonFormat1(Feed.apply)
  implicit val achivemenetFormat = jsonFormat2(Achievement.apply)

}

trait Service extends Protocols {
  implicit val system: ActorSystem

  implicit def executor: ExecutionContextExecutor

  implicit val materializer: Materializer

  def config: Config

  val logger: LoggingAdapter

  def getAchivements(id: Option[Int]): Future[Either[String, Achievement]] = {
    id match {
      case None => Future.successful(Left("Wrong Id"))
      case Some(s) =>
        s match {
          case 0 => Future.successful(Right(Achievement(s, Some(List(1, 2, 3)))))
          case 1 => Future.successful(Right(Achievement(s, Some(List()))))
          case _ => Future.successful(Left("User not found"))
        }
    }
  }

  def update(feed: Feed): Future[Either[String, Feed]] = {
    println(feed.map)
    Future.successful(Left("OK"))
  }

  val routes = {
    import StringUtils._
    logRequestResult("AchivementMicroservice") {
      pathPrefix("achi") {
        (get & path(Segment)) {
          id =>
            complete {
              getAchivements(id.toIntOpt).map[ToResponseMarshallable] {
                case Right(achievement) => achievement
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

  override val config = ConfigFactory.load()
  override val logger = Logging(system, getClass)

  Http().bindAndHandle(routes, config.getString("http.interface"), config.getInt("http.port"))
}
