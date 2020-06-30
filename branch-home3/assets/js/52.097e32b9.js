(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{445:function(e,n,a){"use strict";a.r(n);var t=a(43),i=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-development-manual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-development-manual"}},[e._v("#")]),e._v(" Plugin Development Manual")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Doris supports dynamic loading of plug-ins. Users can develop their own plug-ins to implement some extended functions. This manual mainly introduces the development, compilation and deployment methods of Frontend-side plug-ins.")]),e._v(" "),a("p",[a("code",[e._v("fe_plugins")]),e._v(" is the parent module of the fe plugins. It can uniformly manage the third-party library information that the plugin depends on. Adding a plugin can add a submodule implementation under "),a("code",[e._v("fe_plugins")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),a("p",[e._v("A FE Plugin can be a "),a("strong",[e._v(".zip package")]),e._v(" or a "),a("strong",[e._v("directory")]),e._v(", which contains at least two parts: the "),a("code",[e._v("plugin.properties")]),e._v(" and "),a("code",[e._v(".jar")]),e._v(" files. The "),a("code",[e._v("plugin.properties")]),e._v(" file is used to describe the plugin information.")]),e._v(" "),a("p",[e._v("The file structure of a Plugin looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")])])]),a("p",[a("code",[e._v("plugin.properties")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')])])]),a("h2",{attrs:{id:"write-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-a-plugin"}},[e._v("#")]),e._v(" Write A Plugin")]),e._v(" "),a("p",[e._v("The development environment of the FE plugin depends on the development environment of Doris. So please make sure Doris's compilation and development environment works normally.")]),e._v(" "),a("h3",{attrs:{id:"create-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[e._v("#")]),e._v(" Create module")]),e._v(" "),a("p",[e._v("We can add a submodule in the "),a("code",[e._v("fe_plugins")]),e._v(" directory to implement Plugin and create a project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")])])]),a("p",[e._v("The command produces a new mvn project, and a new submodule is automatically added to "),a("code",[e._v("fe_plugins/pom.xml")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    .....\n    <groupId>org.apache</groupId>\n    <artifactId>doris-fe-plugins</artifactId>\n    <packaging>pom</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <modules>\n        <module>auditdemo</module>\n        # new plugin module\n        <module>doris-fe-test</module>\n    </modules>\n    .....\n")])])]),a("p",[e._v("The new plugin project file structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")])])]),a("p",[e._v("We will add an assembly folder under main to store "),a("code",[e._v("plugin.properties")]),e._v(" and "),a("code",[e._v("zip.xml")]),e._v(". After completion, the file structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")])])]),a("h3",{attrs:{id:"add-zip-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-zip-xml"}},[e._v("#")]),e._v(" Add zip.xml")]),e._v(" "),a("p",[a("code",[e._v("zip.xml")]),e._v(", used to describe the content of the final package of the plugin (.jar file, plugin.properties):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<assembly>\n    <id>plugin</id>\n    <formats>\n        <format>zip</format>\n    </formats>\n    <!-IMPORTANT: must be false->\n    <includeBaseDirectory>false</includeBaseDirectory>\n    <fileSets>\n        <fileSet>\n            <directory>target</directory>\n            <includes>\n                <include>*.jar</include>\n            </ ncludes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n\n        <fileSet>\n            <directory>src/main/assembly</directory>\n            <includes>\n                <include>plugin.properties</include>\n            </includes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n    </fileSets>\n</assembly>\n")])])]),a("h3",{attrs:{id:"update-pom-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-pom-xml"}},[e._v("#")]),e._v(" Update pom.xml")]),e._v(" "),a("p",[e._v("Then we need to update "),a("code",[e._v("pom.xml")]),e._v(", add doris-fe dependency, and modify maven packaging way:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')])])]),a("h3",{attrs:{id:"implement-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implement-plugin"}},[e._v("#")]),e._v(" Implement plugin")]),e._v(" "),a("p",[e._v("Then we can happily implement Plugin according to the needs. Plugins need to implement the "),a("code",[e._v("Plugin")]),e._v(" interface. For details, please refer to the "),a("code",[e._v("auditdemo")]),e._v(" plugin sample code that comes with Doris.")]),e._v(" "),a("h3",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),a("p",[e._v("Before compiling the plugin, you must first execute "),a("code",[e._v("sh build.sh --fe")]),e._v(" of Doris to complete the compilation of Doris FE.")]),e._v(" "),a("p",[e._v("Finally, execute "),a("code",[e._v("sh build_plugin.sh")]),e._v(" in the ${DORIS_HOME} path and you will find the "),a("code",[e._v("your_plugin_name.zip")]),e._v(" file in "),a("code",[e._v("fe_plugins/output")])]),e._v(" "),a("p",[e._v("Or you can execute "),a("code",[e._v("sh build_plugin.sh --plugin your_plugin_name")]),e._v(" to only build your plugin.")]),e._v(" "),a("h3",{attrs:{id:"other-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-way"}},[e._v("#")]),e._v(" Other way")]),e._v(" "),a("p",[e._v("The easiest way, you can implement your plugin by modifying the example "),a("code",[e._v("auditdemo")])]),e._v(" "),a("h2",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),a("p",[e._v("Doris's plugin can be deployed in three ways:")]),e._v(" "),a("ul",[a("li",[e._v("Http or Https .zip, like "),a("code",[e._v("http://xxx.xxxxxx.com/data/plugin.zip")]),e._v(", Doris will download this .zip file")]),e._v(" "),a("li",[e._v("Local .zip, like "),a("code",[e._v("/home/work/data/plugin.zip")]),e._v(", need to be deployed on all FE and BE nodes")]),e._v(" "),a("li",[e._v("Local directory, like "),a("code",[e._v("/home/work/data/plugin")]),e._v(", .zip decompressed folder, need to be deployed on all FE, BE nodes")])]),e._v(" "),a("p",[e._v("Note: Need to ensure that the plugin .zip file is available in the life cycle of doris!")]),e._v(" "),a("h2",{attrs:{id:"install-and-uninstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-uninstall"}},[e._v("#")]),e._v(" Install and Uninstall")]),e._v(" "),a("p",[e._v("Install and uninstall the plugin through the install/uninstall statements. More details, see "),a("code",[e._v("HELP INSTALL PLUGIN;")]),e._v(" "),a("code",[e._v("HELP IUNNSTALL PLUGIN;")]),e._v(" "),a("code",[e._v("HELP SHOW PLUGINS;")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> install plugin from "/home/users/seaven/auditdemo.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> mysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/cmy/git/doris/core/fe_plugins/output/auditloader.zip\n     Status: INSTALLED\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);