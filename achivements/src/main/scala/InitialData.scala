

import slick.driver.H2Driver.api._

import scala.concurrent.Future

trait InitialData {
  self: DatabaseSchema =>

  def db: Database

  def insertInitialData(): Future[Unit] = {
    val queries = DBIO.seq(
      statistics.delete,

      statistics += Statistic(playerId = 1),
      statistics += Statistic(playerId = 2),
      statistics += Statistic(playerId = 3),
      statistics += Statistic(playerId = 4),
      statistics += Statistic(playerId = 5),
      statistics += Statistic(playerId = 6),
      statistics += Statistic(playerId = 7),
      statistics += Statistic(playerId = 8),
      statistics += Statistic(playerId = 9),

      achivements.delete,

      achivements += Achivement(conditions = Conditions.Equals, description = "desc21", minVal = 10, name = "name123") //TODO define rest of achivements
    )

    println("Inserted\n")

    db.run(queries)
  }


}
