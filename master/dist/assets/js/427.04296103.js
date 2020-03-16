(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{387:function(t,r,e){"use strict";e.r(r);var s=e(28),o=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"alter-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alter-system"}},[t._v("#")]),t._v(" ALTER SYSTEM")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('该语句用于操作一个系统内的节点。（仅管理员使用！）\n语法：\n    1) 增加节点(不使用多租户功能则按照此方法添加)\n        ALTER SYSTEM ADD BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n    2) 增加空闲节点(即添加不属于任何cluster的BACKEND)\n        ALTER SYSTEM ADD FREE BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n    3) 增加节点到某个cluster\n        ALTER SYSTEM ADD BACKEND TO cluster_name "host:heartbeat_port"[,"host:heartbeat_port"...];\n    4) 删除节点\n        ALTER SYSTEM DROP BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n    5) 节点下线\n        ALTER SYSTEM DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n    6) 增加Broker\n        ALTER SYSTEM ADD BROKER broker_name "host:port"[,"host:port"...];\n    7) 减少Broker\n        ALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];\n    8) 删除所有Broker\n        ALTER SYSTEM DROP ALL BROKER broker_name\n    9) 设置一个 Load error hub，用于集中展示导入时的错误信息\n        ALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES ("key" = "value"[, ...]);\n\n说明：\n    1) host 可以是主机名或者ip地址\n    2) heartbeat_port 为该节点的心跳端口\n    3) 增加和删除节点为同步操作。这两种操作不考虑节点上已有的数据，节点直接从元数据中删除，请谨慎使用。\n    4) 节点下线操作用于安全下线节点。该操作为异步操作。如果成功，节点最终会从元数据中删除。如果失败，则不会完成下线。\n    5) 可以手动取消节点下线操作。详见 CANCEL DECOMMISSION\n    6) Load error hub:\n        当前支持两种类型的 Hub：Mysql 和 Broker。需在 PROPERTIES 中指定 "type" = "mysql" 或 "type" = "broker"。\n        如果需要删除当前的 load error hub，可以将 type 设为 null。\n        1) 当使用 Mysql 类型时，导入时产生的错误信息将会插入到指定的 mysql 库表中，之后可以通过 show load warnings 语句直接查看错误信息。\n           \n            Mysql 类型的 Hub 需指定以下参数：\n                host：mysql host\n                port：mysql port\n                user：mysql user\n                password：mysql password\n                database：mysql database\n                table：mysql table\n\n        2) 当使用 Broker 类型时，导入时产生的错误信息会形成一个文件，通过 broker，写入到指定的远端存储系统中。须确保已经部署对应的 broker\n            Broker 类型的 Hub 需指定以下参数：\n                broker: broker 的名称\n                path: 远端存储路径\n                other properties: 其他访问远端存储所必须的信息，比如认证信息等。\n')])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('1. 增加一个节点\n    ALTER SYSTEM ADD BACKEND "host:port";\n\n2. 增加一个空闲节点\n    ALTER SYSTEM ADD FREE BACKEND "host:port";\n    \n3. 删除两个节点\n    ALTER SYSTEM DROP BACKEND "host1:port", "host2:port";\n    \n4. 下线两个节点\n    ALTER SYSTEM DECOMMISSION BACKEND "host1:port", "host2:port";\n\n5. 增加两个Hdfs Broker\n    ALTER SYSTEM ADD BROKER hdfs "host1:port", "host2:port";\n\n6. 添加一个 Mysql 类型的 load error hub\n    ALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n    ("type"= "mysql",\n     "host" = "192.168.1.17"\n     "port" = "3306",\n     "user" = "my_name",\n     "password" = "my_passwd",\n     "database" = "doris_load",\n     "table" = "load_errors"\n    );\n\n7. 添加一个 Broker 类型的 load error hub\n    ALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n    ("type"= "broker",\n     "name" = "bos",\n     "path" = "bos://backup-cmy/logs",\n     "bos_endpoint" = "http://gz.bcebos.com",\n     "bos_accesskey" = "069fc278xxxxxx24ddb522",\n     "bos_secret_accesskey"="700adb0c6xxxxxx74d59eaa980a"\n    );\n\n8. 删除当前的 load error hub\n    ALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n    ("type"= "null");\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ALTER,SYSTEM,BACKEND,BROKER,FREE\n")])])])])}),[],!1,null,null,null);r.default=o.exports}}]);