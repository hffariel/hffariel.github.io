(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{670:function(t,r,a){"use strict";a.r(r);var n=a(43),s=Object(n.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),a("h2",{attrs:{id:"brpc-max-body-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brpc-max-body-size"}},[t._v("#")]),t._v(" brpc_max_body_size")]),t._v(" "),a("p",[t._v("这个配置主要用来修改 brpc 的参数 max_body_size ，默认配置是 64M。一般发生在 multi distinct + 无 group by + 超过1T 数据量的情况下。尤其如果发现查询卡死，且 BE 出现类似 body_size is too large 的字样。")]),t._v(" "),a("p",[t._v("由于这是一个 brpc 的配置，用户也可以在运行中直接修改该参数。通过访问 http://host:brpc_port/flags 修改。")]),t._v(" "),a("h2",{attrs:{id:"max-running-txn-num-per-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-running-txn-num-per-db"}},[t._v("#")]),t._v(" max_running_txn_num_per_db")]),t._v(" "),a("p",[t._v("这个配置主要是用来控制同一个 db 的并发导入个数的，默认配置是100。当导入的并发执行的个数超过这个配置的值的时候，同步执行的导入就会失败比如 stream load。异步执行的导入就会一直处在 pending 状态比如 broker load。")]),t._v(" "),a("p",[t._v("一般来说不推荐更改这个并发数。如果当前导入并发超过这个值，则需要先检查是否单个导入任务过慢，或者小文件太多没有合并后导入的问题。")]),t._v(" "),a("p",[t._v("报错信息比如：current running txns on db xxx is xx, larger than limit xx。就属于这类问题。")])])}),[],!1,null,null,null);r.default=s.exports}}]);