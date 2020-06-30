(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{814:function(a,t,e){"use strict";e.r(t);var s=e(43),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"grant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[a._v("#")]),a._v(" GRANT")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("p",[a._v("GRANT 命令用于赋予指定用户或角色指定的权限。")]),a._v(" "),e("p",[a._v("Syntax:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("GRANT privilege_list ON db_name[.tbl_name] TO user_identity [ROLE role_name]\n")])])]),e("p",[a._v("privilege_list 是需要赋予的权限列表，以逗号分隔。当前 Doris 支持如下权限：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("NODE_PRIV：集群节点操作权限，包括节点上下线等操作，只有 root 用户有该权限，不可赋予其他用户。\nADMIN_PRIV：除 NODE_PRIV 以外的所有权限。\nGRANT_PRIV: 操作权限的权限。包括创建删除用户、角色，授权和撤权，设置密码等。\nSELECT_PRIV：对指定的库或表的读取权限\nLOAD_PRIV：对指定的库或表的导入权限\nALTER_PRIV：对指定的库或表的schema变更权限\nCREATE_PRIV：对指定的库或表的创建权限\nDROP_PRIV：对指定的库或表的删除权限\n\n旧版权限中的 ALL 和 READ_WRITE 会被转换成：SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV；\nREAD_ONLY 会被转换为 SELECT_PRIV。\n")])])]),e("p",[a._v("db_name[.tbl_name] 支持以下三种形式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("1. *.* 权限可以应用于所有库及其中所有表\n2. db.* 权限可以应用于指定库下的所有表\n3. db.tbl 权限可以应用于指定库下的指定表\n\n这里指定的库或表可以是不存在的库和表。\n")])])]),e("p",[a._v("user_identity：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("这里的 user_identity 语法同 CREATE USER。且必须为使用 CREATE USER 创建过的 user_identity。user_identity 中的host可以是域名，如果是域名的话，权限的生效时间可能会有1分钟左右的延迟。\n\n也可以将权限赋予指定的 ROLE，如果指定的 ROLE 不存在，则会自动创建。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("1. 授予所有库和表的权限给用户\n\n    GRANT SELECT_PRIV ON *.* TO 'jack'@'%';\n\n2. 授予指定库表的权限给用户\n\n    GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';\n    \n3. 授予指定库表的权限给角色\n\n    GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("GRANT\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);