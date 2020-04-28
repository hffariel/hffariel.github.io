(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{672:function(e,a,t){"use strict";t.r(a);var s=t(33),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[e._v("#")]),e._v(" CREATE FILE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to create and upload a file to the Doris cluster.\nThis function is usually used to manage files that need to be used in some other commands, such as certificates, public key, private key, etc.")]),e._v(" "),t("p",[e._v("This command can be executed by users with amdin privileges only.\nA file belongs to a database. This file can be used by users who have access to database.")]),e._v(" "),t("p",[e._v("The size of a single file is limited to 1MB.\nA Doris cluster uploads up to 100 files.")]),e._v(" "),t("p",[e._v("Grammar:")]),e._v(" "),t("p",[e._v('CREATE FILE "File name" [IN database]\n[properties]')]),e._v(" "),t("p",[e._v("Explain:\nFile_name: Custom file name.\nDatabase: The file belongs to a db, and if not specified, the DB of the current session is used.\nproperties 支持以下参数:")]),e._v(" "),t("p",[e._v("Url: Must. Specify a download path for a file. Currently only unauthenticated HTTP download paths are supported. When the command line succeeds, the file will be saved in Doris and the URL will no longer be required.\nCatalog: Yes. The classification name of the file can be customized. But in some commands, files in the specified catalog are looked up. For example, in a routine import, when the data source is kafka, the file under the name of catalog is looked up.\nMd5: Optional. MD5 of the file. If specified, it will be checked after downloading the file.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[e._v("Create a file ca. pem, categorized as Kafka")])]),e._v(" "),t("p",[e._v('CREATE FILE "ca.pem"\nPROPERTIES\n(\n"url" ="https://test.bj.bcebos.com /kafka -key /ca.pem",\n"catalog" = "kafka"\n);')]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Create the file client. key, categorized as my_catalog")])]),e._v(" "),t("p",[e._v('CREATE FILE "client.key"\nIN my database\nPROPERTIES\n(\n"url" ="https://test.bj.bcebos.com /kafka -key /client.key",\n"catalog" = "my_catalog",\n"md5"= "b5bb901bf1099205b39a46ac3557dd9"\n);')]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("CREATE,FILE")])])}),[],!1,null,null,null);a.default=i.exports}}]);