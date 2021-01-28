package controllers.adminC


import dao._
import implicits.Implicits._

import javax.inject.Inject
import models.Tables.{KitRow, MutationTableRow, PatientKitRow, PatientRow, SampleKitRow, SampleRow}
import org.apache.commons.codec.binary.StringUtils
import play.api.libs.json.{JsObject, JsValue, Json}
import play.api.mvc._
import tool.{FileTool, FormTool, Tool, parseTool}
import utils.TableUtils.pageForm

import java.io.File
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{Await, Future}
import scala.concurrent.duration.Duration
import scala.util.parsing.json.JSONObject


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
  implicit val patientKitDao: PatientKitDao,
  implicit val sampleKitDao: SampleKitDao
) extends AbstractController(cc) {

  def addByFileBefore = Action { implicit request =>
    Ok(views.html.admin.data.addByFile())
  }

  def manageBefore = Action { implicit request =>
    Ok(views.html.admin.data.manage())
  }

  //上传mutation_table文件，遇到重复项 追加
  def addByFile = Action.async(parse.multipartFormData) { request =>
    val file = request.body.file("file").get
    val tmpDir = Tool.createTempDirectory("tmpDir")
    val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
    file.ref.moveTo(tmpXlsxFile, true)
    val myMessage = FileTool.fileCheck(tmpXlsxFile).toMyMessage

    if (!myMessage.valid) {
      Tool.deleteDirectory(tmpDir)
      Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
    } else {
      val lines = tmpXlsxFile.xlsxLines()
      val headers = lines.head.toLowerCase
      val rows = lines.lineMapNoLower.map { map =>
        MutationTableRow(
          0,
          Json.toJson(map),
          map("tumor_sample_barcode")
        )
      }
      mutationDao.insert(rows).flatMap { x =>
        Tool.deleteDirectory(tmpDir)
        mutationDao.queryAll().map { all =>
          Ok(Json.obj("valid" -> true, "message" -> "success！"))
        }
      }
    }
  }

  //添加mutation_table数据，覆盖重复数据
  def addMutationFileDistinct = Action.async(parse.multipartFormData) {
    request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("tmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.fileCheck(tmpXlsxFile).toMyMessage

      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        val rows = lines.lineMapNoLower.map {
          map =>
            val tumor_sample_barcode = map("tumor_sample_barcode")
            val row = MutationTableRow(
              0,
              Json.toJson(map),
              tumor_sample_barcode
            )
            row
        }
        val x = Await.result(mutationDao.queryMutationDistinct(rows),Duration.Inf)
        val ids = x.map(x => x.sampleBarcode).toSet
        mutationDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success","ids" -> ids))
            }
        }
      }
  }

  //添加样本页
  def addSampleFileBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.addSampleFile())
  }

  //添加病人信息页
  def addPatientFileBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.addPatientFile())
  }

  def addSampleFile = Action.async(parse.multipartFormData) {
    implicit request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("SampleTmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.SampleFileCheck(tmpXlsxFile).toMyMessage
      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        println(headers)
        val rows = lines.lineMapNoLower.map {
          map =>
            SampleRow(
              0,
              map("sample_id"),
              map("patient_id"),
              Json.toJson(map)
            )
        }
        sampleDao.insertSampleTable(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            patientDao.queryAll().map(all =>
              Ok(Json.obj("valid" -> true, "message" -> "success！"
              )))
        }
      }
  }

  def addPatientFile = Action.async(parse.multipartFormData) {
    implicit request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("PatientTmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.PatientFileCheck(tmpXlsxFile).toMyMessage
      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        val rows = lines.lineMapNoLower.map {
          map =>
            PatientRow(
              0,
              map("patient_id"),
              Json.toJsObject(map)
            )
        }
        patientDao.insertPatientTables(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            patientDao.queryAll().map(all =>
              Ok(Json.obj("valid" -> true, "message" -> "success"
              )))
        }
      }
  }

  //跳转到配置突变信息表列筛选页
  def addKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addKit())
  }

  //跳转到配置样本信息表列筛选页
  def addSampleKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addSampleKit())
  }

  //跳转到配置病人信息表列筛选页
  def addPatientKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addPatientKit())
  }

  //保存突变信息表的列筛选
  def saveKit() = Action {
    implicit request =>
      val v = request.body.asFormUrlEncoded.get
      val p = v("v").head
      val res = parseTool.parseKit(p)
      val res2 = res.map({
        case (a, b) => (a, b.map(x => Json.obj("param" -> x._1, "value" -> x._2)))
      })
      val res3 = res2.map {
        case (a, b) => (a.substring(1, a.length - 1), Json.toJson(b.toArray))
      }.map(x => Json.obj("name" -> x._1, "config" -> x._2))
      /* val res3 = res2.map(x => Json.obj("name" -> x._1,"config" -> x._2))*/
      val rs = res3.toList
      //查询是否有同名的试剂盒
      val value = (Json.toJson(rs.toArray) \\ "name").map(x => x.toString())
      val numbers = value.map(x => {
        Await.result(kitDao.queryKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => KitRow(
          0,
          x
        ))
        Await.result(kitDao.insertKit(rows), Duration.Inf)
        Ok("success")
      } else {
        Ok(Json.obj("list" -> Json.toJson(newmap)))
      }
  }

  //保存病人信息表的列筛选
  def savePatientKit = Action {
    implicit request =>
      val v = request.body.asFormUrlEncoded.get
      val p = v("v").head
      val res = parseTool.parseKit(p)
      val res2 = res.map({
        case (a, b) => (a, b.map(x => Json.obj("param" -> x._1, "value" -> x._2)))
      })
      val res3 = res2.map {
        case (a, b) => (a.substring(1, a.length - 1), Json.toJson(b.toArray))
      }.map(x => Json.obj("name" -> x._1, "config" -> x._2))
      /* val res3 = res2.map(x => Json.obj("name" -> x._1,"config" -> x._2))*/
      val rs = res3.toList
      //查询是否有同名的试剂盒
      val value = (Json.toJson(rs.toArray) \\ "name").map(x => x.toString())
      val numbers = value.map(x => {
        Await.result(patientKitDao.queryKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => PatientKitRow(
          0,
          x
        ))
        Await.result(patientKitDao.insertKit(rows), Duration.Inf)
        Ok("success")
      } else {
        Ok(Json.obj("list" -> Json.toJson(newmap)))
      }
  }

  //保存样本信息表的列筛选
  def saveSampleKit = Action {
    implicit request =>
      val v = request.body.asFormUrlEncoded.get
      val p = v("v").head
      val res = parseTool.parseKit(p)
      val res2 = res.map({
        case (a, b) => (a, b.map(x => Json.obj("param" -> x._1, "value" -> x._2)))
      })
      val res3 = res2.map {
        case (a, b) => (a.substring(1, a.length - 1), Json.toJson(b.toArray))
      }.map(x => Json.obj("name" -> x._1, "config" -> x._2))
      /* val res3 = res2.map(x => Json.obj("name" -> x._1,"config" -> x._2))*/
      val rs = res3.toList
      //查询是否有同名的试剂盒
      val value = (Json.toJson(rs.toArray) \\ "name").map(x => x.toString())
      val numbers = value.map(x => {
        Await.result(sampleKitDao.queryKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => SampleKitRow(
          0,
          x
        ))
        Await.result(sampleKitDao.insertKit(rows), Duration.Inf)
        Ok("success")
      } else {
        Ok(Json.obj("list" -> Json.toJson(newmap)))
      }
  }

  def searchMutationKit = Action {
    implicit request =>
      val res = Await.result(kitDao.queryKit(), Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      Ok(Json.toJson(r))
  }

  def searchPatientKit = Action {
    implicit request =>
      val res = Await.result(patientKitDao.queryKit(), Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      Ok(Json.toJson(r))
  }

  def searchSampleKit = Action {
    implicit request =>
      val res = Await.result(sampleKitDao.queryKit(), Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      Ok(Json.toJson(r))
  }

  //TODO  异步调用后直接返回结果 有问题 List[Future] -> Future[List]    Future.sequence()
  def deleteMutationTableByIds() = Action.async { implicit request =>
    val value = request.body.asText.get
    val list = value.split(",").toList
    mutationDao.deleteUserById(list).map(x => Ok("success"))
  }

  //TODO
  def deletePatientTableByIds() = Action.async { implicit request =>
    val value = request.body.asText.get
    val list = value.split(",").toList
    patientDao.deleteUserById(list).map(x => Ok("success"))
  }

  //TODO
  def deleteSampleTableByIds() = Action.async { implicit request =>
    val value = request.body.asText.get
    val list = value.split(",").toList
    sampleDao.deleteUserById(list).map(x => Ok("success"))
  }

  def managePatientBefore() = Action { implicit request =>
    Ok(views.html.admin.data.managePatient())
  }

  def manageSampleBefore() = Action { implicit request =>
    Ok(views.html.admin.data.manageSample())
  }

  def getMutationTable = Action.async {
    implicit request =>
      // 根据用户自带的过滤条件进行查询
      val page = pageForm.bindFromRequest.get
      mutationDao.queryAll(page).map { case (size, x) =>
        val json = x.map { y =>
          y.data.as[JsObject] ++ Json.obj("sample_id" -> y.sampleBarcode, "id" -> y.id)
        }
        Ok(Json.obj("rows" -> json, "total" -> size))
      }
  }

  //添加sample_table数据，覆盖重复数据
  def addSampleFileDistinct = Action.async(parse.multipartFormData) {
    request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("SampleTmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.SampleFileCheck(tmpXlsxFile).toMyMessage

      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        val rows = lines.lineMapNoLower.map {
          map =>
            val sample_id = map("sample_id")
            val patient_id = map("patient_id")
            val row = SampleRow(
              0,
              sample_id,
              patient_id,
              Json.toJson(map),
            )
            row
        }
        sampleDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success"))
            }
        }
      }
  }


  //添加patient_table数据，覆盖重复数据
  def addPatientFileDistinct = Action.async(parse.multipartFormData) {
    request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("PatientTmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.PatientFileCheck(tmpXlsxFile).toMyMessage
      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        val rows = lines.lineMapNoLower.map {
          map =>
            val patient_id = map("patient_id")
            val row = PatientRow(
              0,
              patient_id,
              Json.toJson(map),
            )
            row
        }

        patientDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success"))
            }
        }
      }
  }

}
