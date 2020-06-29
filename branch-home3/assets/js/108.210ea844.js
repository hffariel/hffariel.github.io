(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{498:function(t,e,s){"use strict";s.r(e);var a=s(43),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"str-to-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#str-to-date"}},[t._v("#")]),t._v(" Str_to_date")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[t._v("'DATETIME STR TWO DATES (VARCHAR STR, VARCHAR format)'")]),t._v(" "),s("p",[t._v("Convert STR to DATE type by format specified, if the conversion result does not return NULL")]),t._v(" "),s("p",[t._v("The format format supported is consistent with date_format")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n")])])]),s("p",[t._v("##keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("STR_TO_DATE,STR,TO,DATE\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);