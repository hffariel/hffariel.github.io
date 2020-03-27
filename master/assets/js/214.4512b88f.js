(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{603:function(e,t,n){"use strict";n.r(t);var i=n(28),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"delete"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),n("p",[e._v("Description")]),e._v(" "),n("p",[e._v("This statement is used to conditionally delete data in the specified table (base index) partition.\nThis action deletes the rollup index data associated with this base index at the same time.\nGrammar:\nPART FROM table name [PARTITION partition name]\nWHERE\ncolumn_name1 op value[ AND column_name2 op value ...];")]),e._v(" "),n("p",[e._v("Explain:")]),e._v(" "),n("ol",[n("li",[e._v("Optional types of OP include: =,>,<,>=,<=,<=,<=,!=")]),e._v(" "),n("li",[e._v("Conditions on key columns can only be specified.")]),e._v(" "),n("li",[e._v("When the selected key column does not exist in a rollup, delete cannot be performed.")]),e._v(" "),n("li",[e._v('The relationship between conditions can only be "and".\nIf you want to achieve the "or" relationship, you need to divide the conditions into two DELETE statements.')]),e._v(" "),n("li",[e._v("If you partition a table for RANGE, you must specify PARTITION. If it is a single partition table, you can not specify it.")])]),e._v(" "),n("p",[e._v("Be careful:\nThis statement may reduce query efficiency for a period of time after execution.\nThe degree of impact depends on the number of deletion conditions specified in the statement.\nThe more conditions specified, the greater the impact.")]),e._v(" "),n("p",[e._v("'35;'35; example")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Delete rows whose K1 column value is 3 in my_table partition p 1\nDELETE FROM my_table PARTITION p1\nWHERE k1 = 3;")])]),e._v(" "),n("li",[n("p",[e._v('Delete rows whose K1 column value is greater than or equal to 3 and whose K2 column value is "abc" in my_table partition P1\nDELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";')])])]),e._v(" "),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("p",[e._v("DELETE")])])}),[],!1,null,null,null);t.default=a.exports}}]);