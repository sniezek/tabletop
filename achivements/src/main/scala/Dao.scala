
import slick.driver.H2Driver.api._

import scala.concurrent.Future

class Dao(db: Database) extends DatabaseSchema {

  def players: Future[Seq[(Int, Int, Int)]] = {
    val query = for {
      w <- statistics
    } yield (w.playerId, w.totalWins, w.tournamentWins)

    query.result.statements.foreach(println)
    db.run(query.result)
  }

  def player(id: Int): Future[Statistic] = {
    db.run(statistics.filter(_.playerId === id).result.head)
  }

  def updateTotalWins(id: Int, amount: Int = 0) = {
    val query = statistics.filter(_.playerId === id).map(_.totalWins).update(amount)
    query.statements.foreach(println)
    db.run(query)
  }

  def addPlayer(id: Option[Int]) = {
    val i = if (id.isEmpty) {
      0
    } else {
      id.get
    }
    val query = statistics += Statistic(playerId = i + 1)
    db.run(query)
  }

  def getHighestPlayerId(): Future[Option[Int]] = {
    db.run(statistics.map(_.playerId).max.result)
  }

  def getDefinedAchivements(): Future[Seq[Achivement]] = {
    db.run(achivements.result)
  }
}
