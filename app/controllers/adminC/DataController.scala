package controllers.adminC


import com.typesafe.sslconfig.ssl.FakeChainedKeyStore.CA.Alias
import dao._
import implicits.Implicits._
import jdk.jfr.events.ExceptionThrownEvent

import javax.inject.Inject
import models.Tables.{AliasRow, KitRow, MutationTableNongsRow, MutationTableRow, PatientRow, SampleRow, SearchtypeRow}
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
  implicit val mutationNoNgsDao: MutationNoNgsDao,
  implicit val aliasDao: AliasDao,
  implicit val searchFieldDao: SearchFieldDao
) extends AbstractController(cc) {

  def devlogs = Action {
    implicit request =>
      Ok(views.html.admin.devlogs())
  }

  def addByFileBefore = Action { implicit request =>
    Ok(views.html.admin.data.upload.addByFile())
  }

  def addByFileNoNGSBefore = Action { implicit request =>
    Ok(views.html.admin.data.upload.addByFileNoNGS())
  }

  def addByFileNoNGS = Action.async(parse.multipartFormData) { request =>
    val file = request.body.file("file").get
    val tmpDir = Tool.createTempDirectory("NoNGSTmpDir")
    val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
    file.ref.moveTo(tmpXlsxFile, true)
    //filecheck -> filecheckNoNGS
    val myMessage = FileTool.MutationNoNGSFileCheck(tmpXlsxFile).toMyMessage

    if (!myMessage.valid) {
      Tool.deleteDirectory(tmpDir)
      Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
    } else {
      val lines = tmpXlsxFile.xlsxLines()
      val headers = lines.head.toLowerCase
      val data = Await.result(aliasDao.queryAll(), Duration.Inf)
      val map = data.map(x => (x.alias, x.name)).toMap
      val rows = lines.lineMapNoLower.map {
        map =>
          MutationTableNongsRow(
            0,
            Json.toJson(map),
            map("sample_id")
          )
      }

      val conditions = Json.toJson(headers.map(x => Json.obj(x -> "text")))

      mutationNoNgsDao.insert(rows).flatMap {
        x =>
          Tool.deleteDirectory(tmpDir)
          mutationNoNgsDao.queryAll().map {
            all =>
              Ok(Json.obj("valid" -> true, "message" -> "success!"))
          }
      }

    }
  }

  def addByFileNoNGSDistinct = Action.async(parse.multipartFormData) {
    request =>
      val file = request.body.file("file").get
      val tmpDir = Tool.createTempDirectory("NoNGSTmpDir")
      val tmpXlsxFile = new File(tmpDir, "tmp.xlsx")
      file.ref.moveTo(tmpXlsxFile, true)
      val myMessage = FileTool.MutationNoNGSFileCheck(tmpXlsxFile).toMyMessage

      if (!myMessage.valid) {
        Tool.deleteDirectory(tmpDir)
        Future.successful(Ok(Json.obj("message" -> myMessage.message, "valid" -> false)))
      } else {
        val lines = tmpXlsxFile.xlsxLines()
        val headers = lines.head.toLowerCase
        val rows = lines.lineMapNoLower.map {
          map =>
            val sample_id = map("sample_id")
            val row = MutationTableNongsRow(
              0,
              Json.toJson(map),
              sample_id,
            )
            row
        }
        val x = Await.result(mutationNoNgsDao.queryMutationNoNGSDistinct(rows), Duration.Inf)
        val ids = x.map(x => x.sampleId)
        mutationNoNgsDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationNoNgsDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success", "ids" -> ids))
            }
        }
      }
  }


  def manageBefore = Action { implicit request =>
    Ok(views.html.admin.data.manage.manage())
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
      val data = Await.result(aliasDao.queryAll(), Duration.Inf)
      val map = data.map(x => (x.alias, x.name)).toMap
      val rows = lines.lineMapNoLower(map).map { map =>
        MutationTableRow(
          0,
          Json.toJson(map),
          map("sample_id")
        )
      }
      val conditions = Json.toJson(headers.map(x => Json.obj(x -> "text")))
      /* Await.result(searchTypeDao.insertMutationCondition(conditions),Duration.Inf)*/
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
            val tumor_sample_barcode = map("sample_id")
            val row = MutationTableRow(
              0,
              Json.toJson(map),
              tumor_sample_barcode
            )
            row
        }
        val x = Await.result(mutationDao.queryMutationDistinct(rows), Duration.Inf)
        val ids = x.map(x => x.sampleBarcode).toSet
        mutationDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success", "ids" -> ids))
            }
        }
      }
  }

  //添加样本页
  def addSampleFileBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.upload.addSampleFile())
  }

  //添加病人信息页
  def addPatientFileBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.upload.addPatientFile())
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
        val rows = lines.lineMapNoLower.map {
          map =>
            SampleRow(
              0,
              map("sample_id"),
              map("patient_name"),
              Json.toJson(map)
            )
        }
        sampleDao.insertSampleTable(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            sampleDao.queryAll().map(all =>
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
      Ok(views.html.admin.data.addKit.addKit())
  }

  //跳转到配置样本信息表列筛选页
  def addSampleKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addKit.addSampleKit())
  }

  //跳转到配置病人信息表列筛选页
  def addPatientKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addKit.addPatientKit())
  }

  def addMutationNoNGSKitBefore() = Action {
    implicit request =>
      Ok(views.html.admin.data.addKit.addMutationNoNGSKit())
  }

  //跳转到配置搜索类型页
  def addSearchCondition() = Action {
    implicit request =>
      Ok(views.html.admin.data.addSearchCondition.addSearchCondition())
  }

  //跳转到配置样本信息表搜索类型页
  def addSearchSampleCondition() = Action {
    implicit request =>
      Ok(views.html.admin.data.addSearchCondition.addSearchCondition_Sample())
  }

  //跳转到配置病人信息表搜索类型页
  def addSearchPatientCondition() = Action {
    implicit request =>
      Ok(views.html.admin.data.addSearchCondition.addSearchCondition_Patient())
  }

  def addSearchMutationNoNGSCondition = Action {
    implicit request =>
      Ok(views.html.admin.data.addSearchCondition.addSearchCondition_MutationNoNGS())
  }

  //保存分子信息表的列筛选
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
        Await.result(kitDao.queryMutationKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => KitRow(
          0,
          "mutation",
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
      //获取字符串
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
        Await.result(kitDao.queryPatientKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => KitRow(
          0,
          "patient",
          x
        ))
        Await.result(kitDao.insertKit(rows), Duration.Inf)
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
        Await.result(kitDao.querySampleKitNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => KitRow(
          0,
          "sample",
          x
        ))
        Await.result(kitDao.insertKit(rows), Duration.Inf)
        Ok("success")
      } else {
        Ok(Json.obj("list" -> Json.toJson(newmap)))
      }
  }

  def saveMutationNoNGSKit = Action {
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
        Await.result(kitDao.queryMutationNoNGSNumberByName(x.substring(1, x.length - 1)), Duration.Inf)
      })
      val bool = numbers.forall(x => x == 0)
      val map = value.zip(numbers).toMap
      val newmap = map.filter(x => x._2 > 0).map(x => x._1).toList
      println(newmap)
      if (bool == true) {
        val rows = rs.map(x => KitRow(
          0,
          "mutationNoNGS",
          x
        ))
        Await.result(kitDao.insertKit(rows), Duration.Inf)
        Ok("success")
      } else {
        Ok(Json.obj("list" -> Json.toJson(newmap)))
      }
  }


  def searchMutationKit = Action {
    implicit request =>
      //TODO  按type过滤kit
      val res = Await.result(kitDao.queryKit(), Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      println("Mutation")
      println(r)
      Ok(Json.toJson(r))
  }

  def searchPatientKit = Action {
    implicit request =>
      val res = Await.result(kitDao.queryPatientKit, Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      println("patient")
      println(r)
      Ok(Json.toJson(r))
  }

  def searchSampleKit = Action {
    implicit request =>
      val res = Await.result(kitDao.querySampleKit, Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      println("sample")
      println(r)
      Ok(Json.toJson(r))
  }

  def searchMutationNoNGSKit = Action {
    implicit request =>
      val res = Await.result(kitDao.queryMutationNoNGSKit, Duration.Inf)
      val r = res.map(x => (x.data \ "name").as[JsValue])
      println("NoNGS")
      println(r)
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

  def deleteMutationTableNoNGSByIds() = Action.async {
    implicit request =>
      val value = request.body.asText.get
      val list = value.split(",").toList
      mutationNoNgsDao.deleteUserById(list).map(x => Ok("success"))
  }

  def managePatientBefore() = Action { implicit request =>
    Ok(views.html.admin.data.manage.managePatient())
  }

  def manageSampleBefore() = Action { implicit request =>
    Ok(views.html.admin.data.manage.manageSample())
  }

  def manageMutationTableNoNGSBefore() = Action { implicit request =>
    Ok(views.html.admin.data.manage.manageMutationNoNGS())
  }

  def getMutationTable = Action.async {
    implicit request =>
      // 根据用户自带的过滤条件进行查询
      val page = pageForm.bindFromRequest.get
      println(page)
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
            val patient_id = map("patient_name")
            val row = SampleRow(
              0,
              sample_id,
              patient_id,
              Json.toJson(map),
            )
            row
        }
        val x = Await.result(sampleDao.queryDistinctSample(rows), Duration.Inf)
        val ids = x.map(x => x.sampleid)
        sampleDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success", "ids" -> ids))
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
        val x = Await.result(patientDao.queryPatientDistinct(rows), Duration.Inf)
        val ids = x.map(x => x.patientid).toSet
        patientDao.insertOrUpdate(rows).flatMap {
          x =>
            Tool.deleteDirectory(tmpDir)
            mutationDao.queryAll().map { all =>
              Ok(Json.obj("valid" -> true, "message" -> "success", "ids" -> ids))
            }
        }
      }
  }

  // 搜索kit的数据
  def queryKitdata = Action.async {
    implicit request =>
      kitDao.queryKit().map {
        x =>
          val json = x.map(y => y.data.as[JsObject])
          val size = x.length
          Ok(Json.obj("rows" -> json, "total" -> size))
      }
  }

  // 搜索SampleKit的数据
  def querySampleKitdata = Action.async {
    implicit request =>
      /*sampleKitDao.queryKit().map {
        x => {
          val json = x.map(y => y.data.as[JsObject])
          Ok(Json.obj("rows" -> json))
        }
      }*/
      kitDao.querySampleKit.map {
        x =>
          val json = x.map(y => y.data.as[JsObject])
          val size = x.length
          Ok(Json.obj("rows" -> json, "total" -> size))
      }
  }

  // 搜索PatientKit的数据
  def queryPatientKitdata = Action.async {
    implicit request =>
      kitDao.queryPatientKit.map {
        x => {
          val json = x.map(y => y.data.as[JsObject])
          val size = x.length
          Ok(Json.obj("rows" -> json, "total" -> size))
        }
      }
  }

  def queryMutationNoNGSKitData = Action.async {
    implicit request =>
      kitDao.queryMutationNoNGSKit.map {
        x => {
          val json = x.map(y => y.data.as[JsObject])
          val size = x.length
          Ok(Json.obj("rows" -> json, "total" -> size))
        }
      }
  }

  def deleteMutationKit = Action.async {
    implicit request =>
      val value = request.body.asText.get
      val ids = value.split(",").toList
      // kitDao.deleteKitById(ids).map(x => Ok("success"))
      kitDao.deleteKitById(ids).map(x => Ok("success"))
  }

  def deletePatientKit = Action.async {
    implicit request =>
      val value = request.body.asText.get
      val ids = value.split(",").toList
      kitDao.deletePatientKitById(ids).map(x => Ok("success"))
  }

  def deleteSampleKit = Action.async {
    implicit request =>
      val value = request.body.asText.get
      val ids = value.split(",").toList
      kitDao.deleteSampleKitById(ids).map(x => Ok("success"))
  }

  def deleteMutationNoNGSKit = Action.async {
    implicit request =>
      val value = request.body.asText.get
      val ids = value.split(",").toList
      kitDao.deleteMutationNoNGSKitById(ids).map(x => Ok("success"))
  }

  def addAliasConditionBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.Alias.addAliasCondition())
  }

  def addAliasConditionNoNGSBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.Alias.addAliasConditionMutationNoNGS())
  }

  def addAliasConditionPatientBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.Alias.addAliasConditionPatient())
  }

  def addAliasConditionSampleBefore = Action {
    implicit request =>
      Ok(views.html.admin.data.Alias.addAliasConditionSample())
  }

  // 添加分子信息表的别名
  //TODO
  def addMutationAlias = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0), x(1)))
      //
      val rows = arrs.map(x => AliasRow(
        0,
        "mutation",
        x._1,
        x._2
      )).toList
      aliasDao.insert(rows)
      Ok(Json.toJson("success"))
  }


  def addPatientAlias = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0), x(1)))
      val rows = arrs.map(x => AliasRow(
        0,
        "patient",
        x._1,
        x._2
      )).toList
      aliasDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  def addSampleAlias = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0), x(1)))
      val rows = arrs.map(x => AliasRow(
        0,
        "sample",
        x._1,
        x._2
      )).toList
      aliasDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  def addMutationNoNGSAlias = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0), x(1)))
      val rows = arrs.map(x => AliasRow(
        0,
        "mutationNoNGS",
        x._1,
        x._2
      )).toList
      aliasDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  //查询mutation别名
  def queryAllMutationAlias = Action {
    implicit request =>
      val res = Await.result(aliasDao.queryMutationAlias, Duration.Inf)
      val rows = res.map(x => Json.obj("id" -> x.id, "type" -> x.`type`, "name" -> x.name, "alias" -> x.alias))
      val size = res.length
      Ok(Json.obj("rows" -> rows, "total" -> size))
  }

  def queryAllMutationNoNGSAlias = Action {
    implicit request =>
      val res = Await.result(aliasDao.queryMutationNoNGSAlias, Duration.Inf)
      val rows = res.map(x => Json.obj("id" -> x.id, "type" -> x.`type`, "name" -> x.name, "alias" -> x.alias))
      val size = res.length
      Ok(Json.obj("rows" -> rows, "total" -> size))
  }

  def queryAllSampleAlias = Action {
    implicit request =>
      val res = Await.result(aliasDao.querySampleAlias, Duration.Inf)
      val rows = res.map(x => Json.obj("id" -> x.id, "type" -> x.`type`, "name" -> x.name, "alias" -> x.alias))
      val size = res.length
      Ok(Json.obj("rows" -> rows, "total" -> size))
  }

  def queryAllPatientAlias = Action {
    implicit request =>
      val res = Await.result(aliasDao.queryPatientAlias, Duration.Inf)
      val rows = res.map(x => Json.obj("id" -> x.id, "type" -> x.`type`, "name" -> x.name, "alias" -> x.alias))
      val size = res.length
      Ok(Json.obj("rows" -> rows, "total" -> size))
  }

  //删除选中的别名
  def deleteSelectedMutationAlias = Action {
    implicit request =>
      val id = request.body.asText.get
      val strings = id.split(",").map(x => x.toInt)
      Await.result(aliasDao.deleteMutationAliasById(strings), Duration.Inf)
      Ok("success")
  }


  //增加4张表的字段类型
  def addMutationField = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0), x(1)))
      val rows = arrs.map(x => SearchtypeRow(
        0,
        "mutation",
        x._1,
        x._2
      )).toList
      searchFieldDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  def addPatientField = Action {
      implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0),x(1)))
      val rows = arrs.map(x => SearchtypeRow(
        0,
        "patient",
        x._1,
        x._2
      )).toList
      searchFieldDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  def addSampleField = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0),x(1)))
      val rows = arrs.map(x => SearchtypeRow(
        0,
        "sample",
        x._1,
        x._2
      )).toList
      searchFieldDao.insert(rows)
      Ok(Json.toJson("success"))
  }

  def addMutationNoNGSField = Action {
    implicit request =>
      val text = request.body.asText.get
      val strings = text.split("\n")
      val arrs = strings.map(x => x.split("=")).map(x => (x(0),x(1)))
      val rows = arrs.map(x => SearchtypeRow(
        0,
        "mutationNoNGS",
        x._1,
        x._2
      )).toList
      searchFieldDao.insert(rows)
      Ok(Json.toJson("success"))
  }


  // 查询mutation的字段类型
  def queryAllMutationField = Action {
    implicit request =>
      val res = Await.result(searchFieldDao.queryMutationSearchField, Duration.Inf)
      val rows = res.map(x => Json.obj("id" -> x.id, "TableName" -> x.tableNameX, "Field" -> x.fieldName, "Type" -> x.value))
      val size = res.length
      Ok(Json.obj("rows" -> rows, "total" -> size))
  }

  // 根据id删除字段类型
  def deleteFieldById = Action {
    implicit request =>
      val id = request.body.asText.get
      val strings = id.split(",").map(x => x.toInt)
      Await.result(searchFieldDao.deleteById(strings),Duration.Inf)
      Ok("success")
  }



}
