(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{396:function(e,t,a){"use strict";a.r(t);var s=a(28),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"alter-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-cluster"}},[e._v("#")]),e._v(" ALTER CLUSTER")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('该语句用于更新逻辑集群。需要有管理员权限\n\n语法\n\n    ALTER CLUSTER cluster_name PROPERTIES ("key"="value", ...);\n\n1. 缩容，扩容 （根据集群现有的be数目，大则为扩容，小则为缩容), 扩容为同步操作，缩容为异步操作，通过backend的状态可以得知是否缩容完成\n\n    PROERTIES ("instance_num" = "3")\n\n    instance_num 逻辑集群节点树\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. 缩容，减少含有3个be的逻辑集群test_cluster的be数为2\n\n    ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="2");\n\n2. 扩容，增加含有3个be的逻辑集群test_cluster的be数为4\n\n    ALTER CLUSTER test_cluster PROPERTIES ("instance_num"="4");\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ALTER,CLUSTER\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);