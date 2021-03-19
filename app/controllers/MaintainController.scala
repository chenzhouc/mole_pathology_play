package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}

class MaintainController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def maintainBefore = Action { implicit request =>
    Ok(views.html.maintain.maintain())
  }
}
