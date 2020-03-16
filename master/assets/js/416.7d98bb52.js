(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{420:function(a,e,t){"use strict";t.r(e);var r=t(28),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"set-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-property"}},[a._v("#")]),a._v(" SET PROPERTY")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v("Syntax:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n\n设置用户的属性，包括分配给用户的资源、导入cluster等。这里设置的用户属性，是针对 user 的，而不是 user_identity。即假设通过 CREATE USER 语句创建了两个用户 'jack'@'%' 和 'jack'@'192.%'，则使用 SET PROPERTY 语句，只能针对 jack 这个用户，而不是 'jack'@'%' 或 'jack'@'192.%'\n\n导入 cluster 仅适用于百度内部用户。\n")])])]),t("p",[a._v("key:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("超级用户权限:\n    max_user_connections: 最大连接数。\n    resource.cpu_share: cpu资源分配。\n    load_cluster.{cluster_name}.priority: 为指定的cluster分配优先级，可以为 HIGH 或 NORMAL\n\n普通用户权限：\n    quota.normal: normal级别的资源分配。\n    quota.high: high级别的资源分配。\n    quota.low: low级别的资源分配。\n\n    load_cluster.{cluster_name}.hadoop_palo_path: palo使用的hadoop目录，需要存放etl程序及etl生成的中间数据供palo导入。导入完成后会自动清理中间数据，etl程序自动保留下次使用。    \n    load_cluster.{cluster_name}.hadoop_configs: hadoop的配置，其中fs.default.name、mapred.job.tracker、hadoop.job.ugi必须填写。\n    load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http端口。其中 hdfs 默认为8070，afs 默认 8010。\n    default_load_cluster: 默认的导入cluster。\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 修改用户 jack 最大连接数为1000\nSET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n\n2. 修改用户 jack 的cpu_share为1000\nSET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n\n3. 修改 jack 用户的normal组的权重\nSET PROPERTY FOR 'jack' 'quota.normal' = '400';\n\n4. 为用户 jack 添加导入cluster \nSET PROPERTY FOR 'jack' \n    'load_cluster.{cluster_name}.hadoop_palo_path' = '/user/palo/palo_path', \n    'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';\n\n5. 删除用户 jack 下的导入cluster。\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';\n\n6. 修改用户 jack 默认的导入cluster\nSET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';\n\n7. 修改用户 jack 的集群优先级为 HIGH\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SET, PROPERTY\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);