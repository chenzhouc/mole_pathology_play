package utils

import java.util.concurrent.TimeUnit

import slick.codegen.SourceCodeGenerator
import slick.jdbc.meta.MTable

import scala.concurrent.duration._
import scala.concurrent.{Await, Future}
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by yz on 2017/5/5.
 */
object SlickCodegen {

  def main(args: Array[String]): Unit = {
    val slickDriver = "utils.MyPostgresProfile"
    val url = "jdbc:postgresql://localhost:5434/pathology"
    val jdbcDriver = "org.postgresql.Driver"
    val user = "postgres"
    val password = "123456"

    val db = MyPostgresProfile.api.Database.forURL(url, user, password)
    val dbio = MyPostgresProfile.createModel()
    val model = db.run(dbio)
    val future: Future[SourceCodeGenerator] = model.map(model => new SourceCodeGenerator(model) {

      override def packageCode(profile: String, pkg: String, container: String, parentType: Option[String]): String = {
        s"""
package ${pkg}
// AUTO-GENERATED Slick data model
/** Stand-alone Slick data model for immediate use */
object ${container} extends {
  val profile = $profile
} with ${container}

/** Slick data model trait for extension, choice of backend or usage in the cake pattern. (Make sure to initialize this late.) */
trait ${container}${parentType.map(t => s" extends $t").getOrElse("")} {
  val profile: $profile
  import profile.api._
  ${indent(code)}
}
      """.trim()
      }

      override def code = {
        "import com.github.tototoshi.slick.PostgresJodaSupport._\n" +
          "import org.joda.time.DateTime\n" + super.code
      }

      override def Table = new Table(_) {
        override def Column = new Column(_) {
          override def rawType = model.tpe match {
            case "java.sql.Timestamp" => "DateTime" // kill j.s.Timestamp
            case "scala.collection.immutable.Map" => "Map[String,String]"
            case "scala.collection.immutable.Seq" => "List[String]"
            case x =>
              //              println(x)
              super.rawType
          }
        }
      }

    })
    val codegen: SourceCodeGenerator = Await.result(future, Duration.create(5, TimeUnit.MINUTES))
    codegen.writeToFile(slickDriver, "app", "models", "Tables", "Tables.scala")
  }


}
