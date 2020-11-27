package controllers

import dao.{AccountDao, UserDao}
import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import tool.VarTool
import utils.Utils

class UserController @Inject()(cc:ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao
)extends AbstractController(cc) {

  def logout = Action {
    implicit request =>
      Redirect(routes.AppController.loginBefore()).flashing("info" -> "退出登录成功！", "class" -> Utils.successClass).
        removingFromSession(VarTool.userStr)
  }
}
