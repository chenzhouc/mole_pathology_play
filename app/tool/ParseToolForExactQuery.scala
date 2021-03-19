package tool

object ParseToolForExactQuery {
  def parse(str: String) = {
      str.trim.split(",").map(x => x.trim)
  }
}
