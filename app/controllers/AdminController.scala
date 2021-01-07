package controllers

import dao._

import javax.inject.Inject
import org.joda.time.DateTime
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._
import tool.FormTool
import models.Tables._

import java.sql
import java.util.Date
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
        val row = AccountRow(x.id,x.adminname,data.newpassword)
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
      val username = (json \ "username").as[JsValue].toString()
      val password = (json \ "password").as[JsValue].toString()
      val kitarea = (json \ "kitarea").as[JsValue]
      val filterarea = (json \ "filterarea").as[String]
      val d = System.currentTimeMillis()
      println(kitarea)
      val date = new sql.Date(d)
      val parse_result = tool.parseTool.parseKit(filterarea)
      val value = parse_result.map(x => Json.obj("table" -> x._1.substring(1, x._1.length - 1), "condition" -> Json.toJson(x._2)))
      val v = Json.toJson(value)
      val userrow = models.Tables.UserRow(
        0,
        username = username, password = password, `create-time` = date, kitvalue = kitarea, filtervalue = v
      )
      Await.result(userDao.addUser(userrow),Duration.Inf)
      Ok("success")
  }


}
