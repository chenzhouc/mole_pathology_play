package controllers

import dao._
import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import play.api.routing._
import tool._
import scala.concurrent.ExecutionContext.Implicits.global



class AppController @Inject()(cc: ControllerComponents)(
  implicit val accountDao: AccountDao,
  implicit val userDao:UserDao
)extends AbstractController(cc)
{

  def toIndex = Action { implicit request =>
    Ok(views.html.index())
  }

  def loginBefore = Action { implicit request =>
    Ok(views.html.login())
  }

  def login = Action.async { implicit request =>
    val data = FormTool.userForm.bindFromRequest().get
    accountDao.selectById1.zip(userDao.selectByUserData(data)).map { case (account, optionUser) =>
      if (data.name == account.adminname && data.password == account.password) {
        Redirect(routes.AdminController.userManageBefore()).addingToSession(VarTool.adminStr -> data.name)
      } else if (optionUser.isDefined) {
        val user = optionUser.get
        Redirect(routes.AppController.toIndex()).addingToSession(VarTool.userStr -> user.username, VarTool.idStr -> user.id.toString)
      } else {
        Redirect(routes.AppController.loginBefore()).flashing("info" -> "用户名或密码错误!", "class" -> "error")
      }
    }
  }
}
