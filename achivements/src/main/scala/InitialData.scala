

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
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Tournament", minVal = 1, name = "Tournament First Blood", field = AchivementsFields.TournamentsWins, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Tournaments", minVal = 10, name = "Tournament 10 Wins", field = AchivementsFields.TournamentsWins, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Tournaments", minVal = 100, name = "Tournament 100 Wins", field = AchivementsFields.TournamentsWins, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Tournaments", minVal = 1000, name = "Tournament 1000 Wins", field = AchivementsFields.TournamentsWins, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win First Sparring", minVal = 1, name = "Sparring First Blood", field = AchivementsFields.SparringWins, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 10 Sparrings", minVal = 10, name = "Sparring 10 Wins", field = AchivementsFields.SparringWins, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 100 Sparrings", minVal = 100, name = "Sparring 100 Wins", field = AchivementsFields.SparringWins, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win More Then 1000 Sparrings", minVal = 1000, name = "Sparring 1000 Wins", field = AchivementsFields.SparringWins, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize Your First Event", minVal = 1, name = "Event Organizer First Blood", field = AchivementsFields.EventOrganizer, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 10 Events", minVal = 10, name = "10 Events", field = AchivementsFields.EventOrganizer, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 100 Events", minVal = 100, name = "100 Events", field = AchivementsFields.EventOrganizer, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Organize More The 1000 Events", minVal = 1000, name = "1000 Events", field = AchivementsFields.EventOrganizer, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Tournament", field = AchivementsFields.TournamentLooser, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Tournament", field = AchivementsFields.TournamentLooser, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Looser", minVal = 1, name = "Be 2nd in Sparring", field = AchivementsFields.SparringLooser, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Common Looser", minVal = 10, name = "Be 2nd 10 Times in Sparring", field = AchivementsFields.SparringLooser, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Epic Looser", minVal = 100, name = "Be 2nd 100 Times in Sparring", field = AchivementsFields.SparringLooser, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Legendary Looser", minVal = 1000, name = "Be 2nd 1000 Times in Sparring", field = AchivementsFields.SparringLooser, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place", minVal = 1, name = "Be 3rd in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 10 Times", minVal = 10, name = "Be 3rd 10 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 100 Times", minVal = 100, name = "Be 3rd 100 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "3rd Place 1000 Times", minVal = 1000, name = "Be 3rd 1000 Times in Tournament", field = AchivementsFields.Tournament3rdPlace, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login once", minVal = 1, name = "First Login", field = AchivementsFields.Login, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1070px-Golden_star.svg.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 10 Times", minVal = 10, name = "Login 10 Times", field = AchivementsFields.Login, url = "http://www.rytmika.eu/fileman/Uploads/10.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 100 Times", minVal = 100, name = "Login 100 Times", field = AchivementsFields.Login, url = "http://got-crossfit.com/wp-content/uploads/2014/06/100.gif"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 1000 Times", minVal = 1000, name = "Login 1000 Times", field = AchivementsFields.Login, url = "https://www.netmaths.net/Medias_Collection/Badges/achievement-class-1000-gold-stars/badge_l.png"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Login 10000 Times", minVal = 10000, name = "Login 10000 Times", field = AchivementsFields.Login, url = "https://www.artefactgroup.com/wp-content/uploads/2015/09/10000ft.png"),


      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 10 tournaments wihout any defeat", minVal = 10, name = "Never lose x10", field = AchivementsFields.NeverLoseTournament, url = ""),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 100 tournaments wihout any defeat", minVal = 100, name = "Never lose x100", field = AchivementsFields.NeverLoseTournament, url = ""),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Win 1000 tournaments wihout any defeat", minVal = 1000, name = "Never lose x1000", field = AchivementsFields.NeverLoseTournament, url = ""),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Battleship ranking", minVal = 1, name = "Battleship Master", field = AchivementsFields.Games, url = "", helper = "Battleship"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Battleship ranking", minVal = 2, name = "Battleship First Officer", field = AchivementsFields.Games, url = "", helper = "Battleship"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Battleship ranking", minVal = 3, name = "Battleship Navigator", field = AchivementsFields.Games, url = "", helper = "Battleship"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Checkers ranking", minVal = 1, name = "Checkers Master", field = AchivementsFields.Games, url = "", helper = "Checkers"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Checkers ranking", minVal = 2, name = "Checkers First Officer", field = AchivementsFields.Games, url = "", helper = "Checkers"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Checkers ranking", minVal = 3, name = "Checkers Navigator", field = AchivementsFields.Games, url = "", helper = "Checkers"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Chess ranking", minVal = 1, name = "Chess Master", field = AchivementsFields.Games, url = "", helper = "Chess"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Chess ranking", minVal = 2, name = "Chess First Officer", field = AchivementsFields.Games, url = "", helper = "Chess"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Chess ranking", minVal = 3, name = "Chess Navigator", field = AchivementsFields.Games, url = "", helper = "Chess"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Go ranking", minVal = 1, name = "Go Master", field = AchivementsFields.Games, url = "", helper = "Go"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Go ranking", minVal = 2, name = "Go First Officer", field = AchivementsFields.Games, url = "", helper = "Go"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Go ranking", minVal = 3, name = "Go Navigator", field = AchivementsFields.Games, url = "", helper = "Go"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Magic ranking", minVal = 1, name = "Magic Master", field = AchivementsFields.Games, url = "", helper = "Magic"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Magic ranking", minVal = 2, name = "Magic First Officer", field = AchivementsFields.Games, url = "", helper = "Magic"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Magic ranking", minVal = 3, name = "Magic Navigator", field = AchivementsFields.Games, url = "", helper = "Magic"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Mahjong ranking", minVal = 1, name = "Mahjong Master", field = AchivementsFields.Games, url = "", helper = "Mahjong"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Mahjong ranking", minVal = 2, name = "Mahjong First Officer", field = AchivementsFields.Games, url = "", helper = "Mahjong"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Mahjong ranking", minVal = 3, name = "Mahjong Navigator", field = AchivementsFields.Games, url = "", helper = "Mahjong"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Monopoly ranking", minVal = 1, name = "Monopoly Master", field = AchivementsFields.Games, url = "", helper = "Monopoly"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Monopoly ranking", minVal = 2, name = "Monopoly First Officer", field = AchivementsFields.Games, url = "", helper = "Monopoly"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Monopoly ranking", minVal = 3, name = "Monopoly Navigator", field = AchivementsFields.Games, url = "", helper = "Monopoly"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Risk ranking", minVal = 1, name = "Risk Master", field = AchivementsFields.Games, url = "", helper = "Risk"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Risk ranking", minVal = 2, name = "Risk First Officer", field = AchivementsFields.Games, url = "", helper = "Risk"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Risk ranking", minVal = 3, name = "Risk Navigator", field = AchivementsFields.Games, url = "", helper = "Risk"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Scrabble ranking", minVal = 1, name = "Scrabble Master", field = AchivementsFields.Games, url = "", helper = "Scrabble"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Scrabble ranking", minVal = 2, name = "Scrabble First Officer", field = AchivementsFields.Games, url = "", helper = "Scrabble"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Scrabble ranking", minVal = 3, name = "Scrabble Navigator", field = AchivementsFields.Games, url = "", helper = "Scrabble"),

      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 1st place in Talisman ranking", minVal = 1, name = "Talisman Master", field = AchivementsFields.Games, url = "", helper = "Talisman"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 2nd place in Talisman ranking", minVal = 2, name = "Talisman First Officer", field = AchivementsFields.Games, url = "", helper = "Talisman"),
      achivements += Achivement(conditions = Conditions.GreaterAndEquals, description = "Have 3rd place in Talisman ranking", minVal = 3, name = "Talisman Navigator", field = AchivementsFields.Games, url = "", helper = "Talisman")


    )

    db.run(query)
    println("Inserted\n")

    db.run(queries)

  }


}
