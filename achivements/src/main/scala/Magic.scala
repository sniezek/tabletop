import slick.driver.H2Driver.api._
import slick.jdbc.meta.MTable

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}
import scala.util.{Failure, Success, Try}


trait Magic {
  self: DatabaseSchema =>

  def db: Database

  def printResults[T](f: Future[Iterable[T]]): Unit = {
    Await.result(f, Duration.Inf).foreach(println)
    println()
  }

  def getWinAmount(eventualWinner: Future[Statistic]): Int = {
    Try(Await.result(eventualWinner, Duration.Inf)) match {
      case Success(value) => value.tournamentWins
      case Failure(_) => -1
    }
  }

  def getResult[T](f: Future[T]): Option[T] = {
    Try(Await.result(f, Duration.Inf)) match {
      case Success(value) => Some(value)
      case Failure(_) => None
    }
  }

  def getOptional(optional: Future[Option[Int]]): Option[Int] = {
    Try(Await.result(optional, Duration.Inf)) match {
      case Success(value) => value
      case Failure(_) => None
    }
  }

  def createSchemaIfNotExists(insert: () => Future[Unit]): Future[Unit] = {
    db.run(MTable.getTables).flatMap(tables =>
      if (tables.isEmpty) {
        db.run(allSchemas.create).andThen {
          case Success(_) => {
            insert()
            println("Schema created \n")
          }
        }
      } else {
        println("Schema already exists\n")
        Future.successful()
      }
    )
  }
}
