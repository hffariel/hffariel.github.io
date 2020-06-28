(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{419:function(e,t,s){"use strict";s.r(t);var a=s(43),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"insert-into"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[e._v("#")]),e._v(" Insert Into")]),e._v(" "),s("p",[e._v("The use of Insert Into statements is similar to that of Insert Into statements in databases such as MySQL. But in Doris, all data writing is a separate import job. So Insert Into is also introduced here as an import method.")]),e._v(" "),s("p",[e._v("The main Insert Into command contains the following two kinds;")]),e._v(" "),s("ul",[s("li",[e._v("INSERT INTO tbl SELECT ...")]),e._v(" "),s("li",[e._v("INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")])]),e._v(" "),s("p",[e._v("The second command is for Demo only, not in a test or production environment.")]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),s("h3",{attrs:{id:"create-a-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-load"}},[e._v("#")]),e._v(" Create a Load")]),e._v(" "),s("p",[e._v("The Insert Into command needs to be submitted through MySQL protocol. Creating an import request returns the import result synchronously.")]),e._v(" "),s("p",[e._v("Grammar:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO table_name [WITH LABEL label] [partition_info] [col_list] [query_stmt] [VALUES];\n")])])]),s("p",[e._v("Examples:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')])])]),s("p",[s("strong",[e._v("Notice")])]),e._v(" "),s("p",[e._v("When using "),s("code",[e._v("CTE(Common Table Expressions)")]),e._v(" as the query part of insert operation, the "),s("code",[e._v("WITH LABEL")]),e._v(" or column list part must be specified.\nFor example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n")])])]),s("p",[e._v("The following is a brief introduction to the parameters used in creating import statements:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("partition_info")]),e._v(" "),s("p",[e._v("Import the target partition of the table. If the target partition is specified, only the data that matches the target partition will be imported. If not specified, the default value is all partitions of the table.")])]),e._v(" "),s("li",[s("p",[e._v("col_list")]),e._v(" "),s("p",[e._v("The target column of the import table can exist in any order. If no target column is specified, the default value is all columns in this table. If a column in the table does not exist in the target column, the column needs a default value, otherwise Insert Into will fail.")]),e._v(" "),s("p",[e._v("If the result column type of the query statement is inconsistent with the type of the target column, an implicit type conversion is invoked. If the conversion is not possible, the Insert Into statement will report a parsing error.")])]),e._v(" "),s("li",[s("p",[e._v("query_stmt")]),e._v(" "),s("p",[e._v("Through a query statement, the results of the query statement are imported into other tables in Doris system. Query statements support any SQL query syntax supported by Doris.")])]),e._v(" "),s("li",[s("p",[e._v("VALUES")]),e._v(" "),s("p",[e._v("Users can insert one or more data through VALUES grammar.")]),e._v(" "),s("p",[s("em",[e._v("Note: VALUES is only suitable for importing several pieces of data as DEMO. It is totally unsuitable for any test and production environment. Doris system itself is not suitable for single data import scenarios. It is recommended to use INSERT INTO SELECT for batch import.")])])])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("WITH LABEL")]),e._v(" "),s("p",[e._v("INSERT as a load job, it can also be with a label. If not with a label, Doris will use a UUID as label.")]),e._v(" "),s("p",[e._v("This feature needs Doris version 0.11+.")]),e._v(" "),s("p",[s("em",[e._v("Note: It is recommended that Label be specified rather than automatically allocated by the system. If the system allocates automatically, but during the execution of the Insert Into statement, the connection is disconnected due to network errors, etc., then it is impossible to know whether Insert Into is successful. If you specify Label, you can view the task results again through Label.")])])])]),e._v(" "),s("h3",{attrs:{id:"load-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-results"}},[e._v("#")]),e._v(" Load results")]),e._v(" "),s("p",[e._v("Insert Into itself is a SQL command, and the return result is divided into the following types according to the different execution results:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Result set is empty")]),e._v(" "),s("p",[e._v("If the result set of the insert corresponding SELECT statement is empty, it is returned as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")])])]),s("p",[s("code",[e._v("Query OK")]),e._v(" indicates successful execution. "),s("code",[e._v("0 rows affected")]),e._v(" means that no data was loaded.")])]),e._v(" "),s("li",[s("p",[e._v("The result set is not empty")]),e._v(" "),s("p",[e._v("In the case where the result set is not empty. The returned results are divided into the following situations:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Insert is successful and data is visible:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n")])])]),s("p",[s("code",[e._v("Query OK")]),e._v(" indicates successful execution. "),s("code",[e._v("4 rows affected")]),e._v(" means that a total of 4 rows of data were imported. "),s("code",[e._v("2 warnings")]),e._v(" indicates the number of lines to be filtered.")]),e._v(" "),s("p",[e._v("Also returns a json string:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005', 'err': 'some other error'}\n")])])]),s("p",[s("code",[e._v("label")]),e._v(" is a user-specified label or an automatically generated label. Label is the ID of this Insert Into load job. Each load job has a label that is unique within a single database.")]),e._v(" "),s("p",[s("code",[e._v("status")]),e._v(" indicates whether the loaded data is visible. If visible, show "),s("code",[e._v("visible")]),e._v(", if not, show"),s("code",[e._v("committed")]),e._v(".")]),e._v(" "),s("p",[s("code",[e._v("txnId")]),e._v(" is the id of the load transaction corresponding to this insert.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("err")]),e._v(" field displays some other unexpected errors.")]),e._v(" "),s("p",[e._v("When user need to view the filtered rows, the user can use the following statement")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('show load where label = "xxx";\n')])])]),s("p",[e._v("The URL in the returned result can be used to query the wrong data. For details, see the following "),s("strong",[e._v("View Error Lines")]),e._v(" Summary.\n    \n"),s("strong",[e._v('"Data is not visible" is a temporary status, this batch of data must be visible eventually')])]),e._v(" "),s("p",[e._v("You can view the visible status of this batch of data with the following statement:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("show transaction where id = 4005;\n")])])]),s("p",[e._v("If the "),s("code",[e._v("TransactionStatus")]),e._v(" column in the returned result is "),s("code",[e._v("visible")]),e._v(", the data is visible.")])]),e._v(" "),s("li",[s("p",[e._v("Insert fails")]),e._v(" "),s("p",[e._v("Execution failure indicates that no data was successfully loaded, and returns as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. Url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de850e8de850\n')])])]),s("p",[e._v("Where "),s("code",[e._v("ERROR 1064 (HY000): all partitions have no load data")]),e._v(" shows the reason for the failure. The latter url can be used to query the wrong data. For details, see the following "),s("strong",[e._v("View Error Lines")]),e._v(" Summary.")])])])])]),e._v(" "),s("p",[s("strong",[e._v("In summary, the correct processing logic for the results returned by the insert operation should be:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("If the returned result is "),s("code",[e._v("ERROR 1064 (HY000)")]),e._v(", it means that the import failed.")])]),e._v(" "),s("li",[s("p",[e._v("If the returned result is "),s("code",[e._v("Query OK")]),e._v(", it means the execution was successful.")]),e._v(" "),s("ol",[s("li",[e._v("If "),s("code",[e._v("rows affected")]),e._v(" is 0, the result set is empty and no data is loaded.")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("rows affected")]),e._v(" is greater than 0:\n"),s("ol",[s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is"),s("code",[e._v("committed")]),e._v(", the data is not yet visible. You need to check the status through the "),s("code",[e._v("show transaction")]),e._v(" statement until "),s("code",[e._v("visible")]),e._v(".")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is"),s("code",[e._v("visible")]),e._v(", the data is loaded successfully.")])])]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("warnings")]),e._v(" is greater than 0, it means that some data is filtered. You can get the url through the "),s("code",[e._v("show load")]),e._v(" statement to see the filtered rows.")])])])]),e._v(" "),s("h2",{attrs:{id:"relevant-system-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relevant-system-configuration"}},[e._v("#")]),e._v(" Relevant System Configuration")]),e._v(" "),s("h3",{attrs:{id:"fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("time out")]),e._v(" "),s("p",[e._v("The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED.")]),e._v(" "),s("p",[e._v("At present, Insert Into does not support custom import timeout time. All Insert Into imports have a uniform timeout time. The default timeout time is 1 hour. If the imported source file cannot complete the import within the specified time, the parameter "),s("code",[e._v("insert_load_default_timeout_second")]),e._v(" of FE needs to be adjusted.")]),e._v(" "),s("p",[e._v("At the same time, the Insert Into statement receives the restriction of the Session variable "),s("code",[e._v("query_timeout")]),e._v(". You can increase the timeout time by "),s("code",[e._v("SET query_timeout = xxx;")]),e._v(" in seconds.")])])]),e._v(" "),s("h3",{attrs:{id:"session-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-variables"}},[e._v("#")]),e._v(" Session Variables")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("enable_insert_strict")]),e._v(" "),s("p",[e._v("The Insert Into import itself cannot control the tolerable error rate of the import. Users can only use the Session parameter "),s("code",[e._v("enable_insert_strict")]),e._v(". When this parameter is set to false, it indicates that at least one data has been imported correctly, and then it returns successfully. When this parameter is set to true, the import fails if there is a data error. The default is false. It can be set by "),s("code",[e._v("SET enable_insert_strict = true;")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("query u timeout")]),e._v(" "),s("p",[e._v("Insert Into itself is also an SQL command, so the Insert Into statement is also restricted by the Session variable "),s("code",[e._v("query_timeout")]),e._v(". You can increase the timeout time by "),s("code",[e._v("SET query_timeout = xxx;")]),e._v(" in seconds.")])])]),e._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),s("h3",{attrs:{id:"application-scenarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-scenarios"}},[e._v("#")]),e._v(" Application scenarios")]),e._v(" "),s("ol",[s("li",[e._v("Users want to import only a few false data to verify the functionality of Doris system. The grammar of INSERT INTO VALUS is suitable at this time.")]),e._v(" "),s("li",[e._v("Users want to convert the data already in the Doris table into ETL and import it into a new Doris table, which is suitable for using INSERT INTO SELECT grammar.")]),e._v(" "),s("li",[e._v("Users can create an external table, such as MySQL external table mapping a table in MySQL system. Or create Broker external tables to map data files on HDFS. Then the data from the external table is imported into the Doris table for storage through the INSERT INTO SELECT grammar.")])]),e._v(" "),s("h3",{attrs:{id:"data-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-volume"}},[e._v("#")]),e._v(" Data volume")]),e._v(" "),s("p",[e._v("Insert Into has no limitation on the amount of data, and large data imports can also be supported. However, Insert Into has a default timeout time, and the amount of imported data estimated by users is too large, so it is necessary to modify the system's Insert Into import timeout time.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Import data volume = 36G or less than 3600s*10M/s\nAmong them, 10M/s is the maximum import speed limit. Users need to calculate the average import speed according to the current cluster situation to replace 10M/s in the formula.\n")])])]),s("h3",{attrs:{id:"complete-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complete-examples"}},[e._v("#")]),e._v(" Complete examples")]),e._v(" "),s("p",[e._v("Users have a table store sales in the database sales. Users create a table called bj store sales in the database sales. Users want to import the data recorded in the store sales into the new table bj store sales. The amount of data imported is about 10G.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("large sales scheme\n(id, total, user_id, sale_timestamp, region)\n\nOrder large sales schedule:\n(id, total, user_id, sale_timestamp)\n\n")])])]),s("p",[e._v("Cluster situation: The average import speed of current user cluster is about 5M/s")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Step1: Determine whether you want to modify the default timeout of Insert Into")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Calculate the approximate time of import\n10G / 5M /s = 2000s\n\nModify FE configuration\ninsert_load_default_timeout_second = 2000\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Step2: Create Import Tasks")]),e._v(" "),s("p",[e._v("Since users want to ETL data from a table and import it into the target table, they should use the Insert in query\\stmt mode to import it.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('INSERT INTO bj_store_sales SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')])])])])]),e._v(" "),s("h2",{attrs:{id:"common-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("View the wrong line")]),e._v(" "),s("p",[e._v("Because Insert Into can't control the error rate, it can only tolerate or ignore the error data completely by "),s("code",[e._v("enable_insert_strict")]),e._v(". So if "),s("code",[e._v("enable_insert_strict")]),e._v(" is set to true, Insert Into may fail. If "),s("code",[e._v("enable_insert_strict")]),e._v(" is set to false, then only some qualified data may be imported. However, in either case, Doris is currently unable to provide the ability to view substandard data rows. Therefore, the user cannot view the specific import error through the Insert Into statement.")]),e._v(" "),s("p",[e._v("The causes of errors are usually: source data column length exceeds destination data column length, column type mismatch, partition mismatch, column order mismatch, etc. When it's still impossible to check for problems. At present, it is only recommended that the SELECT command in the Insert Into statement be run to export the data to a file, and then import the file through Stream load to see the specific errors.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);