package tool

object parseTool2 {
  def parseColumnConditions(str: String) = {
    val arr = str.substring(1, str.length - 1).split(",").toList
    val res = arr.foldLeft(List[String]()) {
      (x: List[String], y: String) =>
        val finalList = if(y.contains(":")) x ::: List(y)
        else x.init ::: List(x.last + "," + (y))
        finalList
    }
    res
  }
}