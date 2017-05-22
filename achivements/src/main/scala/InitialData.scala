

import slick.driver.H2Driver.api._

import scala.concurrent.Future

trait InitialData {
  self: DatabaseSchema =>

  def db: Database

  def insertInitialData(): Future[Unit] = {
    db.run(statistics.delete)
    db.run(achivements.delete)
    val queries = DBIO.seq(

      statistics += Statistic(playerId = 1, totalWins = 16),
      statistics += Statistic(playerId = 2, totalWins = 128),
      statistics += Statistic(playerId = 3, totalWins = 1024),
      statistics += Statistic(playerId = 4, tournamentWins = 16),
      statistics += Statistic(playerId = 5, tournamentWins = 128),
      statistics += Statistic(playerId = 6, tournamentWins = 1024),
      statistics += Statistic(playerId = 7, totalWins = 16, tournamentWins = 16),
      statistics += Statistic(playerId = 8, totalWins = 128, tournamentWins = 128),
      statistics += Statistic(playerId = 9, totalWins = 1024, tournamentWins = 1024)
    )

    for (i <- 10 to 99999) {
      db.run(statistics += Statistic(playerId = i))
    }

    for (i <- 1 to 5) {
      val number = math.pow(10, i).toInt
      val query = DBIO.seq(
        achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then " + number + " Games", minVal = number, name = number + " Wins", field = "TotalWins", url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pOyp8osRS2v_f2VrrmlWJqPSnVabuyuJrzG7S3AEiQMgYFINqw"),
        achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then " + number + " Tournamets", minVal = number, name = number + " TournametsWins", field = "TournametsWins", url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pOyp8osRS2v_f2VrrmlWJqPSnVabuyuJrzG7S3AEiQMgYFINqw")
      )
      db.run(query)
    }
    println("Inserted\n")

    db.run(queries)

  }


}
