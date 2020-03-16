(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{577:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-label-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-label-state"}},[t._v("#")]),t._v(" GET LABEL STATE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("NAME:\nget_label_state: get label's state")]),t._v(" "),a("p",[t._v("SYNOPSIS\ncurl -u user:passwd "),a("a",{attrs:{href:"http://host:port",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://host:port"),a("OutboundLink")],1),t._v(" /api /{db}/{label}// u state")]),t._v(" "),a("p",[t._v("DESCRIPTION\nThis command is used to view the transaction status of a Label")]),t._v(" "),a("p",[t._v("RETURN VALUES\nAfter execution, the relevant content of this import will be returned in Json format. Currently includes the following fields\nLabel: The imported label, if not specified, is a uuid.\nStatus: Whether this command was successfully executed or not, Success indicates successful execution\nMessage: Specific execution information\nState: It only makes sense if Status is Success\nUNKNOWN: No corresponding Label was found\nPREPARE: The corresponding transaction has been prepared, but not yet committed\nCOMMITTED: The transaction has been committed and cannot be canceled\nVISIBLE: Transaction submission, and data visible, cannot be canceled\nABORTED: The transaction has been ROLLBACK and the import has failed.")]),t._v(" "),a("p",[t._v("ERRORS")]),t._v(" "),a("p",[t._v("'35;'35; example")]),t._v(" "),a("ol",[a("li",[t._v("Obtain the state of testDb, testLabel\ncurl -u root "),a("a",{attrs:{href:"http://host:port",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://host:port"),a("OutboundLink")],1),t._v(" /api /testDb /testLabel / u state")])]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("GET, LABEL, STATE")])])}),[],!1,null,null,null);e.default=n.exports}}]);