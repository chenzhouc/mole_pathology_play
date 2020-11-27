package filters

/**
  * Created by yz on 2018/7/5
  */
import akka.stream.Materializer
import controllers.routes
import javax.inject.Inject
import play.api.mvc._
import tool.VarTool

import scala.concurrent.{ExecutionContext, Future}

class AdminFilter @Inject()(implicit val mat: Materializer, ec: ExecutionContext) extends Filter{

  override def apply(f: (RequestHeader) => Future[Result])(rh: RequestHeader): Future[Result] = {
    if (rh.session.get(VarTool.adminStr).isEmpty && rh.path.contains("/admin") && !rh.path.contains("/assets/") &&
      !rh.path.contains("/login")) {
      Future.successful(Results.Redirect(routes.AppController.loginBefore()).flashing("info"->"请先登录!"))
    } else {
      f(rh)
    }
  }

}
