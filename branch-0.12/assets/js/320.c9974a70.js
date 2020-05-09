(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{710:function(e,a,t){"use strict";t.r(a);var s=t(33),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"高级使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级使用指南"}},[e._v("#")]),e._v(" 高级使用指南")]),e._v(" "),t("p",[e._v("这里我们介绍 Doris 的一些高级特性。")]),e._v(" "),t("h2",{attrs:{id:"_1-表结构变更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-表结构变更"}},[e._v("#")]),e._v(" 1 表结构变更")]),e._v(" "),t("p",[e._v("使用 ALTER TABLE 命令可以修改表的 Schema，包括如下修改：")]),e._v(" "),t("ul",[t("li",[e._v("增加列")]),e._v(" "),t("li",[e._v("删除列")]),e._v(" "),t("li",[e._v("修改列类型")]),e._v(" "),t("li",[e._v("改变列顺序")])]),e._v(" "),t("p",[e._v("以下举例说明。")]),e._v(" "),t("p",[e._v("原表 table1 的 Schema 如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])])]),t("p",[e._v("我们新增一列 uv，类型为 BIGINT，聚合类型为 SUM，默认值为 0:")]),e._v(" "),t("p",[t("code",[e._v("ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;")])]),e._v(" "),t("p",[e._v("提交成功后，可以通过以下命令查看作业进度:")]),e._v(" "),t("p",[t("code",[e._v("SHOW ALTER TABLE COLUMN;")])]),e._v(" "),t("p",[e._v("当作业状态为 FINISHED，则表示作业完成。新的 Schema 已生效。")]),e._v(" "),t("p",[e._v("ALTER TABLE 完成之后, 可以通过 "),t("code",[e._v("DESC TABLE")]),e._v(" 查看最新的 Schema。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")])])]),t("p",[e._v("可以使用以下命令取消当前正在执行的作业:")]),e._v(" "),t("p",[t("code",[e._v("CANCEL ALTER TABLE COLUMN FROM table1")])]),e._v(" "),t("p",[e._v("更多帮助，可以参阅 "),t("code",[e._v("HELP ALTER TABLE")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"_2-rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-rollup"}},[e._v("#")]),e._v(" 2 Rollup")]),e._v(" "),t("p",[e._v("Rollup 可以理解为 Table 的一个物化索引结构。"),t("strong",[e._v("物化")]),e._v(" 是因为其数据在物理上独立存储，而 "),t("strong",[e._v("索引")]),e._v(" 的意思是，Rollup可以调整列顺序以增加前缀索引的命中率，也可以减少key列以增加数据的聚合度。")]),e._v(" "),t("p",[e._v("以下举例说明。")]),e._v(" "),t("p",[e._v("原表table1的Schema如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])])]),t("p",[e._v("对于 table1 明细数据是 siteid, citycode, username 三者构成一组 key，从而对 pv 字段进行聚合；如果业务方经常有看城市 pv 总量的需求，可以建立一个只有 citycode, pv 的rollup。")]),e._v(" "),t("p",[t("code",[e._v("ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);")])]),e._v(" "),t("p",[e._v("提交成功后，可以通过以下命令查看作业进度：")]),e._v(" "),t("p",[t("code",[e._v("SHOW ALTER TABLE ROLLUP;")])]),e._v(" "),t("p",[e._v("当作业状态为 FINISHED，则表示作业完成。")]),e._v(" "),t("p",[e._v("Rollup 建立完成之后可以使用 "),t("code",[e._v("DESC table1 ALL")]),e._v(" 查看表的 Rollup 信息。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> desc table1 all;\n+-------------+----------+-------------+------+-------+--------+-------+\n| IndexName   | Field    | Type        | Null | Key   | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1      | siteid   | int(11)     | No   | true  | 10      |       |\n|             | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | username | varchar(32) | No   | true  |         |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n|             | uv       | bigint(20)  | No   | false | 0       | SUM   |\n|             |          |             |      |       |         |       |\n| rollup_city | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n")])])]),t("p",[e._v("可以使用以下命令取消当前正在执行的作业:")]),e._v(" "),t("p",[t("code",[e._v("CANCEL ALTER TABLE ROLLUP FROM table1;")])]),e._v(" "),t("p",[e._v("Rollup 建立之后，查询不需要指定 Rollup 进行查询。还是指定原有表进行查询即可。程序会自动判断是否应该使用 Rollup。是否命中 Rollup可以通过 "),t("code",[e._v("EXPLAIN your_sql;")]),e._v(" 命令进行查看。")]),e._v(" "),t("p",[e._v("更多帮助，可以参阅 "),t("code",[e._v("HELP ALTER TABLE")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"_2-数据表的查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据表的查询"}},[e._v("#")]),e._v(" 2 数据表的查询")]),e._v(" "),t("h3",{attrs:{id:"_2-1-内存限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内存限制"}},[e._v("#")]),e._v(" 2.1 内存限制")]),e._v(" "),t("p",[e._v("为了防止用户的一个查询可能因为消耗内存过大。查询进行了内存控制，一个查询任务，在单个 BE 节点上默认使用不超过 2GB 内存。")]),e._v(" "),t("p",[e._v("用户在使用时，如果发现报 "),t("code",[e._v("Memory limit exceeded")]),e._v(" 错误，一般是超过内存限制了。")]),e._v(" "),t("p",[e._v("遇到内存超限时，用户应该尽量通过优化自己的 sql 语句来解决。")]),e._v(" "),t("p",[e._v("如果确切发现2GB内存不能满足，可以手动设置内存参数。")]),e._v(" "),t("p",[e._v("显示查询内存限制:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 2147483648 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])])]),t("p",[t("code",[e._v("exec_mem_limit")]),e._v(" 的单位是 byte，可以通过 "),t("code",[e._v("SET")]),e._v(" 命令改变 "),t("code",[e._v("exec_mem_limit")]),e._v(" 的值。如改为 8GB。")]),e._v(" "),t("p",[t("code",[e._v("SET exec_mem_limit = 8589934592;")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 8589934592 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])])]),t("blockquote",[t("ul",[t("li",[e._v("以上该修改为 session 级别，仅在当前连接 session 内有效。断开重连则会变回默认值。")]),e._v(" "),t("li",[e._v("如果需要修改全局变量，可以这样设置："),t("code",[e._v("SET GLOBAL exec_mem_limit = 8589934592;")]),e._v("。设置完成后，断开 session 重新登录，参数将永久生效。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-2-查询超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查询超时"}},[e._v("#")]),e._v(" 2.2 查询超时")]),e._v(" "),t("p",[e._v("当前默认查询时间设置为最长为 300 秒，如果一个查询在 300 秒内没有完成，则查询会被 Doris 系统 cancel 掉。用户可以通过这个参数来定制自己应用的超时时间，实现类似 wait(timeout) 的阻塞方式。")]),e._v(" "),t("p",[e._v("查看当前超时设置:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mysql> SHOW VARIABLES LIKE "%query_timeout%";\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| QUERY_TIMEOUT | 300   |\n+---------------+-------+\n1 row in set (0.00 sec)\n')])])]),t("p",[e._v("修改超时时间到1分钟:")]),e._v(" "),t("p",[t("code",[e._v("SET query_timeout = 60;")])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("当前超时的检查间隔为 5 秒，所以小于 5 秒的超时不会太准确。")]),e._v(" "),t("li",[e._v("以上修改同样为 session 级别。可以通过 "),t("code",[e._v("SET GLOBAL")]),e._v(" 修改全局有效。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-3-broadcast-shuffle-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-broadcast-shuffle-join"}},[e._v("#")]),e._v(" 2.3 Broadcast/Shuffle Join")]),e._v(" "),t("p",[e._v("系统默认实现 Join 的方式，是将小表进行条件过滤后，将其广播到大表所在的各个节点上，形成一个内存 Hash 表，然后流式读出大表的数据进行Hash Join。但是如果当小表过滤后的数据量无法放入内存的话，此时 Join 将无法完成，通常的报错应该是首先造成内存超限。")]),e._v(" "),t("p",[e._v("如果遇到上述情况，建议使用 Shuffle Join 的方式，也被称作 Partitioned Join。即将小表和大表都按照 Join 的 key 进行 Hash，然后进行分布式的 Join。这个对内存的消耗就会分摊到集群的所有计算节点上。")]),e._v(" "),t("p",[e._v("使用 Broadcast Join（默认）:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),t("p",[e._v("使用 Broadcast Join（显式指定）:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> select sum(table1.pv) from table1 join [broadcast] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),t("p",[e._v("使用 Shuffle Join:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> select sum(table1.pv) from table1 join [shuffle] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.15 sec)\n")])])]),t("h3",{attrs:{id:"_2-4-查询重试和高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-查询重试和高可用"}},[e._v("#")]),e._v(" 2.4 查询重试和高可用")]),e._v(" "),t("p",[e._v("当部署多个 FE 节点时，用户可以在多个 FE 之上部署负载均衡层来实现 Doris 的高可用。")]),e._v(" "),t("p",[e._v("一下提供一些高可用的方案：")]),e._v(" "),t("p",[t("strong",[e._v("第一种")])]),e._v(" "),t("p",[e._v("自己在应用层代码进行重试和负载均衡。比如发现一个连接挂掉，就自动在其他连接上进行重试。应用层代码重试需要应用自己配置多个doris前端节点地址。")]),e._v(" "),t("p",[t("strong",[e._v("第二种")])]),e._v(" "),t("p",[e._v("如果使用 mysql jdbc connector 来连接Doris，可以使用 jdbc 的自动重试机制:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("jdbc:mysql://[host:port],[host:port].../[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue2]...\n")])])]),t("p",[t("strong",[e._v("第三种")])]),e._v(" "),t("p",[e._v("应用可以连接到和应用部署到同一机器上的 MySQL Proxy，通过配置 MySQL Proxy 的 Failover 和 Load Balance 功能来达到目的。")]),e._v(" "),t("p",[t("code",[e._v("http://dev.mysql.com/doc/refman/5.6/en/mysql-proxy-using.html")])])])}),[],!1,null,null,null);a.default=l.exports}}]);