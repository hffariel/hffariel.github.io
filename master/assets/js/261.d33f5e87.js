(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{645:function(t,e,a){"use strict";a.r(e);var _=a(28),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-索引"}},[t._v("#")]),t._v(" Bitmap 索引")]),t._v(" "),a("p",[t._v("用户可以通过创建bitmap index 加速查询\n本文档主要介绍如何创建 index 作业，以及创建 index 的一些注意事项和常见问题。")]),t._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("ul",[a("li",[t._v("bitmap index：位图索引，是一种快速数据结构，能够加快查询速度")])]),t._v(" "),a("h2",{attrs:{id:"原理介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[t._v("#")]),t._v(" 原理介绍")]),t._v(" "),a("p",[t._v("创建和删除本质上是一个 schema change 的作业，具体细节可以参照 "),a("a",{attrs:{href:"alter-table-schema-change"}},[t._v("Schema Change")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("index 创建和修改相关语法有两种形式，一种集成与 alter table 语句中，另一种是使用单独的\ncreate/drop index 语法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建索引")]),t._v(" "),a("p",[t._v("创建索引的的语法可以参见 "),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Definition/CREATE INDEX.html"}},[t._v("CREATE INDEX")]),t._v("\n或 "),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Definition/ALTER TABLE.html"}},[t._v("ALTER TABLE")]),t._v(" 中bitmap 索引相关的操作,\n也可以通过在创建表时指定bitmap 索引，参见"),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Definition/CREATE TABLE.html"}},[t._v("CREATE TABLE")])],1)]),t._v(" "),a("li",[a("p",[t._v("查看索引")]),t._v(" "),a("p",[t._v("参照"),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Administration/SHOW INDEX.html"}},[t._v("SHOW INDEX")])],1)]),t._v(" "),a("li",[a("p",[t._v("删除索引")]),t._v(" "),a("p",[t._v("参照"),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Definition/DROP INDEX.html"}},[t._v("DROP INDEX")]),t._v("\n或者 "),a("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Definition/ALTER TABLE.html"}},[t._v("ALTER TABLE")]),t._v(" 中bitmap 索引相关的操作")],1)])]),t._v(" "),a("h2",{attrs:{id:"创建作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建作业"}},[t._v("#")]),t._v(" 创建作业")]),t._v(" "),a("p",[t._v("参照 schema change 文档 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/alter-table/alter-table-schema-change.html"}},[t._v("Scheam Change")])],1),t._v(" "),a("h2",{attrs:{id:"查看作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看作业"}},[t._v("#")]),t._v(" 查看作业")]),t._v(" "),a("p",[t._v("参照 schema change 文档 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/alter-table/alter-table-schema-change.html"}},[t._v("Scheam Change")])],1),t._v(" "),a("h2",{attrs:{id:"取消作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消作业"}},[t._v("#")]),t._v(" 取消作业")]),t._v(" "),a("p",[t._v("参照 schema change 文档 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/alter-table/alter-table-schema-change.html"}},[t._v("Scheam Change")])],1),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目前索引仅支持 bitmap 类型的索引。")])]),t._v(" "),a("li",[a("p",[t._v("bitmap 索引仅在单列上创建。")])]),t._v(" "),a("li",[a("p",[t._v("bitmap 索引能够应用在 "),a("code",[t._v("Duplicate")]),t._v(" 数据模型的所有列和 "),a("code",[t._v("Aggregate")]),t._v(", "),a("code",[t._v("Uniq")]),t._v(" 模型的key列上。")])]),t._v(" "),a("li",[a("p",[t._v("bitmap 索引支持的数据类型如下:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TINYINT")])]),t._v(" "),a("li",[a("code",[t._v("SMALLINT")])]),t._v(" "),a("li",[a("code",[t._v("INT")])]),t._v(" "),a("li",[a("code",[t._v("UNSIGNEDINT")])]),t._v(" "),a("li",[a("code",[t._v("BIGINT")])]),t._v(" "),a("li",[a("code",[t._v("CHAR")])]),t._v(" "),a("li",[a("code",[t._v("VARCHAE")])]),t._v(" "),a("li",[a("code",[t._v("DATE")])]),t._v(" "),a("li",[a("code",[t._v("DATETIME")])]),t._v(" "),a("li",[a("code",[t._v("LARGEINT")])]),t._v(" "),a("li",[a("code",[t._v("DECIMAL")])]),t._v(" "),a("li",[a("code",[t._v("BOOL")])])])]),t._v(" "),a("li",[a("p",[t._v("bitmap索引仅在 segmentV2 下生效，需要在be的配置文件中增加如下配置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("default_rowset_type=BETA\ncompaction_rowset_type=BETA\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);