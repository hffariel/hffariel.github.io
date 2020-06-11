(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{630:function(e,t,a){"use strict";a.r(t);var i=a(43),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-load"}},[e._v("#")]),e._v(" SHOW LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v('This statement is used to show the execution of the specified import task\nGrammar:\nSHOW LOAD\n[FROM both names]\n[\nWHERE\n[LABEL [ = "your_label" | LIKE "label_matcher"]]\n[STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];')]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("If db_name is not specified, use the current default DB")]),e._v(" "),a("li",[e._v("If you use LABEL LIKE, the label that matches the import task contains the import task of label_matcher")]),e._v(" "),a("li",[e._v("If LABEL = is used, the specified label is matched accurately.")]),e._v(" "),a("li",[e._v("If STATE is specified, the LOAD state is matched")]),e._v(" "),a("li",[e._v("Arbitrary column combinations can be sorted using ORDER BY")]),e._v(" "),a("li",[e._v("If LIMIT is specified, the limit bar matching record is displayed. Otherwise, all of them will be displayed.")]),e._v(" "),a("li",[e._v("If OFFSET is specified, the query results are displayed from offset. By default, the offset is 0.")]),e._v(" "),a("li",[e._v("If broker/mini load is used, the connection in the URL column can be viewed using the following command:")])]),e._v(" "),a("p",[e._v("SHOW LOAD WARNINGS ON 'url'")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Show all import tasks of default DB\nSHOW LOAD;")])]),e._v(" "),a("li",[a("p",[e._v('Show the import task of the specified db. The label contains the string "2014_01_02", showing the oldest 10\nSHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;')])]),e._v(" "),a("li",[a("p",[e._v('Show the import task of the specified db, specify label as "load_example_db_20140102" and sort it in descending order by LoadStartTime\nSHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;')])]),e._v(" "),a("li",[a("p",[e._v('Show the import task of the specified db, specify label as "load_example_db_20140102" and state as "load", and sort it in descending order by LoadStartTime\nSHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;')])]),e._v(" "),a("li",[a("p",[e._v("Show the import task of the specified dB and sort it in descending order by LoadStartTime, and display 10 query results starting with offset 5\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;")])]),e._v(" "),a("li",[a("p",[e._v("Small batch import is a command to view the import status\ncurl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}")])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("SHOW,LOAD")])])}),[],!1,null,null,null);t.default=s.exports}}]);