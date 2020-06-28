(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{421:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" Routine Load")]),e._v(" "),a("p",[e._v("The Routine Load feature provides users with a way to automatically load data from a specified data source.")]),e._v(" "),a("p",[e._v("This document describes the implementation principles, usage, and best practices of this feature.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),a("li",[e._v("BE: Backend, the backend node of Doris. Responsible for query execution and data storage.")]),e._v(" "),a("li",[e._v("RoutineLoadJob: A routine load job submitted by the user.")]),e._v(" "),a("li",[e._v("JobScheduler: A routine load job scheduler for scheduling and dividing a RoutineLoadJob into multiple Tasks.")]),e._v(" "),a("li",[e._v("Task: RoutineLoadJob is divided by JobScheduler according to the rules.")]),e._v(" "),a("li",[e._v("TaskScheduler: Task Scheduler. Used to schedule the execution of a Task.")])]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("         +---------+\n         |  Client |\n         +----+----+\n              |\n+-----------------------------+\n| FE          |               |\n| +-----------v------------+  |\n| |                        |  |\n| |   Routine Load Job     |  |\n| |                        |  |\n| +---+--------+--------+--+  |\n|     |        |        |     |\n| +---v--+ +---v--+ +---v--+  |\n| | task | | task | | task |  |\n| +--+---+ +---+--+ +---+--+  |\n|    |         |        |     |\n+-----------------------------+\n     |         |        |\n     v         v        v\n +---+--+   +--+---+   ++-----+\n |  BE  |   |  BE  |   |  BE  |\n +------+   +------+   +------+\n\n")])])]),a("p",[e._v("As shown above, the client submits a routine load job to FE.")]),e._v(" "),a("p",[e._v("FE splits an load job into several Tasks via JobScheduler. Each Task is responsible for loading a specified portion of the data. The Task is assigned by the TaskScheduler to the specified BE.")]),e._v(" "),a("p",[e._v("On the BE, a Task is treated as a normal load task and loaded via the Stream Load load mechanism. After the load is complete, report to FE.")]),e._v(" "),a("p",[e._v("The JobScheduler in the FE continues to generate subsequent new Tasks based on the reported results, or retry the failed Task.")]),e._v(" "),a("p",[e._v("The entire routine load job completes the uninterrupted load of data by continuously generating new Tasks.")]),e._v(" "),a("h2",{attrs:{id:"kafka-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-routine-load"}},[e._v("#")]),e._v(" Kafka Routine load")]),e._v(" "),a("p",[e._v("Currently we only support routine load from the Kafka system. This section details Kafka's routine use and best practices.")]),e._v(" "),a("h3",{attrs:{id:"usage-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-restrictions"}},[e._v("#")]),e._v(" Usage restrictions")]),e._v(" "),a("ol",[a("li",[e._v("Support unauthenticated Kafka access and Kafka clusters certified by SSL.")]),e._v(" "),a("li",[e._v("The supported message format is csv text format. Each message is a line, and the end of the line does not contain a ** line break.")]),e._v(" "),a("li",[e._v("Only Kafka 0.10.0.0 or above is supported.")])]),e._v(" "),a("h3",{attrs:{id:"create-a-routine-load-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-routine-load-task"}},[e._v("#")]),e._v(" Create a routine load task")]),e._v(" "),a("p",[e._v("The detailed syntax for creating a routine load task can be connected to Doris and execute "),a("code",[e._v("HELP ROUTINE LOAD;")]),e._v(" to see the syntax help. Here is a detailed description of the precautions when creating a job.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("columns_mapping")]),e._v(" "),a("p",[a("code",[e._v("columns_mapping")]),e._v(" is mainly used to specify the column structure of the table structure and message, as well as the conversion of some columns. If not specified, Doris will default to the columns in the message and the columns of the table structure in a one-to-one correspondence. Although under normal circumstances, if the source data is exactly one-to-one, normal data load can be performed without specifying. However, we still strongly recommend that users ** explicitly specify column mappings**. This way, when the table structure changes (such as adding a nullable column), or the source file changes (such as adding a column), the load task can continue. Otherwise, after the above changes occur, the load will report an error because the column mapping relationship is no longer one-to-one.")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("columns_mapping")]),e._v(" we can also use some built-in functions for column conversion. But you need to pay attention to the actual column type corresponding to the function parameters. for example:")]),e._v(" "),a("p",[e._v("Suppose the user needs to load a table containing only a column of "),a("code",[e._v("k1")]),e._v(" with a column type of "),a("code",[e._v("int")]),e._v(". And you need to convert the null value in the source file to 0. This feature can be implemented with the "),a("code",[e._v("ifnull")]),e._v(" function. The correct way to use is as follows:")]),e._v(" "),a("p",[a("code",[e._v('COLUMNS (xx, k1=ifnull(xx, "3"))')])]),e._v(" "),a("p",[e._v("Note that we use "),a("code",[e._v('"3"')]),e._v(" instead of "),a("code",[e._v("3")]),e._v(", although "),a("code",[e._v("k1")]),e._v(" is of type "),a("code",[e._v("int")]),e._v(". Because the column type in the source data is "),a("code",[e._v("varchar")]),e._v(" for the load task, the "),a("code",[e._v("xx")]),e._v(" virtual column is also of type "),a("code",[e._v("varchar")]),e._v(". So we need to use "),a("code",[e._v('"3"')]),e._v(" to match the match, otherwise the "),a("code",[e._v("ifnull")]),e._v(" function can't find the function signature with the parameter "),a("code",[e._v("(varchar, int)")]),e._v(", and an error will occur.")]),e._v(" "),a("p",[e._v("As another example, suppose the user needs to load a table containing only a column of "),a("code",[e._v("k1")]),e._v(" with a column type of "),a("code",[e._v("int")]),e._v(". And you need to process the corresponding column in the source file: convert the negative number to a positive number and the positive number to 100. This function can be implemented with the "),a("code",[e._v("case when")]),e._v(" function. The correct wording should be as follows:")]),e._v(" "),a("p",[a("code",[e._v("COLUMNS (xx, case when xx < 0 than cast(-xx as varchar) else cast((xx + '100') as varchar) end)")])]),e._v(" "),a("p",[e._v("Note that we need to convert all the parameters in "),a("code",[e._v("case when")]),e._v(" to varchar in order to get the desired result.")])]),e._v(" "),a("li",[a("p",[e._v("where_predicates")]),e._v(" "),a("p",[e._v("The type of the column in "),a("code",[e._v("where_predicates")]),e._v(" is already the actual column type, so there is no need to cast to the varchar type as "),a("code",[e._v("columns_mapping")]),e._v(". Write according to the actual column type.")])]),e._v(" "),a("li",[a("p",[e._v("desired_concurrent_number")]),e._v(" "),a("p",[a("code",[e._v("desired_concurrent_number")]),e._v(" is used to specify the degree of concurrency expected for a routine job. That is, a job, at most how many tasks are executing at the same time. For Kafka load, the current actual concurrency is calculated as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Min(partition num, desired_concurrent_number, alive_backend_num, Config.max_routine_load_task_concurrrent_num)\n")])])]),a("p",[e._v("Where "),a("code",[e._v("Config.max_routine_load_task_concurrrent_num")]),e._v(" is a default maximum concurrency limit for the system. This is a FE configuration that can be adjusted by changing the configuration. The default is 5.")]),e._v(" "),a("p",[e._v("Where partition num refers to the number of partitions for the Kafka topic subscribed to. "),a("code",[e._v("alive_backend_num")]),e._v(" is the current number of normal BE nodes.")])]),e._v(" "),a("li",[a("p",[e._v("max_batch_interval/max_batch_rows/max_batch_size")]),e._v(" "),a("p",[e._v("These three parameters are used to control the execution time of a single task. If any of the thresholds is reached, the task ends. Where "),a("code",[e._v("max_batch_rows")]),e._v(" is used to record the number of rows of data read from Kafka. "),a("code",[e._v("max_batch_size")]),e._v(" is used to record the amount of data read from Kafka in bytes. The current consumption rate for a task is approximately 5-10MB/s.")]),e._v(" "),a("p",[e._v("So assume a row of data 500B, the user wants to be a task every 100MB or 10 seconds. The expected processing time for 100MB is 10-20 seconds, and the corresponding number of rows is about 200000 rows. Then a reasonable configuration is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"max_batch_interval" = "10",\n"max_batch_rows" = "200000",\n"max_batch_size" = "104857600"\n')])])]),a("p",[e._v("The parameters in the above example are also the default parameters for these configurations.")])]),e._v(" "),a("li",[a("p",[e._v("max_error_number")]),e._v(" "),a("p",[a("code",[e._v("max_error_number")]),e._v(" is used to control the error rate. When the error rate is too high, the job will automatically pause. Because the entire job is stream-oriented, and because of the borderless nature of the data stream, we can't calculate the error rate with an error ratio like other load tasks. So here is a new way of calculating to calculate the proportion of errors in the data stream.")]),e._v(" "),a("p",[e._v("We have set up a sampling window. The size of the window is "),a("code",[e._v("max_batch_rows * 10")]),e._v(". Within a sampling window, if the number of error lines exceeds "),a("code",[e._v("max_error_number")]),e._v(", the job is suspended. If it is not exceeded, the next window restarts counting the number of error lines.")]),e._v(" "),a("p",[e._v("We assume that "),a("code",[e._v("max_batch_rows")]),e._v(" is 200000 and the window size is 2000000. Let "),a("code",[e._v("max_error_number")]),e._v(" be 20000, that is, the user expects an error behavior of 20000 for every 2000000 lines. That is, the error rate is 1%. But because not every batch of tasks consumes 200000 rows, the actual range of the window is [2000000, 2200000], which is 10% statistical error.")]),e._v(" "),a("p",[e._v("The error line does not include rows that are filtered out by the where condition. But include rows that do not have a partition in the corresponding Doris table.")])]),e._v(" "),a("li",[a("p",[e._v("data_source_properties")]),e._v(" "),a("p",[e._v("The specific Kakfa partition can be specified in "),a("code",[e._v("data_source_properties")]),e._v(". If not specified, all partitions of the subscribed topic are consumed by default.")]),e._v(" "),a("p",[e._v("Note that when partition is explicitly specified, the load job will no longer dynamically detect changes to Kafka partition. If not specified, the partitions that need to be consumed are dynamically adjusted based on changes in the kafka partition.")])]),e._v(" "),a("li",[a("p",[e._v("strict_mode")]),e._v(" "),a("p",[e._v("Routine load load can turn on strict mode mode. The way to open it is to add "),a("code",[e._v('"strict_mode" = "true"')]),e._v(" to job_properties. The default strict mode is off.")]),e._v(" "),a("p",[e._v("The strict mode mode means strict filtering of column type conversions during the load process. The strict filtering strategy is as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For column type conversion, if strict mode is true, the wrong data will be filtered. The error data here refers to the fact that the original data is not null, and the result is a null value after participating in the column type conversion.")])]),e._v(" "),a("li",[a("p",[e._v("When a loaded column is generated by a function transformation, strict mode has no effect on it.")])]),e._v(" "),a("li",[a("p",[e._v("For a column type loaded with a range limit, if the original data can pass the type conversion normally, but cannot pass the range limit, strict mode will not affect it. For example, if the type is decimal(1,0) and the original data is 10, it is eligible for type conversion but not for column declarations. This data strict has no effect on it.")])])])])]),e._v(" "),a("h4",{attrs:{id:"strict-mode-and-load-relationship-of-source-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode-and-load-relationship-of-source-data"}},[e._v("#")]),e._v(" strict mode and load relationship of source data")]),e._v(" "),a("p",[e._v("Here is an example of a column type of TinyInt.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When a column in a table allows a null value to be loaded")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa or 2000")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("p",[e._v("Here the column type is Decimal(1,0)")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When a column in a table allows a null value to be loaded")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1 or 10")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: 10 Although it is a value that is out of range, because its type meets the requirements of decimal, strict mode has no effect on it. 10 will eventually be filtered in other ETL processing flows. But it will not be filtered by strict mode.")])]),e._v(" "),a("h4",{attrs:{id:"accessing-ssl-certified-kafka-clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-ssl-certified-kafka-clusters"}},[e._v("#")]),e._v(" Accessing SSL-certified Kafka clusters")]),e._v(" "),a("p",[e._v("Accessing the SSL-certified Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If the Kafka cluster has both client authentication enabled, you will also need to provide the client's public key (client.pem), key file (client.key), and key password. The files needed here need to be uploaded to Doris via the "),a("code",[e._v("CREAE FILE")]),e._v(" command, ** and the catalog name is "),a("code",[e._v("kafka")]),e._v("**. See "),a("code",[e._v("HELP CREATE FILE;")]),e._v(" for specific help on the "),a("code",[e._v("CREATE FILE")]),e._v(" command. Here is an example:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Upload file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')])])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n2. Create a routine load job\n\n    ```\n    CREATE ROUTINE LOAD db1.job1 on tbl1\n    PROPERTIES\n    (\n        "desired_concurrent_number"="1"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list"= "broker1:9091,broker2:9091",\n        "kafka_topic" = "my_topic",\n        "property.security.protocol" = "ssl",\n        "property.ssl.ca.location" = "FILE:ca.pem",\n        "property.ssl.certificate.location" = "FILE:client.pem",\n        "property.ssl.key.location" = "FILE:client.key",\n        "property.ssl.key.password" = "abcdefg"\n    );\n    ```\n\n> Doris accesses Kafka clusters via Kafka\'s C++ API `librdkafka`. The parameters supported by `librdkafka` can be found.\n>\n> `https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md`\n\n### Viewing the status of the load job\n\nSpecific commands and examples for viewing the status of the ** job** can be viewed with the `HELP SHOW ROUTINE LOAD;` command.\n\nSpecific commands and examples for viewing the **Task** status can be viewed with the `HELP SHOW ROUTINE LOAD TASK;` command.\n\nYou can only view tasks that are currently running, and tasks that have ended and are not started cannot be viewed.\n\n### Job Control\n\nThe user can control the stop, pause and restart of the job by the three commands `STOP/PAUSE/RESUME`. You can view help and examples with the three commands `HELP STOP ROUTINE LOAD;`, `HELP PAUSE ROUTINE LOAD;` and `HELP RESUME ROUTINE LOAD;`.\n\n## other instructions\n\n1. The relationship between a routine load job and an ALTER TABLE operation\n\n    * Routine load does not block SCHEMA CHANGE and ROLLUP operations. Note, however, that if the column mappings are not matched after SCHEMA CHANGE is completed, the job\'s erroneous data will spike and eventually cause the job to pause. It is recommended to reduce this type of problem by explicitly specifying column mappings in routine load jobs and by adding Nullable columns or columns with Default values.\n    * Deleting a Partition of a table may cause the loaded data to fail to find the corresponding Partition and the job will be paused.\n\n2. Relationship between routine load jobs and other load jobs (LOAD, DELETE, INSERT)\n\n    * Routine load does not conflict with other LOAD jobs and INSERT operations.\n    * When performing a DELETE operation, the corresponding table partition cannot have any load tasks being executed. Therefore, before performing the DELETE operation, you may need to pause the routine load job and wait for the delivered task to complete before you can execute DELETE.\n\n3. Relationship between routine load jobs and DROP DATABASE/TABLE operations\n\n    When the corresponding database or table is deleted, the job will automatically CANCEL.\n\n4. The relationship between the kafka type routine load job and kafka topic\n\n    When the user creates a routine load declaration, the `kafka_topic` does not exist in the kafka cluster.\n\n    * If the broker of the user kafka cluster has `auto.create.topics.enable = true` set, `kafka_topic` will be automatically created first, and the number of partitions created automatically will be in the kafka cluster** of the user side. The broker is configured with `num.partitions`. The routine job will continue to read the data of the topic continuously.\n    * If the broker of the user kafka cluster has `auto.create.topics.enable = false` set, topic will not be created automatically, and the routine will be paused before any data is read, with the status `PAUSED`.\n\n    So, if the user wants to be automatically created by the routine when the kafka topic does not exist, just set the broker in the kafka cluster** of the user\'s side to set auto.create.topics.enable = true` .\n\n## Related parameters\n\nSome system configuration parameters can affect the use of routine loads.\n\n1. max\\_routine\\_load\\_task\\_concurrent\\_num\n\n    The FE configuration item, which defaults to 5, can be modified at runtime. This parameter limits the maximum number of subtask concurrency for a routine load job. It is recommended to maintain the default value. If the setting is too large, it may cause too many concurrent tasks and occupy cluster resources.\n\n2. max\\_routine_load\\_task\\_num\\_per\\_be\n\n    The FE configuration item, which defaults to 5, can be modified at runtime. This parameter limits the number of subtasks that can be executed concurrently by each BE node. It is recommended to maintain the default value. If the setting is too large, it may cause too many concurrent tasks and occupy cluster resources.\n\n3. max\\_routine\\_load\\_job\\_num\n\n    The FE configuration item, which defaults to 100, can be modified at runtime. This parameter limits the total number of routine load jobs, including NEED_SCHEDULED, RUNNING, PAUSE. After the overtime, you cannot submit a new assignment.\n\n4. max\\_consumer\\_num\\_per\\_group\n\n    BE configuration item, the default is 3. This parameter indicates that up to several consumers are generated in a subtask for data consumption. For a Kafka data source, a consumer may consume one or more kafka partitions. Suppose a task needs to consume 6 kafka partitions, it will generate 3 consumers, and each consumer consumes 2 partitions. If there are only 2 partitions, only 2 consumers will be generated, and each consumer will consume 1 partition.\n\n5. push\\_write\\_mbytes\\_per\\_sec\n\n    BE configuration item. The default is 10, which is 10MB/s. This parameter is to load common parameters, not limited to routine load jobs. This parameter limits the speed at which loaded data is written to disk. For high-performance storage devices such as SSDs, this speed limit can be appropriately increased.\n\n6. max\\_tolerable\\_backend\\_down\\_num\n    FE configuration item, the default is 0. Under certain conditions, Doris can reschedule PAUSED tasks, that becomes RUNNING?This parameter is 0, which means that rescheduling is allowed only when all BE nodes are in alive state.\n\n7. period\\_of\\_auto\\_resume\\_min\n    FE configuration item, the default is 5 mins. Doris reschedules will only try at most 3 times in the 5 minute period. If all 3 times fail, the current task will be locked, and auto-scheduling will not be performed. However, manual intervention can be performed.\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);