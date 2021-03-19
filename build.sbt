name := "mole_pathology_play"

version := "1.0"

lazy val `mole_pathology_play` = (project in file(".")).enablePlugins(PlayScala,LauncherJarPlugin)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

resolvers += "Akka Snapshot Repository" at "https://repo.akka.io/snapshots/"

scalaVersion := "2.13.1"

libraryDependencies ++= Seq( jdbc , ehcache , ws , specs2 % Test , guice )
libraryDependencies += "com.alibaba" % "fastjson" % "1.2.4"
libraryDependencies ++= Seq(
  "com.vmunier" %% "scalajs-scripts" % "1.1.3",
  guice,
  specs2 % Test,
  ehcache,
  "com.typesafe.play" %% "play-slick" % "4.0.2",
  "com.typesafe.slick" %% "slick-codegen" % "3.3.2",
  "mysql" % "mysql-connector-java" % "5.1.25",
  "com.github.tototoshi" %% "slick-joda-mapper" % "2.4.1",
  "commons-io" % "commons-io" % "2.5",
  "org.apache.poi" % "poi-ooxml" % "3.15",
  "javax.mail" % "mail" % "1.4.7",
  "org.apache.commons" % "commons-math3" % "3.6.1",
  "com.github.tototoshi" %% "scala-csv" % "1.3.6",
  "org.postgresql" % "postgresql" % "42.2.5",
  "com.github.tminglei" %% "slick-pg" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_joda-time" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_play-json" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_jts" % "0.19.0",
  "org.typelevel" %% "cats-core" % "2.0.0",
  "com.chuusai" %% "shapeless" % "2.3.3",
  "com.typesafe.play" %% "play-joda-forms" % "2.7.3",
  "com.aliyun" % "aliyun-java-sdk-core" % "3.7.1",
  "com.aliyun" % "aliyun-java-sdk-dysmsapi" % "1.1.0",
  "org.apache.commons" % "commons-lang3" % "3.6"
)
libraryDependencies ++= Seq(
  "com.github.tminglei" %% "slick-pg" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_joda-time" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_play-json" % "0.19.0",
  "com.github.tminglei" %% "slick-pg_jts" % "0.19.0"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

      