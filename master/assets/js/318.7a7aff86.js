(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{705:function(e,a,n){"use strict";n.r(a);var t=n(43),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"插件开发手册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件开发手册"}},[e._v("#")]),e._v(" 插件开发手册")]),e._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),n("p",[e._v("Doris 支持动态加载插件。用户可以通过开发自己的插件来扩展Doris的功能。这个手册主要介绍如何开发、编译和部署 Frontend 端的插件。")]),e._v(" "),n("p",[n("code",[e._v("fe_plugins")]),e._v(" 目录是 FE 插件的根模块。这个根模块统一管理插件所需的依赖。添加一个新的插件，相当于在这个根模块添加一个子模块。")]),e._v(" "),n("h2",{attrs:{id:"插件组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件组成"}},[e._v("#")]),e._v(" 插件组成")]),e._v(" "),n("p",[e._v("一个FE的插件可以使一个"),n("strong",[e._v("zip压缩包")]),e._v("或者是一个"),n("strong",[e._v("目录")]),e._v("。其内容至少包含两个文件："),n("code",[e._v("plugin.properties")]),e._v(" 和 "),n("code",[e._v(".jar")]),e._v(" 文件。"),n("code",[e._v("plugin.properties")]),e._v("用于描述插件信息。")]),e._v(" "),n("p",[e._v("文件结构如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")])])]),n("p",[n("code",[e._v("plugin.properties")]),e._v(" 内容示例:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')])])]),n("h2",{attrs:{id:"编写一个插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写一个插件"}},[e._v("#")]),e._v(" 编写一个插件")]),e._v(" "),n("p",[e._v("插件的开发环境依赖Doris的开发编译环境。所以请先确保Doris的编译开发环境运行正常。")]),e._v(" "),n("h3",{attrs:{id:"创建一个模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建一个模块"}},[e._v("#")]),e._v(" 创建一个模块")]),e._v(" "),n("p",[e._v("我们可以通过以下命令在 "),n("code",[e._v("fe_plugins")]),e._v(" 目录创建一个子模块用户实现创建和创建工程。其中 "),n("code",[e._v("doris-fe-test")]),e._v(" 为插件名称。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")])])]),n("p",[e._v("这个命令会创建一个新的 maven 工程，并且自动向 "),n("code",[e._v("fe_plugins/pom.xml")]),e._v(" 中添加一个子模块：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    .....\n    <groupId>org.apache</groupId>\n    <artifactId>doris-fe-plugins</artifactId>\n    <packaging>pom</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <modules>\n        <module>auditdemo</module>\n        # new plugin module\n        <module>doris-fe-test</module>\n    </modules>\n    .....\n")])])]),n("p",[e._v("新的工程目录结构如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")])])]),n("p",[e._v("接下来我们在 "),n("code",[e._v("main")]),e._v(" 目录下添加一个 "),n("code",[e._v("assembly")]),e._v(" 目录来存放 "),n("code",[e._v("plugin.properties")]),e._v(" 和 "),n("code",[e._v("zip.xml")]),e._v("。最终的工程目录结构如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")])])]),n("h3",{attrs:{id:"添加-zip-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-zip-xml"}},[e._v("#")]),e._v(" 添加 zip.xml")]),e._v(" "),n("p",[n("code",[e._v("zip.xml")]),e._v(" 用于描述最终生成的 zip 压缩包中的文件内容。（如 .jar file, plugin.properties 等等）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<assembly>\n    <id>plugin</id>\n    <formats>\n        <format>zip</format>\n    </formats>\n    <!-IMPORTANT: must be false->\n    <includeBaseDirectory>false</includeBaseDirectory>\n    <fileSets>\n        <fileSet>\n            <directory>target</directory>\n            <includes>\n                <include>*.jar</include>\n            </ ncludes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n\n        <fileSet>\n            <directory>src/main/assembly</directory>\n            <includes>\n                <include>plugin.properties</include>\n            </includes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n    </fileSets>\n</assembly>\n")])])]),n("h3",{attrs:{id:"更新-pom-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新-pom-xml"}},[e._v("#")]),e._v(" 更新 pom.xml")]),e._v(" "),n("p",[e._v("接下来我们需要更新子模块的 "),n("code",[e._v("pom.xml")]),e._v(" 文件，添加 doris-fe 依赖：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')])])]),n("h3",{attrs:{id:"实现插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现插件"}},[e._v("#")]),e._v(" 实现插件")]),e._v(" "),n("p",[e._v("之后我们就可以开始愉快的进行插件功能的开发啦。插件需要实现 "),n("code",[e._v("Plugin")]),e._v(" 接口。具体可以参阅 Doris 自带的 "),n("code",[e._v("auditdemo")]),e._v(" 插件示例代码。")]),e._v(" "),n("h3",{attrs:{id:"编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),n("p",[e._v("在编译插件之前，需要先执行 "),n("code",[e._v("sh build.sh --fe")]),e._v(" 进行 Doris FE 代码的编译，并确保编译成功。")]),e._v(" "),n("p",[e._v("之后，执行 "),n("code",[e._v("sh build_plugin.sh")]),e._v(" 编译所有插件。最终的产出会存放在 "),n("code",[e._v("fe_plugins/output")]),e._v(" 目录中。")]),e._v(" "),n("p",[e._v("或者也可以执行 "),n("code",[e._v("sh build_plugin.sh --plugin your_plugin_name")]),e._v(" 来仅编译指定的插件。")]),e._v(" "),n("h3",{attrs:{id:"另一种开发方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另一种开发方式"}},[e._v("#")]),e._v(" 另一种开发方式")]),e._v(" "),n("p",[e._v("您可以直接通过修改自带的 "),n("code",[e._v("auditdemo")]),e._v(" 插件示例代码进行开发。")]),e._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),n("p",[e._v("插件可以通过以下三种方式部署。")]),e._v(" "),n("ul",[n("li",[e._v("将 "),n("code",[e._v(".zip")]),e._v(" 文件放在 Http 或 Https 服务器上。如："),n("code",[e._v("http://xxx.xxxxxx.com/data/plugin.zip")]),e._v(", Doris 会下载这个文件。")]),e._v(" "),n("li",[e._v("本地 "),n("code",[e._v(".zip")]),e._v(" 文件。 如："),n("code",[e._v("/home/work/data/plugin.zip")]),e._v("。需要在所有 FE 和 BE 节点部署。")]),e._v(" "),n("li",[e._v("本地目录。如："),n("code",[e._v("/home/work/data/plugin/")]),e._v("。这个相当于 "),n("code",[e._v(".zip")]),e._v(" 文件解压后的目录。需要在所有 FE 和 BE 节点部署。")])]),e._v(" "),n("p",[e._v("注意：需保证部署路径在整个插件生命周期内有效。")]),e._v(" "),n("h2",{attrs:{id:"安装和卸载插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装和卸载插件"}},[e._v("#")]),e._v(" 安装和卸载插件")]),e._v(" "),n("p",[e._v("通过如下命令安装和卸载插件。更多帮助请参阅 "),n("code",[e._v("HELP INSTALL PLUGIN;")]),e._v(" "),n("code",[e._v("HELP IUNNSTALL PLUGIN;")]),e._v(" "),n("code",[e._v("HELP SHOW PLUGINS;")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('mysql> install plugin from "/home/users/seaven/auditdemo.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> mysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/cmy/git/doris/core/fe_plugins/output/auditloader.zip\n     Status: INSTALLED\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);