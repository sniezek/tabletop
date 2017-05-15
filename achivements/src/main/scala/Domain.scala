
case class Statistic(id: Option[Int] = None, playerId: Int, tournamentWins: Int = 0, totalWins: Int = 0)

case class Achivement(id: Option[Int] = None, name: String = "", description: String = "", conditions: Conditions.Value, minVal: Int = 0, hidden: Boolean = false, url: String = "", field: String)