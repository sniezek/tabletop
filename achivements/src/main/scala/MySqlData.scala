import slick.driver.MySQLDriver.api._

class MySQLData extends MySqlMagic {
  val db = Database.forConfig("db")
}