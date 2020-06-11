(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{444:function(e,t,a){"use strict";a.r(t);var i=a(43),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-partition"}},[e._v("#")]),e._v(" Data Partition")]),e._v(" "),a("p",[e._v("This document mainly introduces Doris's table construction and data partitioning, as well as problems and solutions that may be encountered in the construction of the table.")]),e._v(" "),a("h2",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic Concepts")]),e._v(" "),a("p",[e._v("In Doris, data is logically described in the form of a table.")]),e._v(" "),a("h3",{attrs:{id:"row-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-column"}},[e._v("#")]),e._v(" Row & Column")]),e._v(" "),a("p",[e._v("A table includes rows (rows) and columns (columns). Row is a row of data for the user. Column is used to describe different fields in a row of data.")]),e._v(" "),a("p",[e._v("Column can be divided into two broad categories: Key and Value. From a business perspective, Key and Value can correspond to dimension columns and metric columns, respectively. From the perspective of the aggregation model, the same row of Key columns will be aggregated into one row. The way the Value column is aggregated is specified by the user when the table is built. For an introduction to more aggregation models, see the [Doris Data Model] (./data-model-rollup.md).")]),e._v(" "),a("h3",{attrs:{id:"tablet-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-partition"}},[e._v("#")]),e._v(" Tablet & Partition")]),e._v(" "),a("p",[e._v("In Doris's storage engine, user data is horizontally divided into several data slices (also known as data buckets). Each tablet contains several rows of data. The data between the individual tablets does not intersect and is physically stored independently.")]),e._v(" "),a("p",[e._v("Multiple tablets are logically attributed to different partitions. A tablet belongs to only one Partition. And a Partition contains several Tablets. Because the tablet is physically stored independently, it can be considered that the Partition is physically independent. Tablet is the smallest physical storage unit for data movement, replication, and so on.")]),e._v(" "),a("p",[e._v("Several Partitions form a Table. Partition can be thought of as the smallest logical unit of management. Importing and deleting data can be done for one Partition or only for one Partition.")]),e._v(" "),a("h2",{attrs:{id:"data-division"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-division"}},[e._v("#")]),e._v(" Data division")]),e._v(" "),a("p",[e._v("We use a table-building operation to illustrate Doris' data partitioning.")]),e._v(" "),a("p",[e._v("Doris's built-in table is a synchronous command. If the command returns successfully, it means that the table is built successfully.")]),e._v(" "),a("p",[e._v("See more help with "),a("code",[e._v("HELP CREATE TABLE;")]),e._v(".")]),e._v(" "),a("p",[e._v("This section introduces Doris's approach to building tables with an example.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE IF NOT EXISTS example_db.expamle_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "user id",\n    `date` DATE NOT NULL COMMENT "Data fill in date time",\n    `timestamp` DATETIME NOT NULL COMMENT "Timestamp of data being poured",\n    `city` VARCHAR(20) COMMENT "The city where the user is located",\n    `age` SMALLINT COMMENT "user age",\n    `sex` TINYINT COMMENT "User Gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "User last visit time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "Total user consumption",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "User maximum dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "User minimum dwell time"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01")\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n')])])]),a("h3",{attrs:{id:"column-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-definition"}},[e._v("#")]),e._v(" Column Definition")]),e._v(" "),a("p",[e._v("Here we only use the AGGREGATE KEY data model as an example. See the [Doris Data Model] (./data-model-rollup.md) for more data models.")]),e._v(" "),a("p",[e._v("The basic type of column can be viewed by executing "),a("code",[e._v("HELP CREATE TABLE;")]),e._v(" in mysql-client.")]),e._v(" "),a("p",[e._v("In the AGGREGATE KEY data model, all columns that do not specify an aggregation mode (SUM, REPLACE, MAX, MIN) are treated as Key columns. The rest is the Value column.")]),e._v(" "),a("p",[e._v("When defining columns, you can refer to the following suggestions:")]),e._v(" "),a("ol",[a("li",[e._v("The Key column must precede all Value columns.")]),e._v(" "),a("li",[e._v("Try to choose the type of integer. Because integer type calculations and lookups are much more efficient than strings.")]),e._v(" "),a("li",[e._v("For the selection principle of integer types of different lengths, follow ** enough to **.")]),e._v(" "),a("li",[e._v("For lengths of type VARCHAR and STRING, follow ** is sufficient.")]),e._v(" "),a("li",[e._v("The total byte length of all columns (including Key and Value) cannot exceed 100KB.")])]),e._v(" "),a("h3",{attrs:{id:"partitioning-and-binning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioning-and-binning"}},[e._v("#")]),e._v(" Partitioning and binning")]),e._v(" "),a("p",[e._v("Doris supports two levels of data partitioning. The first layer is Partition, which only supports the division of Range. The second layer is Bucket (Tablet), which only supports the way Hash is divided.")]),e._v(" "),a("p",[e._v("It is also possible to use only one layer of partitioning. When using a layer partition, only Bucket partitioning is supported.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Partition")]),e._v(" "),a("ul",[a("li",[e._v("The Partition column can specify one or more columns. The partition class must be a KEY column. The use of multi-column partitions is described later in the "),a("strong",[e._v("Multi-column partitioning")]),e._v(" summary.")]),e._v(" "),a("li",[e._v("Regardless of the type of partition column, double quotes are required when writing partition values.")]),e._v(" "),a("li",[e._v("Partition columns are usually time columns for easy management of old and new data.")]),e._v(" "),a("li",[e._v("There is no theoretical limit on the number of partitions.")]),e._v(" "),a("li",[e._v("When you do not use Partition to build a table, the system will automatically generate a Partition with the same name as the table name. This Partition is not visible to the user and cannot be modified.")]),e._v(" "),a("li",[e._v("Partition supports only the upper bound by "),a("code",[e._v("VALUES LESS THAN (...)")]),e._v(", the system will use the upper bound of the previous partition as the lower bound of the partition, and generate a left closed right open interval. Passing, also supports specifying the upper and lower bounds by "),a("code",[e._v("VALUES [...)")]),e._v(", and generating a left closed right open interval.")]),e._v(" "),a("li",[e._v("It is easier to understand by specifying "),a("code",[e._v("VALUES [...)")]),e._v(". Here is an example of the change in partition range when adding or deleting partitions using the "),a("code",[e._v("VALUES LESS THAN (...)")]),e._v(" statement:\n"),a("ul",[a("li",[a("p",[e._v("As the example above, when the table is built, the following 3 partitions are automatically generated:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\n")])])])]),e._v(" "),a("li",[a("p",[e._v('When we add a partition p201705 VALUES LESS THAN ("2017-06-01"), the partition results are as follows:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\nP201705: [2017-04-01, 2017-06-01)\n")])])])]),e._v(" "),a("li",[a("p",[e._v("At this point we delete the partition p201703, the partition results are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("p201701: [MIN_VALUE, 2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")])])]),a("blockquote",[a("p",[e._v("Note that the partition range of p201702 and p201705 has not changed, and there is a hole between the two partitions: [2017-03-01, 2017-04-01). That is, if the imported data range is within this hole, it cannot be imported.")])])]),e._v(" "),a("li",[a("p",[e._v("Continue to delete partition p201702, the partition results are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("p201701: [MIN_VALUE, 2017-02-01)\np201705: [2017-04-01, 2017-06-01)\nThe void range becomes: [2017-02-01, 2017-04-01)\n")])])])]),e._v(" "),a("li",[a("p",[e._v('Now add a partition p201702new VALUES LESS THAN ("2017-03-01"), the partition results are as follows:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("p201701: [MIN_VALUE, 2017-02-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")])])]),a("blockquote",[a("p",[e._v("You can see that the hole size is reduced to: [2017-03-01, 2017-04-01)")])])]),e._v(" "),a("li",[a("p",[e._v('Now delete partition p201701 and add partition p201612 VALUES LESS THAN ("2017-01-01"), the partition result is as follows:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("p201612: [MIN_VALUE, 2017-01-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")])])]),a("blockquote",[a("p",[e._v("A new void appeared: [2017-01-01, 2017-02-01)")])])])])])]),e._v(" "),a("p",[e._v("In summary, the deletion of a partition does not change the scope of an existing partition. There may be holes in deleting partitions. When a partition is added by the "),a("code",[e._v("VALUES LESS THAN")]),e._v(" statement, the lower bound of the partition immediately follows the upper bound of the previous partition.")]),e._v(" "),a("p",[e._v("You cannot add partitions with overlapping ranges.")])]),e._v(" "),a("li",[a("p",[e._v("Bucket")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If a Partition is used, the "),a("code",[e._v("DISTRIBUTED ...")]),e._v(" statement describes the division rules for the data in each partition. If you do not use Partition, it describes the rules for dividing the data of the entire table.")])]),e._v(" "),a("li",[a("p",[e._v("The bucket column can be multiple columns, but it must be a Key column. The bucket column can be the same or different from the Partition column.")])]),e._v(" "),a("li",[a("p",[e._v("The choice of bucket column is a trade-off between "),a("strong",[e._v("query throughput")]),e._v(" and "),a("strong",[e._v("query concurrency")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("If you select multiple bucket columns, the data is more evenly distributed. However, if the query condition does not include the equivalent condition for all bucket columns, a query will scan all buckets. The throughput of such queries will increase, but the latency of a single query will increase. This method is suitable for large throughput and low concurrent query scenarios.")]),e._v(" "),a("li",[e._v("If you select only one or a few bucket columns, the point query can query only one bucket. This approach is suitable for high-concurrency point query scenarios.")])])]),e._v(" "),a("li",[a("p",[e._v("There is no theoretical limit on the number of buckets.")])])])]),e._v(" "),a("li",[a("p",[e._v("Recommendations on the number and amount of data for Partitions and Buckets.")]),e._v(" "),a("ul",[a("li",[e._v("The total number of tablets in a table is equal to (Partition num * Bucket num).")]),e._v(" "),a("li",[e._v("The number of tablets in a table, which is slightly more than the number of disks in the entire cluster, regardless of capacity expansion.")]),e._v(" "),a("li",[e._v("The data volume of a single tablet does not theoretically have an upper and lower bound, but is recommended to be in the range of 1G - 10G. If the amount of data for a single tablet is too small, the aggregation of the data is not good and the metadata management pressure is high. If the amount of data is too large, it is not conducive to the migration, completion, and increase the cost of Schema Change or Rollup operation failure retry (the granularity of these operations failure retry is Tablet).")]),e._v(" "),a("li",[e._v("When the tablet's data volume principle and quantity principle conflict, it is recommended to prioritize the data volume principle.")]),e._v(" "),a("li",[e._v("When building a table, the number of Buckets for each partition is uniformly specified. However, when dynamically increasing partitions ("),a("code",[e._v("ADD PARTITION")]),e._v("), you can specify the number of Buckets for the new partition separately. This feature can be used to easily reduce or expand data.")]),e._v(" "),a("li",[e._v("Once the number of Buckets for a Partition is specified, it cannot be changed. Therefore, when determining the number of Buckets, you need to consider the expansion of the cluster in advance. For example, there are currently only 3 hosts, and each host has 1 disk. If the number of Buckets is only set to 3 or less, then even if you add more machines later, you can't increase the concurrency.")]),e._v(" "),a("li",[e._v("Give some examples: Suppose there are 10 BEs, one for each BE disk. If the total size of a table is 500MB, you can consider 4-8 shards. 5GB: 8-16. 50GB: 32. 500GB: Recommended partitions, each partition is about 50GB in size, with 16-32 shards per partition. 5TB: Recommended partitions, each with a size of around 50GB and 16-32 shards per partition.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: The amount of data in the table can be viewed by the "),a("code",[e._v("show data")]),e._v(" command. The result is divided by the number of copies, which is the amount of data in the table.")])])])]),e._v(" "),a("h4",{attrs:{id:"multi-column-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-column-partition"}},[e._v("#")]),e._v(" Multi-column partition")]),e._v(" "),a("p",[e._v("Doris supports specifying multiple columns as partition columns, examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PARTITION BY RANGE(`date`, `id`)\n(\n    PARTITION `p201701_1000` VALUES LESS THAN ("2017-02-01", "1000"),\n    PARTITION `p201702_2000` VALUES LESS THAN ("2017-03-01", "2000"),\n    PARTITION `p201703_all` VALUES LESS THAN ("2017-04-01")\n)\n')])])]),a("p",[e._v("In the above example, we specify "),a("code",[e._v("date")]),e._v(" (DATE type) and "),a("code",[e._v("id")]),e._v(" (INT type) as partition columns. The resulting partitions in the above example are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('*p201701_1000: [(MIN_VALUE, MIN_VALUE), ("2017-02-01", "1000") )\n*p201702_2000: [("2017-02-01", "1000"), ("2017-03-01", "2000") )\n*p201703_all: [("2017-03-01", "2000"), ("2017-04-01", MIN_VALUE))\n')])])]),a("p",[e._v("Note that the last partition user defaults only the partition value of the "),a("code",[e._v("date")]),e._v(" column, so the partition value of the "),a("code",[e._v("id")]),e._v(" column will be filled with "),a("code",[e._v("MIN_VALUE")]),e._v(" by default. When the user inserts data, the partition column values ​​are compared in order, and the corresponding partition is finally obtained. Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("* Data --\x3e Partition\n* 2017-01-01, 200 --\x3e p201701_1000\n* 2017-01-01, 2000 --\x3e p201701_1000\n* 2017-02-01, 100 --\x3e p201701_1000\n* 2017-02-01, 2000 --\x3e p201702_2000\n* 2017-02-15, 5000 --\x3e p201702_2000\n* 2017-03-01, 2000 --\x3e p201703_all\n* 2017-03-10, 1 --\x3e p201703_all\n* 2017-04-01, 1000 --\x3e Unable to import\n* 2017-05-01, 1000 --\x3e Unable to import\n")])])]),a("h3",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" PROPERTIES")]),e._v(" "),a("p",[e._v("In the last PROPERTIES of the table statement, you can specify the following two parameters:")]),e._v(" "),a("p",[e._v("Replication_num")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("* The number of copies per tablet. The default is 3, it is recommended to keep the default. In the build statement, the number of Tablet copies in all Partitions is uniformly specified. When you add a new partition, you can individually specify the number of copies of the tablet in the new partition.\n* The number of copies can be modified at runtime. It is strongly recommended to keep odd numbers.\n* The maximum number of copies depends on the number of independent IPs in the cluster (note that it is not the number of BEs). The principle of replica distribution in Doris is that the copies of the same Tablet are not allowed to be distributed on the same physical machine, and the physical machine is identified as IP. Therefore, even if 3 or more BE instances are deployed on the same physical machine, if the BEs have the same IP, you can only set the number of copies to 1.\n* For some small, and infrequently updated dimension tables, consider setting more copies. In this way, when joining queries, there is a greater probability of local data join.\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("storage_medium & storage_cooldown_time")]),e._v(" "),a("ul",[a("li",[e._v("The BE data storage directory can be explicitly specified as SSD or HDD (differentiated by .SSD or .HDD suffix). When you build a table, you can uniformly specify the media for all Partition initial storage. Note that the suffix is ​​to explicitly specify the disk media without checking to see if it matches the actual media type.")]),e._v(" "),a("li",[e._v("The default initial storage media can be specified by "),a("code",[e._v("default_storage_medium= XXX")]),e._v(" in the fe configuration file "),a("code",[e._v("fe.conf")]),e._v(", or, if not, by default, HDD. If specified as an SSD, the data is initially stored on the SSD.")]),e._v(" "),a("li",[e._v("If storage_cooldown_time is not specified, the data is automatically migrated from the SSD to the HDD after 30 days by default. If storage_cooldown_time is specified, the data will not migrate until the storage_cooldown_time time is reached.")]),e._v(" "),a("li",[e._v('Note that this parameter is just a "best effort" setting when storage_medium is specified. Even if no SSD storage media is set in the cluster, no error is reported and it is automatically stored in the available data directory. Similarly, if the SSD media is inaccessible and out of space, the data may initially be stored directly on other available media. When the data expires and is migrated to the HDD, if the HDD media is inaccessible and there is not enough space, the migration may fail (but will continue to try).')])])])]),e._v(" "),a("h3",{attrs:{id:"engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[e._v("#")]),e._v(" ENGINE")]),e._v(" "),a("p",[e._v("In this example, the type of ENGINE is olap, the default ENGINE type. In Doris, only this ENGINE type is managed and stored by Doris. Other ENGINE types, such as mysql, broker, es, etc., are essentially mappings to tables in other external databases or systems to ensure that Doris can read the data. And Doris itself does not create, manage, and store any tables and data of a non-olap ENGINE type.")]),e._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),a("p",[a("code",[e._v("IF NOT EXISTS")]),e._v(" indicates that if the table has not been created, it is created. Note that only the table name is judged here, and it is not determined whether the new table structure is the same as the existing table structure. So if there is a table with the same name but different structure, the command will also return success, but it does not mean that a new table and a new structure have been created.")]),e._v(" "),a("h2",{attrs:{id:"common-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-problem"}},[e._v("#")]),e._v(" common problem")]),e._v(" "),a("h3",{attrs:{id:"build-table-operations-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-table-operations-faq"}},[e._v("#")]),e._v(" Build Table Operations FAQ")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If a syntax error occurs in a long build statement, a syntax error may be incomplete. Here is a list of possible syntax errors for manual error correction:")]),e._v(" "),a("ul",[a("li",[e._v("The syntax is incorrect. Please read "),a("code",[e._v("HELP CREATE TABLE;")]),e._v(" carefully to check the relevant syntax structure.")]),e._v(" "),a("li",[e._v("Reserved words. When the user-defined name encounters a reserved word, it needs to be enclosed in the backquote ``. It is recommended that all custom names be generated using this symbol.")]),e._v(" "),a("li",[e._v("Chinese characters or full-width characters. Non-utf8 encoded Chinese characters, or hidden full-width characters (spaces, punctuation, etc.) can cause syntax errors. It is recommended to check with a text editor with invisible characters.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Failed to create partition [xxx] . Timeout")])]),e._v(" "),a("p",[e._v("Doris builds are created in order of Partition granularity. This error may be reported when a Partition creation fails. Even if you don't use Partition, you will report "),a("code",[e._v("Failed to create partition")]),e._v(" when there is a problem with the built table, because as mentioned earlier, Doris will create an unchangeable default Partition for tables that do not have a Partition specified.")]),e._v(" "),a("p",[e._v("When this error is encountered, it is usually the BE that has encountered problems creating data fragments. You can follow the steps below to troubleshoot:")]),e._v(" "),a("ol",[a("li",[e._v("In fe.log, find the "),a("code",[e._v("Failed to create partition")]),e._v(" log for the corresponding point in time. In this log, a series of numbers like "),a("code",[e._v("{10001-10010}")]),e._v(" will appear. The first number of the pair is the Backend ID and the second number is the Tablet ID. As for the pair of numbers above, on the Backend with ID 10001, creating a tablet with ID 10010 failed.")]),e._v(" "),a("li",[e._v("Go to the be.INFO log corresponding to Backend and find the log related to the tablet id in the corresponding time period. You can find the error message.")]),e._v(" "),a("li",[e._v("Listed below are some common tablet creation failure errors, including but not limited to:\n"),a("ul",[a("li",[e._v("BE did not receive the relevant task, and the tablet id related log could not be found in be.INFO. Or the BE is created successfully, but the report fails. For the above questions, see [Deployment and Upgrade Documentation] to check the connectivity of FE and BE.")]),e._v(" "),a("li",[e._v("Pre-allocated memory failed. It may be that the length of a line in a row in the table exceeds 100KB.")]),e._v(" "),a("li",[a("code",[e._v("Too many open files")]),e._v(". The number of open file handles exceeds the Linux system limit. The handle limit of the Linux system needs to be modified.")])])])]),e._v(" "),a("p",[e._v("You can also extend the timeout by setting "),a("code",[e._v("tablet_create_timeout_second=xxx")]),e._v(" in fe.conf. The default is 2 seconds.")])]),e._v(" "),a("li",[a("p",[e._v("The build table command does not return results for a long time.")]),e._v(" "),a("p",[e._v("Doris's table creation command is a synchronous command. The timeout of this command is currently set to be relatively simple, ie (tablet num * replication num) seconds. If you create more data fragments and have fragment creation failed, it may cause an error to be returned after waiting for a long timeout.")]),e._v(" "),a("p",[e._v("Under normal circumstances, the statement will return in a few seconds or ten seconds. If it is more than one minute, it is recommended to cancel this operation directly and go to the FE or BE log to view the related errors.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);