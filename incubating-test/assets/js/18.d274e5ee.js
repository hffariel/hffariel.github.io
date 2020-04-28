(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{284:function(e,t,a){"use strict";a.r(t);var s=a(28),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at')]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.apache.org/licenses/LICENSE-2.0"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v('Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->')]),e._v(" "),a("h1",{attrs:{id:"compaction-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[e._v("#")]),e._v(" Compaction Action")]),e._v(" "),a("p",[e._v("This API is used to view the overall compaction status of a BE node or the compaction status of a specified tablet. It can also be used to manually trigger Compaction.")]),e._v(" "),a("h2",{attrs:{id:"view-compaction-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-compaction-status"}},[e._v("#")]),e._v(" View Compaction status")]),e._v(" "),a("h3",{attrs:{id:"the-overall-compaction-status-of-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-overall-compaction-status-of-the-node"}},[e._v("#")]),e._v(" The overall compaction status of the node")]),e._v(" "),a("p",[e._v("(TODO)")]),e._v(" "),a("h3",{attrs:{id:"specify-the-compaction-status-of-the-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-compaction-status-of-the-tablet"}},[e._v("#")]),e._v(" Specify the compaction status of the tablet")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),a("p",[e._v("If the tablet does not exist, an error in JSON format is returned:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),a("p",[e._v("If the tablet exists, the result is returned in JSON format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING",\n        "[49-49] 2 DATA OVERLAPPING",\n        "[50-50] 0 DELETE NONOVERLAPPING",\n        "[51-51] 5 DATA OVERLAPPING"\n    ]\n}\n')])])]),a("p",[e._v("Explanation of results:")]),e._v(" "),a("ul",[a("li",[e._v("cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction.")]),e._v(" "),a("li",[e._v("last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again.")]),e._v(" "),a("li",[e._v("last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again.")]),e._v(" "),a("li",[e._v("rowsets: The current rowsets collection of this tablet. [0-48] means a rowset with version 0-48. The second number is the number of segments in a rowset. The "),a("code",[e._v("DELETE")]),e._v(" indicates the delete version. "),a("code",[e._v("OVERLAPPING")]),e._v(" and "),a("code",[e._v("NONOVERLAPPING")]),e._v(" indicates whether data between segments is overlap.")])]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\\&schema_hash=1294206575\n")])])]),a("h2",{attrs:{id:"manually-trigger-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-trigger-compaction"}},[e._v("#")]),e._v(" Manually trigger Compaction")]),e._v(" "),a("p",[e._v("(TODO)")])])}),[],!1,null,null,null);t.default=i.exports}}]);