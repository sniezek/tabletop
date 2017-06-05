import com.schema.Tables.{User, _}
import slick.driver.MySQLDriver.api._

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}
import scala.util.{Failure, Success, Try}

trait MySqlMagic {

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

  def getPlayer(s: Int): Future[UserRow] = {
    db.run(User.filter(_.id === s.toLong).result.head)
  }

  def getTournamentsWins(player: UserRow, place: Int = 1): Future[Int] = {
    val query = TournamentPlayerResult
      .filter(_.user === player.id)
      .map(_.place)
      .filter(_ === place)
      .length
      .result

    db.run(query)
  }

  def getSparringWins(player: UserRow, place: Int = 1): Future[Int] = {
    val query = Sparring // TODO: Now information about sparring wins

    Future.successful(-1)
  }

  def getOrganizedEvents(player: UserRow): Future[Int] = {
    val query = Event
      .filter(_.organiserId === player.id)
      .length
      .result

    db.run(query)
  }

  def getLogins(player: UserRow): Future[Int] = {
    val query = "" //TODO

    Future.successful(1)
  }

  def getTournamentsWithoutDefeat(player: UserRow): Future[Int] = {
    val query = "" //TODO:

    Future.successful(0)
  }

  def getGames(): Future[Seq[Option[String]]] = {
    val query = GameRanking
      .map(_.gameName)
      .groupBy(x => x)
      .map(_._1)
      .result

    db.run(query)
  }

  def getRankingForEachGame(): Future[Seq[(Option[Long], Option[String], Option[Long])]] = {
    val w = for {
      c <- GameRanking
    } yield (c.points, c.gameName, c.userId)

    val q = w
      .sortBy(_._1.desc.nullsLast)
      .filter(_._2 === "Talisman")
      .result

    db.run(q)
  }



}