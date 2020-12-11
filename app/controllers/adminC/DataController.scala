package controllers.adminC

import java.io.{File, FileInputStream}
import dao._
import implicits.Implicits._

import javax.inject.Inject
import models.Tables.{KitRow, MutationTableRow, PatientRow, SampleRow}
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._
import tool.{FileTool, FormTool, Tool}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{Await, Future}
import models._

import scala.concurrent.duration.Duration
/**
 * Created by yz on 21/7/2020
 */
class DataController @Inject()(cc: ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao,
  implicit val mutationDao: mutationDao,
  implicit val patientDao: PatientDao,
  implicit val sampleDao: SampleDao,
  implicit val kitDao: kitDao,
) extends AbstractController(cc) {

  def addByFileBefore = Action { implicit request =>
    Ok(views.html.admin.data.addByFile())
  }


  def manageBefore = Action { implicit request =>
    Ok(views.html.admin.data.manage())
  }

  /* def addByFile = Action.async(parse.multipartFormData) { request =>
     Ok(Json.obj("valid" -> true))
   }*/

  def addByFile = Action.async(parse.multipartFormData) { request =>
    val file = request.body.file("file").get
    val tmpDir = Tool.createTempDirectory("tmpDir")
    val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
    file.ref.moveTo(tmpXlsxFile, true)

    /*  val myMessage = Tool.fileCheck(tmpXlsxFile).toMyMessage
      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {*/


    //先验证文件表头，简单验证 区分是样本表、病人表还是突变信息表


    // filecheck方法验证了
    val myMessage = FileTool.fileCheck(tmpXlsxFile).toMyMessage
    println(myMessage)
    if (!myMessage.valid) {
      Tool.deleteDirectory(tmpDir)
      Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
    } else if (tmpXlsxFile.xlsxLines().head.head == "PATIENT_ID" && tmpXlsxFile.xlsxLines().head(1) == "LYMPH_NODES_EXAMINED_POSITIVE") {
      val lines = tmpXlsxFile.xlsxLines()
      val rows = lines.drop(1).map { map =>
        PatientRow(
          0,
          map(0),
          Json.toJson(map)
        )
      }

      patientDao.insertPatientTables(rows).map { x =>
        Tool.deleteDirectory(tmpDir)
        Ok(Json.obj("valid" -> true))
      }
    } else if (tmpXlsxFile.xlsxLines().head(1) == "SAMPLE_ID") {
      val lines = tmpXlsxFile.xlsxLines()
      val rows = lines.drop(1).map { map =>
        SampleRow(0, map(0), map(1), Json.toJson(map))
      }
      sampleDao.insertSampleTable(rows).map {
        x =>
          Tool.deleteDirectory(tmpDir)
          Ok(Json.obj("valid" -> true))
      }
    } else {
      val lines = tmpXlsxFile.xlsxLines()
      val headers = lines.head.toLowerCase
      println(headers)
      val rows = lines.lineMapNoLower.map { map =>
        MutationTableRow(
          0,
          Json.toJson(map),
          map("tumor_sample_barcode"),
          0
          //这里是因为表格里没有，样本id和试剂盒需要从表格里提取出来
        )
      }
      mutationDao.insertOrUpdates(rows).flatMap { x =>
        Tool.deleteDirectory(tmpDir)
        mutationDao.queryAll().map { all =>
          Ok(Json.obj("valid" -> true))
        }
      }
    }

    //根据不同的表信息，将表的内容上传到数据库里

  }

  def addKitBefore() = Action{
    implicit request =>
    Ok(views.html.admin.data.addKit())
  }

  def saveKit = Action {
    implicit request =>
      val v = request.body.asJson.get
      val kitRow = KitRow(
        0,
        v
      )
      Await.result(kitDao.insertKit(kitRow),Duration.Inf)

      val res = Await.result(kitDao.queryKit(),Duration.Inf)
      println(res)
      Ok("hello")
  }


}
