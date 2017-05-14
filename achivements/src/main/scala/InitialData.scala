

import slick.driver.H2Driver.api._

import scala.concurrent.Future

trait InitialData {
  self: DatabaseSchema =>

  def db: Database

  def insertInitialData(): Future[Unit] = {
    val queries = DBIO.seq(
      statistics.delete,

      statistics += Statistic(playerId = 1, totalWins = 16),
      statistics += Statistic(playerId = 2, totalWins = 128),
      statistics += Statistic(playerId = 3, totalWins = 1024),
      statistics += Statistic(playerId = 4, tournamentWins = 16),
      statistics += Statistic(playerId = 5, tournamentWins = 128),
      statistics += Statistic(playerId = 6, tournamentWins = 1024),
      statistics += Statistic(playerId = 7, totalWins = 16, tournamentWins = 16),
      statistics += Statistic(playerId = 8, totalWins = 128, tournamentWins = 128),
      statistics += Statistic(playerId = 9, totalWins = 1024, tournamentWins = 1024),

      achivements.delete,
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 10 Games", minVal = 10, name = "10Wins", field = "TotalWins"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 100 Games", minVal = 100, name = "100Wins", field = "TotalWins"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 1000 Games", minVal = 1000, name = "1000Wins", field = "TotalWins"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 10 Tournamets", minVal = 10, name = "10TournametsWins", field = "TournametsWins"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 100 Tournamets", minVal = 100, name = "100TournametsWins", field = "TournametsWins"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win Then 1000 Tournamets", minVal = 1000, name = "1000TournametsWins", field = "TournametsWins")
    )

    println("Inserted\n")

    db.run(queries)
  }


}
