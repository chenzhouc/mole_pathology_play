package controllers

import dao._
import javax.inject.Inject
import org.joda.time.DateTime
import play.api.libs.json.Json
import play.api.mvc._
import tool.FormTool
import models.Tables._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

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


}
