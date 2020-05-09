(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{821:function(t,e,s){"use strict";s.r(e);var a=s(33),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"set-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-password"}},[t._v("#")]),t._v(" SET PASSWORD")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("SET PASSWORD [FOR user_identity] = \n[PASSWORD('plain password')]|['hashed password']\n\nSET PASSWORD 命令可以用于修改一个用户的登录密码。如果 [FOR user_identity] 字段不存在，那么修改当前用户的密码。\n\n注意这里的 user_identity 必须完全匹配在使用 CREATE USER 创建用户时指定的 user_identity，否则会报错用户不存在。如果不指定 user_identity，则当前用户为 'username'@'ip'，这个当前用户，可能无法匹配任何 user_identity。可以通过 SHOW GRANTS 查看当前用户。\n\nPASSWORD() 方式输入的是明文密码; 而直接使用字符串，需要传递的是已加密的密码。\n如果修改其他用户的密码，需要具有管理员权限。\n")])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("修改当前用户的密码")]),t._v(" "),s("p",[t._v("SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'")])]),t._v(" "),s("li",[s("p",[t._v("修改指定用户密码")]),t._v(" "),s("p",[t._v("SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'")])])]),t._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("SET, PASSWORD\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);