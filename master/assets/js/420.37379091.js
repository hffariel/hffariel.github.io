(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{808:function(t,a,s){"use strict";s.r(a);var e=s(43),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"split-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-part"}},[t._v("#")]),t._v(" split_part")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)")])]),t._v(" "),s("p",[t._v("根据分割符拆分字符串, 返回指定的分割部分(从一开始计数)。")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019年7月8号\", \"月\", 1);\n+-----------------------------------------+\n| split_part('2019年7月8号', '月', 1)     |\n+-----------------------------------------+\n| 2019年7                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n")])])]),s("p",[t._v("##keyword\nSPLIT_PART,SPLIT,PART")])])}),[],!1,null,null,null);a.default=l.exports}}]);