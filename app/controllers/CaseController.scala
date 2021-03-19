package controllers

import java.io.File

import javax.inject.Inject
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import utils.Utils
/**
 * Created by yz on 2019/4/28
 */
class CaseController @Inject()(cc:ControllerComponents) extends AbstractController(cc){

 def searchBefore = Action {
   implicit request =>
   Ok(views.html.cottoms.search())
 }

  def get10Gene = Action { implicit request =>
    val file = new File(Utils.dataDir, "ARMS输入.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,0)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)

  }

  def getBraf = Action { implicit request =>
    val file = new File(Utils.dataDir, "ARMS输入.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,1)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)
  }

  def getKnpb = Action { implicit request =>
    val file = new File(Utils.dataDir, "ARMS输入.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,2)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)

  }

  def getLymSnp = Action { implicit request =>
    val file = new File(Utils.dataDir, "淋巴瘤输入_SNP.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,1)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)
  }

  def get68Snp = Action { implicit request =>
    val file = new File(Utils.dataDir, "输入2_SNP.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,0)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)
  }

  def get68Cnv = Action { implicit request =>
    val file = new File(Utils.dataDir, "输入3_CNV.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,0)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)
  }

  def getBasic=Action { implicit request =>
    val file = new File(Utils.dataDir, "基本信息.xlsx")
    val (columnNames, array) = Utils.getInfoByXlsxFile(file,0)
    val json = Json.obj("columnNames" -> columnNames, "array" -> array)
    Ok(json)
  }
}
