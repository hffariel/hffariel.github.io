(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{786:function(t,a,e){"use strict";e.r(a);var s=e(33),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"show-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[t._v("#")]),t._v(" SHOW TRANSACTION")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("p",[t._v("This syntax is used to view transaction details for the specified transaction id.")]),t._v(" "),e("p",[t._v("grammar:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE id = transaction_id;\n")])])]),e("p",[t._v("Example return result:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])])]),e("ul",[e("li",[t._v("TransactionId: transaction id")]),t._v(" "),e("li",[t._v("Label: the label of the corresponding load job")]),t._v(" "),e("li",[t._v("Coordinator: the node responsible for transaction coordination")]),t._v(" "),e("li",[t._v("TransactionStatus: transaction status\n    * PREPARE: preparation stage\n    * COMMITTED: The transaction was successful, but the data is not visible\n    * VISIBLE: The transaction was successful and the data is visible\n    * ABORTED: transaction failed")]),t._v(" "),e("li",[t._v("LoadJobSourceType: The type of the load job.")]),t._v(" "),e("li",[t._v("PrepareTime: transaction start time")]),t._v(" "),e("li",[t._v("CommitTime: the time when the transaction was successfully committed")]),t._v(" "),e("li",[t._v("FinishTime: The time when the data is visible")]),t._v(" "),e("li",[t._v("Reason: error message")]),t._v(" "),e("li",[t._v("ErrorReplicasCount: Number of replicas with errors")]),t._v(" "),e("li",[t._v("ListenerId: the id of the related load job")]),t._v(" "),e("li",[t._v("TimeoutMs: transaction timeout time in milliseconds")])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("View the transaction with id 4005:")]),t._v(" "),e("p",[t._v("SHOW TRANSACTION WHERE ID = 4005;")])]),t._v(" "),e("li",[e("p",[t._v("Specify the db and view the transaction with id 4005:")]),t._v(" "),e("p",[t._v("SHOW TRANSACTION FROM db WHERE ID = 4005;")])])]),t._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SHOW, TRANSACTION")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);