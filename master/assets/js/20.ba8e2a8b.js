(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{409:function(t,e,a){"use strict";a.r(e);var s=a(43),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"compaction-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[t._v("#")]),t._v(" Compaction Action")]),t._v(" "),a("p",[t._v("This API is used to view the overall compaction status of a BE node or the compaction status of a specified tablet. It can also be used to manually trigger Compaction.")]),t._v(" "),a("h2",{attrs:{id:"view-compaction-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-compaction-status"}},[t._v("#")]),t._v(" View Compaction status")]),t._v(" "),a("h3",{attrs:{id:"the-overall-compaction-status-of-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-overall-compaction-status-of-the-node"}},[t._v("#")]),t._v(" The overall compaction status of the node")]),t._v(" "),a("p",[t._v("(TODO)")]),t._v(" "),a("h3",{attrs:{id:"specify-the-compaction-status-of-the-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-compaction-status-of-the-tablet"}},[t._v("#")]),t._v(" Specify the compaction status of the tablet")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),a("p",[t._v("If the tablet does not exist, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),a("p",[t._v("If the tablet exists, the result is returned in JSON format:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING",\n        "[49-49] 2 DATA OVERLAPPING",\n        "[50-50] 0 DELETE NONOVERLAPPING",\n        "[51-51] 5 DATA OVERLAPPING"\n    ]\n}\n')])])]),a("p",[t._v("Explanation of results:")]),t._v(" "),a("ul",[a("li",[t._v("cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction.")]),t._v(" "),a("li",[t._v("last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again.")]),t._v(" "),a("li",[t._v("last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again.")]),t._v(" "),a("li",[t._v("rowsets: The current rowsets collection of this tablet. [0-48] means a rowset with version 0-48. The second number is the number of segments in a rowset. The "),a("code",[t._v("DELETE")]),t._v(" indicates the delete version. "),a("code",[t._v("OVERLAPPING")]),t._v(" and "),a("code",[t._v("NONOVERLAPPING")]),t._v(" indicates whether data between segments is overlap.")])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\\&schema_hash=1294206575\n")])])]),a("h2",{attrs:{id:"manually-trigger-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-trigger-compaction"}},[t._v("#")]),t._v(" Manually trigger Compaction")]),t._v(" "),a("p",[t._v("(TODO)")])])}),[],!1,null,null,null);e.default=i.exports}}]);