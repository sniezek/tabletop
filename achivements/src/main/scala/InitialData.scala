

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

    val query = DBIO.seq(
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Tournament", minVal = 1, name = "Tournament First Blood", field = AchivementsFields.TournamentsWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Tournaments", minVal = 10, name = "Tournament 10 Wins", field = AchivementsFields.TournamentsWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Tournaments", minVal = 100, name = "Tournament 100 Wins", field = AchivementsFields.TournamentsWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Tournaments", minVal = 1000, name = "Tournament 1000 Wins", field = AchivementsFields.TournamentsWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Sparring", minVal = 1, name = "Sparring First Blood", field = AchivementsFields.SparringWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Sparrings", minVal = 10, name = "Sparring 10 Wins", field = AchivementsFields.SparringWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Sparrings", minVal = 100, name = "Sparring 100 Wins", field = AchivementsFields.SparringWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Sparrings", minVal = 1000, name = "Sparring 1000 Wins", field = AchivementsFields.SparringWins),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize Your First Event", minVal = 1, name = "Event Organizer First Blood", field = AchivementsFields.EventOrganizer),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 10 Events", minVal = 10, name = "10 Events", field = AchivementsFields.EventOrganizer),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 100 Events", minVal = 100, name = "100 Events", field = AchivementsFields.EventOrganizer),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 1000 Events", minVal = 1000, name = "1000 Events", field = AchivementsFields.EventOrganizer),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Tournament", field = AchivementsFields.TournamentLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Tournament", field = AchivementsFields.TournamentLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Tournament", field = AchivementsFields.TournamentLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Tournament", field = AchivementsFields.TournamentLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Sparring", field = AchivementsFields.SparringLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Sparring", field = AchivementsFields.SparringLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Sparring", field = AchivementsFields.SparringLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Sparring", field = AchivementsFields.SparringLooser),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place", minVal = 1, name = "Be 3rd in Tournament", field = AchivementsFields.Tournament3rdPlace),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 10 Times", minVal = 10, name = "Be 3rd 10 Times in Tournament", field = AchivementsFields.Tournament3rdPlace),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 100 Times", minVal = 100, name = "Be 3rd 100 Times in Tournament", field = AchivementsFields.Tournament3rdPlace),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 1000 Times", minVal = 1000, name = "Be 3rd 1000 Times in Tournament", field = AchivementsFields.Tournament3rdPlace),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login once", minVal = 1, name = "First Login", field = AchivementsFields.Login),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 10 Times", minVal = 10, name = "Login 10 Times", field = AchivementsFields.Login),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 100 Times", minVal = 100, name = "Login 100 Times", field = AchivementsFields.Login),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 1000 Times", minVal = 1000, name = "Login 1000 Times", field = AchivementsFields.Login),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 10000 Times", minVal = 10000, name = "Login 10000 Times", field = AchivementsFields.Login)
    )
    db.run(query)
    println("Inserted\n")

    db.run(queries)

  }


}
