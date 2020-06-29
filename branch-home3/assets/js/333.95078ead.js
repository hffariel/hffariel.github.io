(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{725:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"avg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avg"}},[t._v("#")]),t._v(" AVG")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("AVG([DISTINCT] expr)")])]),t._v(" "),e("p",[t._v("用于返回选中字段的平均值")]),t._v(" "),e("p",[t._v("可选字段DISTINCT参数可以用来返回去重平均值")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> SELECT datetime, AVG(cost_time) FROM log_statis group by datetime;\n+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n\nmysql> SELECT datetime, AVG(distinct cost_time) FROM log_statis group by datetime;\n+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n\n")])])]),e("p",[t._v("##keyword\nAVG")])])}),[],!1,null,null,null);a.default=n.exports}}]);