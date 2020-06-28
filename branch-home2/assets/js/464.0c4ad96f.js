(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{856:function(n,e,l){"use strict";l.r(e);var a=l(43),_=Object(a.a)({},(function(){var n=this,e=n.$createElement,l=n._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[l("h1",{attrs:{id:"alter-table"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#alter-table"}},[n._v("#")]),n._v(" ALTER TABLE")]),n._v(" "),l("h2",{attrs:{id:"description"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v('该语句用于对已有的 table 进行修改。如果没有指定 rollup index，默认操作 base index。\n该语句分为三种操作类型： schema change 、rollup 、partition\n这三种操作类型不能同时出现在一条 ALTER TABLE 语句中。\n其中 schema change 和 rollup 是异步操作，任务提交成功则返回。之后可使用 SHOW ALTER 命令查看进度。\npartition 是同步操作，命令返回表示执行完毕。\n\n语法：\n    ALTER TABLE [database.]table\n    alter_clause1[, alter_clause2, ...];\n\nalter_clause 分为 partition 、rollup、schema change、rename 和index五种。\n\npartition 支持如下几种修改方式\n1. 增加分区\n    语法：\n        ADD PARTITION [IF NOT EXISTS] partition_name \n        partition_desc ["key"="value"]\n        [DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n    注意：\n        1) partition_desc 支持一下两种写法：\n            * VALUES LESS THAN [MAXVALUE|("value1", ...)]\n            * VALUES [("value1", ...), ("value1", ...))\n        1) 分区为左闭右开区间，如果用户仅指定右边界，系统会自动确定左边界\n        2) 如果没有指定分桶方式，则自动使用建表使用的分桶方式\n        3) 如指定分桶方式，只能修改分桶数，不可修改分桶方式或分桶列\n        4) ["key"="value"] 部分可以设置分区的一些属性，具体说明见 CREATE TABLE\n\n2. 删除分区\n    语法：\n        DROP PARTITION [IF EXISTS] partition_name\n    注意：\n        1) 使用分区方式的表至少要保留一个分区。\n        2) 执行 DROP PARTITION 一段时间内，可以通过 RECOVER 语句恢复被删除的 partition。详见 RECOVER 语句\n        \n3. 修改分区属性\n    语法：\n        MODIFY PARTITION partition_name SET ("key" = "value", ...)\n    说明：\n        1) 当前支持修改分区的下列属性：\n            - storage_medium\n            - storage_cooldown_time\n            - replication_num \n            — in_memory\n        2) 对于单分区表，partition_name 同表名。\n    \nrollup 支持如下几种创建方式：\n1. 创建 rollup index\n    语法：\n        ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n        [FROM from_index_name]\n        [PROPERTIES ("key"="value", ...)]\n\n        properties: 支持设置超时时间，默认超时时间为1天。\n    例子：\n        ADD ROLLUP r1(col1,col2) from r0\n1.2 批量创建 rollup index\n    语法：\n        ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n    例子：\n        ADD ROLLUP r1(col1,col2) from r0, r2(col3,col4) from r0\n1.3 注意：\n        1) 如果没有指定 from_index_name，则默认从 base index 创建\n        2) rollup 表中的列必须是 from_index 中已有的列\n        3) 在 properties 中，可以指定存储格式。具体请参阅 CREATE TABLE\n        \n2. 删除 rollup index\n    语法：\n        DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n    例子：\n        DROP ROLLUP r1\n2.1 批量删除 rollup index\n    语法：DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n    例子：DROP ROLLUP r1,r2\n2.2 注意：\n        1) 不能删除 base index\n        2) 执行 DROP ROLLUP 一段时间内，可以通过 RECOVER 语句恢复被删除的 rollup index。详见 RECOVER 语句\n\n        \nschema change 支持如下几种修改方式：\n1. 向指定 index 的指定位置添加一列\n    语法：\n        ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n        [AFTER column_name|FIRST]\n        [TO rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    注意：\n        1) 聚合模型如果增加 value 列，需要指定 agg_type\n        2) 非聚合模型（如 DUPLICATE KEY）如果增加key列，需要指定KEY关键字\n        3) 不能在 rollup index 中增加 base index 中已经存在的列\n            如有需要，可以重新创建一个 rollup index）\n        \n2. 向指定 index 添加多列\n    语法：\n        ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n        [TO rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    注意：\n        1) 聚合模型如果增加 value 列，需要指定agg_type\n        2) 非聚合模型如果增加key列，需要指定KEY关键字\n        3) 不能在 rollup index 中增加 base index 中已经存在的列\n        （如有需要，可以重新创建一个 rollup index）\n\n3. 从指定 index 中删除一列\n    语法：\n        DROP COLUMN column_name\n        [FROM rollup_index_name]\n    注意：\n        1) 不能删除分区列\n        2) 如果是从 base index 中删除列，则如果 rollup index 中包含该列，也会被删除\n    \n4. 修改指定 index 的列类型以及列位置\n    语法：\n        MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n        [AFTER column_name|FIRST]\n        [FROM rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    注意：\n        1) 聚合模型如果修改 value 列，需要指定 agg_type\n        2) 非聚合类型如果修改key列，需要指定KEY关键字\n        3) 只能修改列的类型，列的其他属性维持原样（即其他属性需在语句中按照原属性显式的写出，参见 example 8）\n        4) 分区列不能做任何修改\n        5) 目前支持以下类型的转换（精度损失由用户保证）\n            TINYINT/SMALLINT/INT/BIGINT 转换成 TINYINT/SMALLINT/INT/BIGINT/DOUBLE。\n            TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL 转换成 VARCHAR\n            LARGEINT 转换成 DOUBLE\n            VARCHAR 支持修改最大长度\n            VARCHAR 转换成 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE\n            VARCHAR 转换成 DATE (目前支持"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d"六种格式化格式)\n            DATETIME 转换成 DATE(仅保留年-月-日信息, 例如: `2019-12-09 21:47:05` <--\x3e `2019-12-09`)\n            DATE 转换成 DATETIME(时分秒自动补零， 例如: `2019-12-09` <--\x3e `2019-12-09 00:00:00`)\n            FLOAT 转换成 DOUBLE\n            INT 转换成 DATE (如果INT类型数据不合法则转换失败，原始数据不变)\n        6) 不支持从NULL转为NOT NULL\n            \n5. 对指定 index 的列进行重新排序\n    语法：\n        ORDER BY (column_name1, column_name2, ...)\n        [FROM rollup_index_name]\n        [PROPERTIES ("key"="value", ...)]\n    注意：\n        1) index 中的所有列都要写出来\n        2) value 列在 key 列之后\n        \n6. 修改table的属性，目前支持修改bloom filter列, colocate_with 属性和dynamic_partition属性，replication_num和default.replication_num属性\n    语法：\n        PROPERTIES ("key"="value")\n    注意：\n        也可以合并到上面的schema change操作中来修改，见下面例子\n \n\nrename 支持对以下名称进行修改：\n1. 修改表名\n    语法：\n        RENAME new_table_name;\n        \n2. 修改 rollup index 名称\n    语法：\n        RENAME ROLLUP old_rollup_name new_rollup_name;\n        \n3. 修改 partition 名称\n    语法：\n        RENAME PARTITION old_partition_name new_partition_name;\nbitmap index 支持如下几种修改方式\n1. 创建bitmap 索引\n    语法：\n        ADD INDEX index_name (column [, ...],) [USING BITMAP] [COMMENT \'balabala\'];\n    注意：\n        1. 目前仅支持bitmap 索引\n        1. BITMAP 索引仅在单列上创建\n2. 删除索引\n    语法：\n        DROP INDEX index_name；\n')])])]),l("h2",{attrs:{id:"example"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v('[table]\n1. 修改表的默认副本数量, 新建分区副本数量默认使用此值\n    ATLER TABLE example_db.my_table \n    SET ("default.replication_num" = "2");\n    \n2. 修改单分区表的实际副本数量(只限单分区表)\n    ALTER TABLE example_db.my_table\n    SET ("replication_num" = "3");\n\n[partition]\n1. 增加分区, 现有分区 [MIN, 2013-01-01)，增加分区 [2013-01-01, 2014-01-01)，使用默认分桶方式\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n\n2. 增加分区，使用新的分桶数\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n    DISTRIBUTED BY HASH(k1) BUCKETS 20;\n\n3. 增加分区，使用新的副本数\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n    ("replication_num"="1");\n\n4. 修改分区副本数\n    ALTER TABLE example_db.my_table\n    MODIFY PARTITION p1 SET("replication_num"="1");\n\n5. 删除分区\n    ALTER TABLE example_db.my_table\n    DROP PARTITION p1;\n    \n6. 增加一个指定上下界的分区\n\n    ALTER TABLE example_db.my_table\n    ADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n\n[rollup]\n1. 创建 index: example_rollup_index，基于 base index（k1,k2,k3,v1,v2）。列式存储。\n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index(k1, k3, v1, v2)\n    PROPERTIES("storage_type"="column");\n    \n2. 创建 index: example_rollup_index2，基于 example_rollup_index（k1,k3,v1,v2）\n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index2 (k1, v1)\n    FROM example_rollup_index;\n\n3. 创建 index: example_rollup_index3, 基于 base index (k1,k2,k3,v1), 自定义 rollup 超时时间一小时。\n    ALTER TABLE example_db.my_table\n    ADD ROLLUP example_rollup_index(k1, k3, v1)\n    PROPERTIES("storage_type"="column", "timeout" = "3600");\n\n4. 删除 index: example_rollup_index2\n    ALTER TABLE example_db.my_table\n    DROP ROLLUP example_rollup_index2;\n\n\n\n[schema change]\n1. 向 example_rollup_index 的 col1 后添加一个key列 new_col(非聚合模型)\n    ALTER TABLE example_db.my_table\n    ADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\n    TO example_rollup_index;\n\n2. 向example_rollup_index的col1后添加一个value列new_col(非聚合模型)\n      ALTER TABLE example_db.my_table   \n      ADD COLUMN new_col INT DEFAULT "0" AFTER col1    \n      TO example_rollup_index;\n\n3. 向example_rollup_index的col1后添加一个key列new_col(聚合模型)\n      ALTER TABLE example_db.my_table   \n      ADD COLUMN new_col INT DEFAULT "0" AFTER col1    \n      TO example_rollup_index;\n\n4. 向example_rollup_index的col1后添加一个value列new_col SUM聚合类型(聚合模型)\n      ALTER TABLE example_db.my_table   \n      ADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1    \n      TO example_rollup_index;\n\n5. 向 example_rollup_index 添加多列(聚合模型)\n    ALTER TABLE example_db.my_table\n    ADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\n    TO example_rollup_index;\n\n6. 从 example_rollup_index 删除一列\n    ALTER TABLE example_db.my_table\n    DROP COLUMN col2\n    FROM example_rollup_index;\n    \n7. 修改 base index 的 col1 列的类型为 BIGINT，并移动到 col2 列后面\n    ALTER TABLE example_db.my_table\n    MODIFY COLUMN col1 BIGINT DEFAULT "1" AFTER col2;\n\n8. 修改 base index 的 val1 列最大长度。原 val1 为 (val1 VARCHAR(32) REPLACE DEFAULT "abc")\n    ALTER TABLE example_db.my_table\n    MODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n\n9. 重新排序 example_rollup_index 中的列（设原列顺序为：k1,k2,k3,v1,v2）\n    ALTER TABLE example_db.my_table\n    ORDER BY (k3,k1,k2,v2,v1)\n    FROM example_rollup_index;\n    \n10. 同时执行两种操作\n    ALTER TABLE example_db.my_table\n    ADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\n    ORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n\n11. 修改表的 bloom filter 列\n    ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n\n    也可以合并到上面的 schema change 操作中（注意多子句的语法有少许区别）\n    ALTER TABLE example_db.my_table\n    DROP COLUMN col2\n    PROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n\n12. 修改表的Colocate 属性\n\n    ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n\n13. 将表的分桶方式由 Random Distribution 改为 Hash Distribution\n\n    ALTER TABLE example_db.my_table set ("distribution_type" = "hash");\n\n14. 修改表的动态分区属性(支持未添加动态分区属性的表添加动态分区属性)\n    ALTER TABLE example_db.my_table set ("dynamic_partition_enable" = "false");\n    \n    如果需要在未添加动态分区属性的表中添加动态分区属性，则需要指定所有的动态分区属性\n    ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "true", dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition.buckets" = "32");\n15. 修改表的 in_memory 属性\n\n    ALTER TABLE example_db.my_table set ("in_memory" = "true");\n    \n    \n[rename]\n1. 将名为 table1 的表修改为 table2\n    ALTER TABLE table1 RENAME table2;\n    \n2. 将表 example_table 中名为 rollup1 的 rollup index 修改为 rollup2\n    ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n    \n3. 将表 example_table 中名为 p1 的 partition 修改为 p2\n    ALTER TABLE example_table RENAME PARTITION p1 p2;\n[index]\n1. 在table1 上为siteid 创建bitmap 索引\n    ALTER TABLE table1 ADD INDEX index_name (siteid) [USING BITMAP] COMMENT \'balabala\';\n2. 删除table1 上的siteid列的bitmap 索引\n    ALTER TABLE table1 DROP INDEX index_name;\n')])])]),l("h2",{attrs:{id:"keyword"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v("ALTER,TABLE,ROLLUP,COLUMN,PARTITION,RENAME\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);