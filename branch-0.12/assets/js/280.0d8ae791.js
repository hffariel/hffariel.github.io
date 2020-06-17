(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{671:function(t,a,e){"use strict";e.r(a);var _=e(33),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"动态分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态分区"}},[t._v("#")]),t._v(" 动态分区")]),t._v(" "),e("p",[t._v("动态分区是在 Doris 0.12 版本中引入的新功能。旨在对表级别的分区实现生命周期管理(TTL)，减少用户的使用负担。")]),t._v(" "),e("p",[t._v("最初的设计、实现和效果可以参阅 "),e("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/2262",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISSUE 2262"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("目前实现了动态添加分区及动态删除分区的功能。")]),t._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),e("ul",[e("li",[t._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),t._v(" "),e("li",[t._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")])]),t._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("p",[t._v("在某些使用场景下，用户会将表按照天进行分区划分，每天定时执行例行任务，这时需要使用方手动管理分区，否则可能由于使用方没有创建分区导致数据导入失败，这给使用方带来了额外的维护成本。")]),t._v(" "),e("p",[t._v("在实现方式上, FE会启动一个后台线程，根据fe.conf中"),e("code",[t._v("dynamic_partition_enable")]),t._v(" 及 "),e("code",[t._v("dynamic_partition_check_interval_seconds")]),t._v("参数决定该线程是否启动以及该线程的调度频率。每次调度时，会在注册表中读取动态分区表的属性，并根据动态分区属性动态添加及删除分区。")]),t._v(" "),e("p",[t._v("建表时，在properties中指定dynamic_partition属性，FE首先对动态分区属性进行解析，校验输入参数的合法性，然后将对应的属性持久化到FE的元数据中，并将该表注册到动态分区列表中，后台线程会根据配置参数定期对动态分区列表进行扫描，读取表的动态分区属性，执行添加分区及删除分区的任务，每次的调度信息会保留在FE的内存中（重启后则丢失），可以通过"),e("code",[t._v("SHOW DYNAMIC PARTITION TABLES")]),t._v("查看调度任务是否成功，如果存在分区创建或删除失败，会将失败信息输出。")]),t._v(" "),e("h2",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),e("h3",{attrs:{id:"动态分区属性参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态分区属性参数说明"}},[t._v("#")]),t._v(" 动态分区属性参数说明:")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.enable")]),t._v(": 是否开启动态分区特性，可指定为 "),e("code",[t._v("TRUE")]),t._v(" 或 "),e("code",[t._v("FALSE")]),t._v("。如果不填写，默认为 "),e("code",[t._v("TRUE")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.time_unit")]),t._v(": 动态分区调度的单位，可指定为 "),e("code",[t._v("DAY")]),t._v(" "),e("code",[t._v("WEEK")]),t._v(" "),e("code",[t._v("MONTH")]),t._v("，当指定为 "),e("code",[t._v("DAY")]),t._v(" 时，动态创建的分区名后缀格式为"),e("code",[t._v("yyyyMMdd")]),t._v("，例如"),e("code",[t._v("20200325")]),t._v("。当指定为 "),e("code",[t._v("WEEK")]),t._v(" 时，动态创建的分区名后缀格式为"),e("code",[t._v("yyyy_ww")]),t._v("即当前日期属于这一年的第几周，例如 "),e("code",[t._v("2020-03-25")]),t._v(" 创建的分区名后缀为 "),e("code",[t._v("2020_13")]),t._v(", 表明目前为2020年第13周。当指定为 "),e("code",[t._v("MONTH")]),t._v(" 时，动态创建的分区名后缀格式为 "),e("code",[t._v("yyyyMM")]),t._v("，例如 "),e("code",[t._v("202003")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.start")]),t._v(": 动态分区的开始时间, 以当天为基准，超过该时间范围的分区将会被删除。如果不填写，则默认为"),e("code",[t._v("Integer.MIN_VALUE")]),t._v(" 即 "),e("code",[t._v("-2147483648")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.end")]),t._v(": 动态分区的结束时间, 以当天为基准，会提前创建N个单位的分区范围。")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.prefix")]),t._v(": 动态创建的分区名前缀。")]),t._v(" "),e("p",[e("code",[t._v("dynamic_partition.buckets")]),t._v(": 动态创建的分区所对应的分桶数量。")]),t._v(" "),e("h3",{attrs:{id:"建表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[t._v("#")]),t._v(" 建表")]),t._v(" "),e("p",[t._v("建表时，可以在 "),e("code",[t._v("PROPERTIES")]),t._v(" 中指定以下"),e("code",[t._v("dynamic_partition")]),t._v("属性，表示这个表是一个动态分区表。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('CREATE TABLE example_db.dynamic_partition\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nv1 VARCHAR(2048),\nv2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1)\n(\nPARTITION p20200321 VALUES LESS THAN ("2020-03-22"),\nPARTITION p20200322 VALUES LESS THAN ("2020-03-23"),\nPARTITION p20200323 VALUES LESS THAN ("2020-03-24"),\nPARTITION p20200324 VALUES LESS THAN ("2020-03-25")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n"storage_medium" = "SSD",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-3",\n"dynamic_partition.end" = "3",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "32"\n );\n')])])]),e("p",[t._v("创建一张动态分区表，指定开启动态分区特性，以当天为2020-03-25为例，在每次调度时，会删除分区上界小于 "),e("code",[t._v("2020-03-22")]),t._v(" 的分区，为了避免删除非动态创建的分区，动态删除分区只会删除分区名符合动态创建分区规则的分区，例如分区名为a1, 则即使分区范围在待删除的分区范围内，也不会被删除。同时在调度时会提前创建今天以及以后3天（总共4天）的分区(若分区已存在则会忽略)，分区名根据指定前缀分别为"),e("code",[t._v("p20200325")]),t._v(" "),e("code",[t._v("p20200326")]),t._v(" "),e("code",[t._v("p20200327")]),t._v(" "),e("code",[t._v("p20200328")]),t._v(",每个分区的分桶数量为32。同时会删除 "),e("code",[t._v("p20200321")]),t._v(" 的分区，最终的分区范围如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[types: [DATE]; keys: [2020-03-22]; ‥types: [DATE]; keys: [2020-03-23]; )\n[types: [DATE]; keys: [2020-03-23]; ‥types: [DATE]; keys: [2020-03-24]; )\n[types: [DATE]; keys: [2020-03-24]; ‥types: [DATE]; keys: [2020-03-25]; )\n[types: [DATE]; keys: [2020-03-25]; ‥types: [DATE]; keys: [2020-03-26]; )\n[types: [DATE]; keys: [2020-03-26]; ‥types: [DATE]; keys: [2020-03-27]; )\n[types: [DATE]; keys: [2020-03-27]; ‥types: [DATE]; keys: [2020-03-28]; )\n[types: [DATE]; keys: [2020-03-28]; ‥types: [DATE]; keys: [2020-03-29]; )\n")])])]),e("h3",{attrs:{id:"开启动态分区功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启动态分区功能"}},[t._v("#")]),t._v(" 开启动态分区功能")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先需要在fe.conf中设置"),e("code",[t._v("dynamic_partition_enable=true")]),t._v("，可以在集群启动时通过修改配置文件指定，或者通过MySQL连接后使用命令行 "),e("code",[t._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")')]),t._v("修改，也可以在运行时通过http接口动态修改,修改方法查看高级操作部分")])]),t._v(" "),e("li",[e("p",[t._v("如果需要对0.12版本之前的表添加动态分区属性，则需要通过以下命令修改表的属性")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ALTER TABLE dynamic_partition set ("dynamic_partition.enable" = "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition.buckets" = "32");\n')])])]),e("h3",{attrs:{id:"停止动态分区功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止动态分区功能"}},[t._v("#")]),t._v(" 停止动态分区功能")]),t._v(" "),e("p",[t._v("如果需要对集群中所有动态分区表停止动态分区功能，则需要在fe.conf中设置"),e("code",[t._v("dynamic_partition_enable=false")])]),t._v(" "),e("p",[t._v("如果需要对指定表停止动态分区功能，则可以通过以下命令修改表的属性")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ALTER TABLE dynamic_partition SET ("dynamic_partition.enable" = "false")\n')])])]),e("h3",{attrs:{id:"修改动态分区属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改动态分区属性"}},[t._v("#")]),t._v(" 修改动态分区属性")]),t._v(" "),e("p",[t._v("通过如下命令可以修改动态分区的属性")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ALTER TABLE dynamic_partition SET ("key" = "value")\n')])])]),e("h3",{attrs:{id:"查看动态分区表调度情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看动态分区表调度情况"}},[t._v("#")]),t._v(" 查看动态分区表调度情况")]),t._v(" "),e("p",[t._v("通过以下命令可以进一步查看动态分区表的调度情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SHOW DYNAMIC PARTITION TABLES;\n\n+-------------------+--------+----------+-------+------+--------+---------+---------------------+---------------------+--------+------------------------+----------------------+\n| TableName         | Enable | TimeUnit | Start | End  | Prefix | Buckets | LastUpdateTime      | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg |\n+-------------------+--------+----------+-------+------+--------+---------+---------------------+---------------------+--------+------------------------+----------------------+\n| dynamic_partition | true   | DAY      | -3    | 3    | p      | 32      | 2020-03-12 17:25:47 | 2020-03-12 17:25:52 | NORMAL | N/A                    | N/A                  |\n+-------------------+--------+----------+-------+------+--------+---------+---------------------+---------------------+--------+------------------------+----------------------+\n1 row in set (0.00 sec)\n\n")])])]),e("ul",[e("li",[t._v("LastUpdateTime: 最后一次修改动态分区属性的时间")]),t._v(" "),e("li",[t._v("LastSchedulerTime:   最后一次执行动态分区调度的时间")]),t._v(" "),e("li",[t._v("State:    最后一次执行动态分区调度的状态")]),t._v(" "),e("li",[t._v("LastCreatePartitionMsg:  最后一次执行动态添加分区调度的错误信息")]),t._v(" "),e("li",[t._v("LastDropPartitionMsg:  最后一次执行动态删除分区调度的错误信息")])]),t._v(" "),e("h2",{attrs:{id:"高级操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级操作"}},[t._v("#")]),t._v(" 高级操作")]),t._v(" "),e("h3",{attrs:{id:"fe-配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置项"}},[t._v("#")]),t._v(" FE 配置项")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("dynamic_partition_enable")]),t._v(" "),e("p",[t._v("是否开启 Doris 的动态分区功能。默认为 false，即关闭。该参数只影响动态分区表的分区操作，不影响普通表。")])]),t._v(" "),e("li",[e("p",[t._v("dynamic_partition_check_interval_seconds")]),t._v(" "),e("p",[t._v("动态分区线程的执行频率，默认为3600(1个小时)，即每1个小时进行一次调度")])])]),t._v(" "),e("h3",{attrs:{id:"http-restful-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-restful-api"}},[t._v("#")]),t._v(" HTTP Restful API")]),t._v(" "),e("p",[t._v("Doris 提供了修改动态分区配置参数的 HTTP Restful API，用于运行时修改动态分区配置参数。")]),t._v(" "),e("p",[t._v("该 API 实现在 FE 端，使用 "),e("code",[t._v("fe_host:fe_http_port")]),t._v(" 进行访问。需要 ADMIN 权限。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("将 dynamic_partition_enable 设置为 true 或 false")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("标记为 true")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/_set_config?dynamic_partition_enable=true\n\n例如: curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true\n\n返回：200\n")])])])]),t._v(" "),e("li",[e("p",[t._v("标记为 false")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/_set_config?dynamic_partition_enable=false\n\n例如: curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=false\n\n返回：200\n")])])])])])]),t._v(" "),e("li",[e("p",[t._v("设置 dynamic partition 的调度频率")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("设置调度时间为12小时调度一次")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/_set_config?dynamic_partition_check_interval_seconds=432000\n\n例如: curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000\n\n返回：200\n")])])])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);