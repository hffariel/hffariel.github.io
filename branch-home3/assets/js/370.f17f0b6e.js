(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{761:function(t,n,e){"use strict";e.r(n);var s=e(43),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"from-unixtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-unixtime"}},[t._v("#")]),t._v(" from_unixtime")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("DATETIME FROM_UNIXTIME(INT unix_timestamp[, VARCHAR string_format])")])]),t._v(" "),e("p",[t._v("将 unix 时间戳转化为对应的 time 格式，返回的格式由 "),e("code",[t._v("string_format")]),t._v(" 指定")]),t._v(" "),e("p",[t._v("默认为 yyyy-MM-dd HH:mm:ss ,也支持date_format中的format格式")]),t._v(" "),e("p",[t._v("传入的是整形，返回的是字符串类型")]),t._v(" "),e("p",[t._v("目前 "),e("code",[t._v("string_format")]),t._v(" 支持格式：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("%Y：年。例：2014，1900\n%m：月。例：12，09\n%d：日。例：11，01\n%H：时。例：23，01，12\n%i：分。例：05，11\n%s：秒。例：59，01\n")])])]),e("p",[t._v("其余 "),e("code",[t._v("string_format")]),t._v(" 格式是非法的，返回NULL")]),t._v(" "),e("p",[t._v("如果给定的时间戳小于 0 或大于 253402271999，则返回 NULL。即时间戳范围是：")]),t._v(" "),e("p",[t._v("1970-01-01 00:00:00 ~ 9999-12-31 23:59:59")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d') |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")])])]),e("p",[t._v("##keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("FROM_UNIXTIME,FROM,UNIXTIME\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);