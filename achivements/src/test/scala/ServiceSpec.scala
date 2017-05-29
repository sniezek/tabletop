//import akka.event.NoLogging
//import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
//import akka.http.scaladsl.model.ContentTypes._
//import akka.http.scaladsl.model.StatusCodes._
//import akka.http.scaladsl.testkit.ScalatestRouteTest
//import org.scalatest._
//
//class ServiceSpec extends FlatSpec with Matchers with ScalatestRouteTest with Service {
//  override def testConfigSource = "akka.loglevel = WARNING"
//
//  override def config = testConfig
//
//  override val logger = NoLogging
//
//  val achivement1 = Achievement(0, Some(List(1, 2, 3)))
//  val achivement2 = Achievement(1, Some(List()))
//
//  "Service" should "respond user ID query " in {
//    Get(s"/achi/${achivement1.userId}") ~> routes ~> check {
//      status shouldBe OK
//      contentType shouldBe `application/json`
//      responseAs[Achievement] shouldBe achivement1
//    }
//
//    Get(s"/achi/${achivement2.userId}") ~> routes ~> check {
//      status shouldBe OK
//      contentType shouldBe `application/json`
//      responseAs[Achievement] shouldBe achivement2
//    }
//  }
//
//
//  it should "respond with bad request on incorrect user ID" in {
//    Get("/achi/asdfg") ~> routes ~> check {
//      status shouldBe BadRequest
//      (responseAs[String] contains "Wrong Id") shouldEqual true
//    }
//
//    Get("/achi/3") ~> routes ~> check {
//      status shouldBe BadRequest
//      println(response.entity.contentType)
//      (responseAs[String] contains "User not found") shouldEqual true
//    }
//  }
//}
