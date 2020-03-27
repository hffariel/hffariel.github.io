(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{354:function(e,t,a){"use strict";a.r(t);var n=a(28),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"alter-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-view"}},[e._v("#")]),e._v(" ALTER VIEW")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v('该语句用于修改一个view的定义\n语法：\nALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("说明：\n    1. 视图都是逻辑上的，其中的数据不会存储在物理介质上，在查询时视图将作为语句中的子查询，因此，修改视图的定义等价于修改query_stmt。\n    2. query_stmt 为任意支持的 SQL\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("1、修改example_db上的视图example_view")]),e._v(" "),a("p",[e._v('ALTER VIEW example_db.example_view\n(\nc1 COMMENT "column 1",\nc2 COMMENT "column 2",\nc3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table\nGROUP BY k1, k2')])])}),[],!1,null,null,null);t.default=s.exports}}]);