(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{387:function(t,e,a){"use strict";a.r(e);var s=a(33),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" INSERT")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("blockquote",[a("p",[t._v("tablet_name: 导入数据的目的表。可以是 "),a("code",[t._v("db_name.table_name")]),t._v(" 形式")]),t._v(" "),a("p",[t._v("partitions: 指定待导入的分区，必须是 "),a("code",[t._v("table_name")]),t._v(" 中存在的分区，多个分区名称用逗号分隔")]),t._v(" "),a("p",[t._v("label: 为 Insert 任务指定一个 label")]),t._v(" "),a("p",[t._v("column_name: 指定的目的列，必须是 "),a("code",[t._v("table_name")]),t._v(" 中存在的列")]),t._v(" "),a("p",[t._v("expression: 需要赋值给某个列的对应表达式")]),t._v(" "),a("p",[t._v("DEFAULT: 让对应列使用默认值")]),t._v(" "),a("p",[t._v("query: 一个普通查询，查询的结果会写入到目标中")]),t._v(" "),a("p",[t._v("hint: 用于指示 "),a("code",[t._v("INSERT")]),t._v(" 执行行为的一些指示符。"),a("code",[t._v("streaming")]),t._v(" 和 默认的非 "),a("code",[t._v("streaming")]),t._v(" 方式均会使用同步方式完成 "),a("code",[t._v("INSERT")]),t._v(" 语句执行\n非 "),a("code",[t._v("streaming")]),t._v(" 方式在执行完成后会返回一个 label 方便用户通过 "),a("code",[t._v("SHOW LOAD")]),t._v(" 查询导入的状态")])]),t._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("当前执行 "),a("code",[t._v("INSERT")]),t._v(" 语句时，对于有不符合目标表格式的数据，默认的行为是过滤，比如字符串超长等。但是对于有要求数据不能够被过滤的业务场景，可以通过设置会话变量 "),a("code",[t._v("enable_insert_strict")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 来确保当有数据被过滤掉的时候，"),a("code",[t._v("INSERT")]),t._v(" 不会被执行成功。")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("p",[a("code",[t._v("test")]),t._v(" 表包含两个列"),a("code",[t._v("c1")]),t._v(", "),a("code",[t._v("c2")]),t._v("。")]),t._v(" "),a("ol",[a("li",[t._v("向"),a("code",[t._v("test")]),t._v("表中导入一行数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")])])]),a("p",[t._v("其中第一条、第二条语句是一样的效果。在不指定目标列时，使用表中的列顺序来作为默认的目标列。\n第三条、第四条语句表达的意思是一样的，使用"),a("code",[t._v("c2")]),t._v("列的默认值，来完成数据导入。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("向"),a("code",[t._v("test")]),t._v("表中一次性导入多行数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")])])]),a("p",[t._v("其中第一条、第二条语句效果一样，向"),a("code",[t._v("test")]),t._v("表中一次性导入两条数据\n第三条、第四条语句效果已知，使用"),a("code",[t._v("c2")]),t._v("列的默认值向"),a("code",[t._v("test")]),t._v("表中导入两条数据")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("向 "),a("code",[t._v("test")]),t._v(" 表中导入一个查询语句结果")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("向 "),a("code",[t._v("test")]),t._v(" 表中导入一个查询语句结果，并指定 partition 和 label")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")])])]),a("p",[t._v("异步的导入其实是，一个同步的导入封装成了异步。填写 streaming 和不填写的"),a("strong",[t._v("执行效率是一样")]),t._v("的。")]),t._v(" "),a("p",[t._v("由于Doris之前的导入方式都是异步导入方式，为了兼容旧有的使用习惯，不加 streaming 的 "),a("code",[t._v("INSERT")]),t._v(" 语句依旧会返回一个 label，用户需要通过"),a("code",[t._v("SHOW LOAD")]),t._v("命令查看此"),a("code",[t._v("label")]),t._v("导入作业的状态。")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("INSERT\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);