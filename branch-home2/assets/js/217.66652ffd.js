(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{608:function(t,e,a){"use strict";a.r(e);var i=a(43),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"truncate-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truncate-tables"}},[t._v("#")]),t._v(" TRUNCATE TABLES")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement is used to empty the data of the specified table and partition\nGrammar:")]),t._v(" "),a("p",[t._v("TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];")]),t._v(" "),a("p",[t._v("Explain:")]),t._v(" "),a("ol",[a("li",[t._v("The statement empties the data, but retains the table or partition.")]),t._v(" "),a("li",[t._v("Unlike DELETE, this statement can only empty the specified tables or partitions as a whole, without adding filtering conditions.")]),t._v(" "),a("li",[t._v("Unlike DELETE, using this method to clear data will not affect query performance.")]),t._v(" "),a("li",[t._v("The data deleted by this operation is not recoverable.")]),t._v(" "),a("li",[t._v("When using this command, the table state should be NORMAL, i.e. SCHEMA CHANGE operations are not allowed.")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("Clear the table TBL under example_db")])]),t._v(" "),a("p",[t._v("TRUNCATE TABLE example_db.tbl;")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("P1 and P2 partitions of clearing TABLE tbl")])]),t._v(" "),a("p",[t._v("TRUNCATE TABLE tbl PARTITION(p1, p2);")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("TRUNCATE,TABLE")])])}),[],!1,null,null,null);e.default=s.exports}}]);