package tool

object parseTool {
  def parseKit(s: String) = {
    val lines = s.split("\n").toList
    val newLines = lines.foldLeft(List[String]()) { (x, y) =>
      val finalList = if (y.startsWith("[") || y.contains("=")) {
        x ::: List(y)
      } else {
        x.init ::: List(x.last + (y))
      }
      finalList
    }
    /* newLines.foreach(println(_))*/
    val l1 = newLines.foldLeft(List[String]()) { (x, y) =>
      x ::: List(y)
    }

    val l2 = l1.map(x => {
      if (x.contains('[') || x.contains(']')) {
        val name = x.substring(1, x.length - 1)
        x
      } else if (x.contains('=')) {
        //用等号切割，去空格
        val s1 = x.split('=')
        val s2 = s1.map(x => x.trim)
        //s2: [xxx,hgvsc;score;center;...]  对数组里的每个string进行切割，并对切割后的数组的每个元素遍历去除空格
        val s3 = s2.map(x => x.split(';').map(x => x.trim).mkString(","))
        val list = List(s3(0), s3(1)).mkString(",")
        list
      }
    })
    val l3 = l2.map(x => x.toString)

    val rs = l3.foldLeft((Map[String, List[String]](), "")) { (mapT, y) =>
      val (map, beforeK) = mapT
      if (y.startsWith("[")) {
        (map + (y -> List[String]()), y)
      } else {
        (map.updated(beforeK, map(beforeK) :+ y), beforeK)
      }
    }
    val newMap = rs._1.map { case (k, list) =>
      val map = list.map { line =>
        val columns = line.split(",")
        val newK = columns.head
        val newV = columns.tail.mkString(",")
        (newK -> newV)
      }.toMap
      (k, map)
    }
    newMap
  }
}
