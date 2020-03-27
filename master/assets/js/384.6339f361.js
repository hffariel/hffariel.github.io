(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{539:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"concat-ws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concat-ws"}},[s._v("#")]),s._v(" concat_ws")]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("p",[a("code",[s._v("VARCHAR concat_ws(VARCHAR sep, VARCHAR str,...)")])]),s._v(" "),a("p",[s._v("使用第一个参数 sep 作为连接符，将第二个参数以及后续所有参数拼接成一个字符串.\n如果分隔符是 NULL，返回 NULL。\n"),a("code",[s._v("concat_ws")]),s._v("函数不会跳过空字符串，会跳过 NULL 值")]),s._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> select concat_ws("or", "d", "is");\n+----------------------------+\n| concat_ws(\'or\', \'d\', \'is\') |\n+----------------------------+\n| doris                      |\n+----------------------------+\n\nmysql> select concat_ws(NULL, "d", "is");\n+----------------------------+\n| concat_ws(NULL, \'d\', \'is\') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nmysql> select concat_ws("or", "d", NULL,"is");\n+---------------------------------+\n| concat_ws("or", "d", NULL,"is") |\n+---------------------------------+\n| doris                           |\n+---------------------------------+\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),a("p",[s._v("CONCAT_WS,CONCAT,WS")])])}),[],!1,null,null,null);t.default=e.exports}}]);