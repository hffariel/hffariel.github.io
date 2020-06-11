(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{411:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-label-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-label-state"}},[t._v("#")]),t._v(" GET LABEL STATE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("NAME:\n    get_label_state: get label's state\n    \nSYNOPSIS\n    curl -u user:passwd http://host:port/api/{db}/{label}/_state\n\nDESCRIPTION\n\n    Check the status of a transaction\n    \nRETURN VALUES\n\n    Return of JSON format string of the status of specified transaction:\n    Label: The specified label.\n    Status: Success or not of this request.\n    Message: Error messages\n    State: \n       UNKNOWN/PREPARE/COMMITTED/VISIBLE/ABORTED\n    \nERRORS\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('1. Get status of label "testLabel" on database "testDb"\n\n    curl -u root http://host:port/api/testDb/testLabel/_state\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("GET, LABEL, STATE\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);