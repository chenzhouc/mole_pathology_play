package controllers.adminC

import java.io.{File, FileInputStream}
import java.nio.file.Paths
import java.text.SimpleDateFormat

import dao._
import implicits.Implicits._
import javax.inject.Inject
import models.Tables.MutationTableRow
import org.apache.commons.lang3.StringUtils
import org.apache.poi.ss.usermodel.{Cell, DateUtil}
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import play.api.libs.json.Json
import play.api.mvc._
import tool.pojo.MyExcelTable
import tool.{FormTool, Tool}
import utils.{TableUtils, Utils}

import scala.collection.mutable.ArrayBuffer
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.concurrent.duration.Duration

/**
 * Created by yz on 21/7/2020
 */
class DataController @Inject()(cc: ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao,
  implicit val mutationDao: mutationDao
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
    val lines = tmpXlsxFile.xlsxLines()
    val headers = lines.head.toLowerCase
    val rows = lines.lineMapNoLower.map { map =>
      MutationTableRow(
        0,
        Json.toJson(map),
        0,
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


}
