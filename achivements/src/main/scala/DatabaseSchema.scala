import slick.driver.H2Driver.api._

trait DatabaseSchema {

  class Statistics(tag: Tag) extends Table[Statistic](tag, "STATISTICS") {
    def id = column[Int]("ID", O.PrimaryKey, O.AutoInc)

    def playerId = column[Int]("PLAYER_ID")

    def tournamentWins = column[Int]("TOURNAMENT_WINS")

    def totalWins = column[Int]("TOTAL_WINS")

    def * = (id.?, playerId, tournamentWins, totalWins) <> (Statistic.tupled, Statistic.unapply)
  }

  val statistics = TableQuery[Statistics]

  class Achivements(tag: Tag) extends Table[Achivement](tag, "ACHIVEMENTS") {
    def id = column[Int]("ID", O.PrimaryKey, O.AutoInc)

    def name = column[String]("NAME")

    def description = column[String]("DESCRIPTION")

    def condition = column[Conditions.Value]("CONDITION")

    def minVal = column[Int]("MIN_VAL")

    def hidden = column[Boolean]("HIDDEN")

    def url = column[String]("URL")

    def field = column[String]("FIELD")

    def helper = column[String]("HELPER")

    def * = (id.?, name, description, condition, minVal, hidden, url, field, helper) <> (Achivement.tupled, Achivement.unapply)
  }

  val achivements = TableQuery[Achivements]

  val allSchemas = statistics.schema ++ achivements.schema

  implicit lazy val conditionsMapping = MappedColumnType.base[Conditions.Value, String](
    c => c.toString,
    s => Conditions.withName(s)
  )

}


