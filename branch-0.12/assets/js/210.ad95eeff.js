(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{600:function(e,a,t){"use strict";t.r(a);var s=t(33),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"drop-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-materialized-view"}},[e._v("#")]),e._v(" DROP MATERIALIZED VIEW")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("This statement is used to delete a materialized view. Synchronization syntax\n")])])]),t("p",[e._v("syntax:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nDROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name\n```\n")])])]),t("ol",[t("li",[t("p",[e._v("IF EXISTS\nIf the materialized view does not exist, doris will not throw an error. If this keyword is not declared, an error will be reported if the materialized view does not exist.\nRanch")])]),e._v(" "),t("li",[t("p",[e._v("mv_name\nThe name of the materialized view to be deleted. Required.")])]),e._v(" "),t("li",[t("p",[e._v("Table_name\nName of the table to which the materialized view to be deleted belongs. Required.")])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("Table structure is")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> desc all_type_table all;\n+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n|                |       |          |      |       |         |       |\n| k1_sumk2       | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | SUM   |\n+----------------+-------+----------+------+-------+---------+-------+\n")])])]),t("ol",[t("li",[t("p",[e._v("Drop the materialized view named k1_sumk2 of the table all_type_table")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view k1_sumk2 on all_type_table;\n")])])]),t("p",[e._v("Table structure after materialized view is deleted as following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")])])])]),e._v(" "),t("p",[e._v("+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n```")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Delete a non-existing materialized view in the table all_type_table")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view k1_k2 on all_type_table;\n")])])])])]),e._v(" "),t("p",[e._v("ERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n```")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("The delete request directly reports an error\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[e._v("Delete the materialized view k1_k2 in the table all_type_table. Materialized view does not exist and no error is reported.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view if exists k1_k2 on all_type_table;\n")])])])])]),e._v(" "),t("p",[e._v("Query OK, 0 rows affected (0.00 sec)\n```")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("If it exists, it will be deleted; If it does not exist, no error will be reported.\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("DROP, MATERILIAZED, VIEW")])])}),[],!1,null,null,null);a.default=l.exports}}]);