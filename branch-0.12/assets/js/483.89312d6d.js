(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{874:function(a,e,t){"use strict";t.r(e);var n=t(33),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"recover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover"}},[a._v("#")]),a._v(" RECOVER")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("该语句用于恢复之前删除的 database、table 或者 partition\n语法：\n    1) 恢复 database\n        RECOVER DATABASE db_name;\n    2) 恢复 table\n        RECOVER TABLE [db_name.]table_name;\n    3) 恢复 partition\n        RECOVER PARTITION partition_name FROM [db_name.]table_name;\n\n说明：\n    1. 该操作仅能恢复之前一段时间内删除的元信息。默认为 1 天。（可通过fe.conf中`catalog_trash_expire_second`参数配置）\n    2. 如果删除元信息后新建立了同名同类型的元信息，则之前删除的元信息不能被恢复\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 恢复名为 example_db 的 database\n    RECOVER DATABASE example_db;\n    \n2. 恢复名为 example_tbl 的 table\n    RECOVER TABLE example_db.example_tbl;\n    \n3. 恢复表 example_tbl 中名为 p1 的 partition\n    RECOVER PARTITION p1 FROM example_tbl;\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("RECOVER\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);