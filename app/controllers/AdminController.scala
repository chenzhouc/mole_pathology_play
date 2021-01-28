package controllers

import dao._

import javax.inject.Inject
import org.joda.time.DateTime
import play.api.libs.json.{JsObject, JsValue, Json}
import play.api.mvc._
import tool.FormTool
import models.Tables._
import utils.TableUtils.pageForm

import java.sql
import java.util.Date
import scala.collection.mutable
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}

/**
 * Created by yz on 21/7/2020
 */
class AdminController @Inject()(cc: ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao
) extends AbstractController(cc) {

  //跳转到管理员界面
  def userManageBefore = Action { implicit request =>
    Ok(views.html.admin.userManage())
  }

  //跳转到修改密码页面
  def changePasswordBefore = Action { implicit request =>
    Ok(views.html.admin.changePassword())
  }

  //修改密码
  def changePassword = Action.async { implicit request =>
    val data = FormTool.changePasswordForm.bindFromRequest().get
    accountDao.selectById1.flatMap { x =>
      if (data.password == x.password) {
        val row = AccountRow(x.id, x.adminname, data.newpassword)
        accountDao.update(row).map { y =>
          Redirect(routes.AppController.loginBefore()).flashing("info" -> "密码修改成功!").withNewSession
        }
      } else {
        Future.successful(Redirect(routes.AdminController.changePasswordBefore()).flashing("info" -> "密码错误!"))
      }
    }
  }

  def addUser = Action {
    implicit request =>
      val json = request.body.asJson.get
      var username = (json \ "username").as[JsValue].toString()
      var password = (json \ "password").as[JsValue].toString()
      username = username.substring(1, username.length - 1)
      password = password.substring(1, password.length - 1)
      val kitarea = (json \ "kitarea").as[String]
      val filterarea = (json \ "filterarea").as[String]
      val d = System.currentTimeMillis()
      val date = new sql.Date(d)

      //解析能查看的试剂盒
      val arearesult = tool.parseTool.parseKitarea(kitarea)


      val parse_result = tool.parseTool.parseKit(filterarea)
      val value = parse_result.map(x => Json.obj("table" -> x._1.substring(1, x._1.length - 1), "condition" -> Json.toJson(x._2)))
      val v = Json.toJson(value)
      val userrow = models.Tables.UserRow(
        0,
        username = username, password = password, `create-time` = date, kitvalue = arearesult, filtervalue = v, selectColumns = Json.toJson(""),
        selectPatientColumns = Json.toJson(""), selectSampleColumns = Json.toJson("")
      )
      Await.result(userDao.addUser(userrow), Duration.Inf)
      Ok("success")
  }

  def queryAllUsers = Action {
    implicit request =>
      val page = pageForm.bindFromRequest.get
      val res = Await.result(userDao.queryAllUser(page), Duration.Inf)
      /*val json = res.map(x => Json.obj("name" ->  x.username,"password" -> x.password,
        "columns_filter" -> x.kitvalue, "rows_filter" -> x.filtervalue, "createTime" -> x.`create-time`))*/
      val count = res._1
      val json = res._2.map(x => Json.obj("name" -> x.username, "password" -> x.password,
        "columns_filter" -> Json.stringify(x.kitvalue), "rows_filter" -> Json.stringify(x.filtervalue), "createTime" -> x.`create-time`.toLocalDate,
        "operation" -> "修改  删除", "id" -> x.id))
      Ok(Json.obj("total" -> count, "rows" -> Json.toJson(json)))
  }

  def modifyUsersBefore(id: Int) = Action {
    implicit request =>
      println(id)
      Ok(views.html.admin.modifyUser(id = id))
  }

  def deleteUser = Action.async {
    implicit request =>
      val id = request.body.asJson.get.toString().toShort
      userDao.deleteUserById(id).map(x => Ok("success"))
  }

  //搜索用户对突变信息表的搜索记录
  def searchSelectedColumnsOfUser = Action.async {
    implicit request =>
      val username = request.session.get("mole_pathology_user").get
      val res = userDao.querySelectedColumnsOfUser(username)
      res.map(x => Ok(Json.toJson(x)))
  }

  //搜索用户对病人表的搜索记录
  def searchSelectedPatientColumnsOfUser = Action.async {
    implicit request =>
      val username = request.session.get("mole_pathology_user").get
      val res = userDao.querySelectedPatientColumnsOfUser(username)
      res.map(x => Ok(Json.toJson(x)))
  }

  def searchSelectedSampleColumnsOfUser = Action.async {
    implicit request =>
      val username = request.session.get("mole_pathology_user").get
      val res = userDao.querySelectedSampleColumnsOfUser(username)
      res.map(x => Ok(Json.toJson(x)))
  }

  //搜索用户数据
  def queryUserData = Action.async {
    implicit request =>
      val value = request.body.asJson.get
      val id = value.toString().toShort
      userDao.queryUserById(id).map(x => Ok(Json.obj("username" -> x.username, "password" -> x.password, "kitvalue" -> x.kitvalue, "filtervalue" -> x.filtervalue)))
  }

}
