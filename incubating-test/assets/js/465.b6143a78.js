(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{279:function(t,e,a){"use strict";a.r(e);var n=a(28),_=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-function"}},[t._v("#")]),t._v(" CREATE FUNCTION")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE [AGGREGATE] FUNCTION function_name\n    (arg_type [, ...])\n    RETURNS ret_type\n    [INTERMEDIATE inter_type]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("AGGREGATE")]),t._v(": 如果有此项，表示的是创建的函数是一个聚合函数，否则创建的是一个标量函数。")]),t._v(" "),a("p",[a("code",[t._v("function_name")]),t._v(": 要创建函数的名字, 可以包含数据库的名字。比如："),a("code",[t._v("db1.my_func")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("arg_type")]),t._v(": 函数的参数类型，与建表时定义的类型一致。变长参数时可以使用"),a("code",[t._v(", ...")]),t._v("来表示，如果是变长类型，那么变长部分参数的类型与最后一个非变长参数类型一致。")]),t._v(" "),a("p",[a("code",[t._v("ret_type")]),t._v(": 函数返回类型。")]),t._v(" "),a("p",[a("code",[t._v("inter_type")]),t._v(": 用于表示聚合函数中间阶段的数据类型。")]),t._v(" "),a("p",[a("code",[t._v("properties")]),t._v(": 用于设定此函数相关属性，能够设置的属性包括")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('      "object_file": 自定义函数动态库的URL路径，当前只支持 HTTP/HTTPS 协议，此路径需要在函数整个生命周期内保持有效。此选项为必选项\n\n      "symbol": 标量函数的函数签名，用于从动态库里面找到函数入口。此选项对于标量函数是必选项\n\n      "init_fn": 聚合函数的初始化函数签名。对于聚合函数是必选项\n\n      "update_fn": 聚合函数的更新函数签名。对于聚合函数是必选项\n      \n      "merge_fn": 聚合函数的合并函数签名。对于聚合函数是必选项\n      \n      "serialize_fn": 聚合函数的序列化函数签名。对于聚合函数是可选项，如果没有指定，那么将会使用默认的序列化函数\n      \n      "finalize_fn": 聚合函数获取最后结果的函数签名。对于聚合函数是可选项，如果没有指定，将会使用默认的获取结果函数\n\n      "md5": 函数动态链接库的MD5值，用于校验下载的内容是否正确。此选项是可选项\n\n      "prepare_fn": 自定义函数的prepare函数的函数签名，用于从动态库里面找到prepare函数入口。此选项对于自定义函数是可选项\n\n      "close_fn": 自定义函数的close函数的函数签名，用于从动态库里面找到close函数入口。此选项对于自定义函数是可选项\n')])])])]),t._v(" "),a("p",[t._v("此语句创建一个自定义函数。执行此命令需要用户拥有 "),a("code",[t._v("ADMIN")]),t._v(" 权限。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("function_name")]),t._v(" 中包含了数据库名字，那么这个自定义函数会创建在对应的数据库中，否则这个函数将会创建在当前会话所在的数据库。新函数的名字与参数不能够与当前命名空间中已存在的函数相同，否则会创建失败。但是只有名字相同，参数不同是能够创建成功的。")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("创建一个自定义标量函数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n    "symbol" =  "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "object_file" = "http://host:port/libmyadd.so"\n);\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("创建一个有prepare/close函数的自定义标量函数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n    "symbol" =  "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "prepare_fn" = "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n    "close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n    "object_file" = "http://host:port/libmyadd.so"\n);\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("创建一个自定义聚合函数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n    "init_fn"="_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE",\n    "update_fn"="_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE",\n    "merge_fn"="_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_",\n    "finalize_fn"="_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE",\n    "object_file"="http://host:port/libudasample.so"\n);\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("CREATE,FUNCTION\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);