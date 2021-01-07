package controllers.adminC

import java.io.{File, FileInputStream}
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
          Ok(Json.obj("valid" -> true, "message" -> "success！"))
        }
      }
    }

    //根据不同的表信息，将表的内容上传到数据库里


    /*if (tmpXlsxFile.xlsxLines().head.head == "PATIENT_ID" && tmpXlsxFile.xlsxLines().head(1) == "LYMPH_NODES_EXAMINED_POSITIVE") {
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
    } else*/
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
        println(headers)
        val rows = lines.lineMapNoLower.map {
          map =>
            PatientRow(
              0,
              map("patient_id"),
              Json.toJson(map)
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

    /* res3.foreach(x => {
       val kitRow = KitRow(
         0,
         x
       )
     })
     val kitRow = KitRow(
       0,
       res3
     )
     val name = (v \ "name").as[String]
     //先查询是否数据库内有同名的数量，数量不为0则直接返回错误
     val number = Await.result(kitDao.queryKitNumberByName(name),Duration.Inf)
     if(number == 0){
       Await.result(kitDao.insertKit(kitRow),Duration.Inf)
       Ok("success")
     }else{
       Ok("数据库已有同名的试剂盒，请更换试剂盒名称！")
     }*/
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

}
