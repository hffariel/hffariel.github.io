(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{771:function(t,e,a){"use strict";a.r(e);var n=a(43),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"unix-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unix-timestamp"}},[t._v("#")]),t._v(" unix_timestamp")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("INT UNIX_TIMESTAMP(), UNIX_TIMESTAMP(DATETIME date), UNIX_TIMESTAMP(DATETIME date, STRING fmt),")])]),t._v(" "),a("p",[t._v("将 Date 或者 Datetime 类型转化为 unix 时间戳。")]),t._v(" "),a("p",[t._v("如果没有参数，则是将当前的时间转化为时间戳。")]),t._v(" "),a("p",[t._v("参数需要是 Date 或者 Datetime 类型。")]),t._v(" "),a("p",[t._v("对于在 1970-01-01 00:00:00 之前或 2038-01-19 03:14:07 之后的时间，该函数将返回 0。")]),t._v(" "),a("p",[t._v("Format 的格式请参阅 "),a("code",[t._v("date_format")]),t._v(" 函数的格式说明。")]),t._v(" "),a("p",[t._v("该函数受时区影响。")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")])])]),a("p",[t._v("##keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);