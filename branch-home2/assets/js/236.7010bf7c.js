(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{627:function(e,t,a){"use strict";a.r(t);var s=a(43),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-alter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-alter"}},[e._v("#")]),e._v(" SHOW ALTER")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This statement is used to show the execution of various modification tasks currently under way.\nGrammar:\nSHOW ALTER [CLUSTER | TABLE [COLUMN | ROLLUP] [FROM db_name]];")]),e._v(" "),a("p",[e._v("Explain:\nTABLE COLUMN：Shows the task of alter table column.\nSupport grammar [WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]\nTABLE ROLLUP: Shows the task of creating or deleting ROLLUP index\nIf db_name is not specified, use the current default DB\nCLUSTER: Show the cluster operation related tasks (only administrators use! To be realized...")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Show the task execution of all modified columns of default DB\nSHOW ALTER TABLE COLUMN;")])]),e._v(" "),a("li",[a("p",[e._v('Show the last task execution of modified columns of some table\nSHOW ALTER TABLE COLUMN WHERE TableName = "table1" ORDER BY CreateTime LIMIT 1;')])]),e._v(" "),a("li",[a("p",[e._v("Show the execution of tasks to create or delete ROLLUP index for specified DB\nSHOW ALTER TABLE ROLLUP FROM example_db;")])]),e._v(" "),a("li",[a("p",[e._v("Show cluster operations related tasks (only administrators use! To be realized...\nSHOW ALTER CLUSTER;")])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("SHOW,ALTER")])])}),[],!1,null,null,null);t.default=o.exports}}]);