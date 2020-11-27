package controllers

import java.io.File

import dao._
import javax.inject.Inject
import play.api.mvc._
import tool._

import scala.concurrent.ExecutionContext.Implicits.global


class ToolController @Inject()(cc: ControllerComponents)(
  implicit val userDao: UserDao,
  implicit val accountDao: AccountDao
) extends AbstractController(cc){

  def downloadExampleFile = Action { implicit request =>
    val data = FormTool.fileNameForm.bindFromRequest().get
    val file = new File(Tool.path, s"example/${data.fileName}")
    Ok.sendFile(file).withHeaders(
      CACHE_CONTROL -> "max-age=3600",
      CONTENT_DISPOSITION -> s"attachment; filename=${
        file.getName
      }",
      CONTENT_TYPE -> "application/x-download"
    )
  }


}
