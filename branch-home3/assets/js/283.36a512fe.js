(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{674:function(t,a,e){"use strict";e.r(a);var s=e(43),c=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"compaction-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[t._v("#")]),t._v(" Compaction Action")]),t._v(" "),e("p",[t._v("该 API 用于查看某个 BE 节点总体的 compaction 状态，或者指定 tablet 的 compaction 状态。也可以用于手动触发 Compaction。")]),t._v(" "),e("h2",{attrs:{id:"查看-compaction-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-compaction-状态"}},[t._v("#")]),t._v(" 查看 Compaction 状态")]),t._v(" "),e("h3",{attrs:{id:"节点整体-compaction-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点整体-compaction-状态"}},[t._v("#")]),t._v(" 节点整体 compaction 状态")]),t._v(" "),e("p",[t._v("(TODO)")]),t._v(" "),e("h3",{attrs:{id:"指定-tablet-的-compaction-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定-tablet-的-compaction-状态"}},[t._v("#")]),t._v(" 指定 tablet 的 compaction 状态")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),e("p",[t._v("若 tablet 不存在，返回 JSON 格式的错误：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),e("p",[t._v("若 tablet 存在，则返回 JSON 格式的结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING",\n        "[49-49] 2 DATA OVERLAPPING",\n        "[50-50] 0 DELETE NONOVERLAPPING",\n        "[51-51] 5 DATA OVERLAPPING"\n    ]\n}\n')])])]),e("p",[t._v("结果说明：")]),t._v(" "),e("ul",[e("li",[t._v("cumulative point：base 和 cumulative compaction 的版本分界线。在 point（不含）之前的版本由 base compaction 处理。point（含）之后的版本由 cumulative compaction 处理。")]),t._v(" "),e("li",[t._v("last cumulative failure time：上一次尝试 cumulative compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 cumulative compaction。")]),t._v(" "),e("li",[t._v("last base failure time：上一次尝试 base compaction 失败的时间。默认 10min 后才会再次尝试对该 tablet 做 base compaction。")]),t._v(" "),e("li",[t._v("rowsets：该 tablet 当前的 rowset 集合。如 [0-48] 表示 0-48 版本。第二位数字表示该版本中 segment 的数量。"),e("code",[t._v("DELETE")]),t._v(" 表示 delete 版本。"),e("code",[t._v("DATA")]),t._v(" 表示数据版本。"),e("code",[t._v("OVERLAPPING")]),t._v(" 和 "),e("code",[t._v("NONOVERLAPPING")]),t._v(" 表示segment数据是否重叠。")])]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\\&schema_hash=1294206575\n")])])]),e("h2",{attrs:{id:"手动触发-compaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动触发-compaction"}},[t._v("#")]),t._v(" 手动触发 Compaction")]),t._v(" "),e("p",[t._v("(TODO)")])])}),[],!1,null,null,null);a.default=c.exports}}]);