(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{508:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"create-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-cluster"}},[e._v("#")]),e._v(" CREATE CLUSTER")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("This statement is used to create a new logical cluster, requiring administrator privileges. If you don't use multiple tenants, create a cluster named default_cluster directly. Otherwise, create a cluster with a custom name.")]),e._v(" "),s("p",[e._v("grammar")]),e._v(" "),s("p",[e._v("CREATE CLUSTER [IF NOT EXISTS] cluster_name")]),e._v(" "),s("p",[e._v('PROPERTIES ("key"="value", ...)')]),e._v(" "),s("p",[e._v("IDENTIFIED BY 'password'")]),e._v(" "),s("ol",[s("li",[e._v("PROPERTIES")])]),e._v(" "),s("p",[e._v("Specify attributes of logical clusters")]),e._v(" "),s("p",[e._v('PROPERTIES ("instance_num" = "3")')]),e._v(" "),s("p",[e._v("Instancefn Microsoft Yahei")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Identify by'password'each logical cluster contains a superuser whose password must be specified when creating a logical cluster")])]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("ol",[s("li",[e._v("Create a new test_cluster with three be nodes and specify its superuser password")])]),e._v(" "),s("p",[e._v('CREATE CLUSTER test_cluster PROPERTIES("instance_num"="3") IDENTIFIED BY \'test\';')]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Create a new default_cluster with three be nodes (no multi-tenant is used) and specify its superuser password")])]),e._v(" "),s("p",[e._v('CREATE CLUSTER default_cluster PROPERTIES("instance_num"="3") IDENTIFIED BY \'test\';')]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("CREATE,CLUSTER")])])}),[],!1,null,null,null);t.default=r.exports}}]);