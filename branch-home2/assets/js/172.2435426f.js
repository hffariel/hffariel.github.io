(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{562:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"admin-show-replica-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-replica-status"}},[t._v("#")]),t._v(" ADMIN SHOW REPLICA STATUS")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("This statement is used to display copy status information for a table or partition")]),t._v(" "),e("p",[t._v("Grammar:")]),t._v(" "),e("p",[t._v("ADMIN SHOW REPLICA STATUS FROM [dbu name.]tbl name [PARTITION (p1,...)]\n[where_clause];")]),t._v(" "),e("p",[t._v('where_clause:\nWHERE STATUS [!]= "replica_status"')]),t._v(" "),e("p",[t._v("Reply status:\nOK: Replica 22788;'20581;' 29366;'24577;\nDEAD: The Backend of replica is not available\nVERSION_ERROR: The replica data version is missing\nSCHEMA ERROR: replica schema hash\nMISSING: replica does not exist")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("ol",[e("li",[t._v("View the status of all copies of the table")])]),t._v(" "),e("p",[t._v("ADMIN SHOW REPLICA STATUS FROM db1.tbl1;")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("View a copy of a partition state of the table as VERSION_ERROR")])]),t._v(" "),e("p",[t._v("ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Check all unhealthy copies of the table")])]),t._v(" "),e("p",[t._v('ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";')]),t._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("ADMIN,SHOW,REPLICA,STATUS")])])}),[],!1,null,null,null);a.default=r.exports}}]);