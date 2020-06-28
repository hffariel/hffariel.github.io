(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{558:function(t,e,a){"use strict";a.r(e);var i=a(43),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"admin-repair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-repair"}},[t._v("#")]),t._v(" ADMIN REPAIR")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement is used to try to fix the specified table or partition first")]),t._v(" "),a("p",[t._v("Grammar:")]),t._v(" "),a("p",[t._v("ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]")]),t._v(" "),a("p",[t._v("Explain:")]),t._v(" "),a("ol",[a("li",[t._v("This statement only means that the system attempts to repair a fragmented copy of a specified table or partition with high priority, and it is not guaranteed to be successful. Users can view the repair status through the ADMIN SHOW REPLICA STATUS command.")]),t._v(" "),a("li",[t._v("The default timeout is 14400 seconds (4 hours). Timeout means that the system will no longer repair fragmented copies of specified tables or partitions with high priority. The command settings need to be reused.")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("Attempt to fix the specified table")])]),t._v(" "),a("p",[t._v("ADMIN REPAIR TABLE tbl1;")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Attempt to fix the specified partition")])]),t._v(" "),a("p",[t._v("ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("ADMIN,REPAIR")])])}),[],!1,null,null,null);e.default=s.exports}}]);