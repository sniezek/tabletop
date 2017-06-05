import slick.driver.H2Driver.api._

import scala.concurrent.Await
import scala.concurrent.duration.Duration

class H2Data extends DatabaseSchema with InitialData with Magic {

  val db = Database.forConfig("h2")
  val dao = new Dao(db)

  def run(): Unit = {
    val future = createSchemaIfNotExists(insertInitialData)
    Await.ready(future, Duration.Inf)
  }

}
