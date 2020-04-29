(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{424:function(e,t,a){"use strict";a.r(t);var o=a(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"monitoring-and-alarming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-and-alarming"}},[e._v("#")]),e._v(" Monitoring and alarming")]),e._v(" "),a("p",[e._v("This document mainly introduces Doris's monitoring items and how to collect and display them. And how to configure alarm (TODO)")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://grafana.com/dashboards/9734/revisions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashborad template click download"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Before 0.9.0 (excluding), please use revision 1. For version 0.9.x, use revision 2. For version 0.10.x, use revision 3.")])]),e._v(" "),a("p",[e._v("Dashboard templates are updated from time to time. The way to update the template is shown in the last section.")]),e._v(" "),a("p",[e._v("Welcome to provide better dashboard.")]),e._v(" "),a("h2",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),a("p",[e._v("Doris uses [Prometheus] (https://prometheus.io/) and [Grafana] (https://grafana.com/) to collect and display input monitoring items.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/dashboard_overview.png"),alt:""}}),e._v(" "),a("ol",[a("li",[a("p",[e._v("Prometheus")]),e._v(" "),a("p",[e._v("Prometheus is an open source system monitoring and alarm suite. It can collect monitored items by Pull or Push and store them in its own time series database. And through the rich multi-dimensional data query language, to meet the different data display needs of users.")])]),e._v(" "),a("li",[a("p",[e._v("Grafana")]),e._v(" "),a("p",[e._v("Grafana is an open source data analysis and display platform. Support multiple mainstream temporal database sources including Prometheus. Through the corresponding database query statements, the display data is obtained from the data source. With flexible and configurable dashboard, these data can be quickly presented to users in the form of graphs.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: This document only provides a way to collect and display Doris monitoring data using Prometheus and Grafana. In principle, these components are not developed or maintained. For more details on these components, please step through the corresponding official documents.")])]),e._v(" "),a("h2",{attrs:{id:"monitoring-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-data"}},[e._v("#")]),e._v(" Monitoring data")]),e._v(" "),a("p",[e._v("Doris's monitoring data is exposed through the HTTP interface of Frontend and Backend. Monitoring data is presented in the form of key-value text. Each Key may also be distinguished by different Labels. When the user has built Doris, the monitoring data of the node can be accessed in the browser through the following interfaces:")]),e._v(" "),a("ul",[a("li",[e._v("Frontend: "),a("code",[e._v("fe_host:fe_http_port/metrics")])]),e._v(" "),a("li",[e._v("Backend: "),a("code",[e._v("be_host:be_web_server_port/metrics")])]),e._v(" "),a("li",[e._v("Broker: Not available for now")])]),e._v(" "),a("p",[e._v("Users will see the following monitoring item results (for example, FE partial monitoring items):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```\n# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 41661235200\njvm_heap_size_bytes{type="committed"} 19785285632\njvm_heap_size_bytes{type="used"} 10113221064\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 105295872\njvm_non_heap_size_bytes{type="used"} 103184784\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 6505306808\njvm_young_size_bytes{type="peak_used"} 10308026368\njvm_young_size_bytes{type="max"} 10308026368\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 3522435544\njvm_old_size_bytes{type="peak_used"} 6561017832\njvm_old_size_bytes{type="max"} 30064771072\n# HELP  jvm_direct_buffer_pool_size_bytes jvm direct buffer pool stat\n# TYPE  jvm_direct_buffer_pool_size_bytes gauge\njvm_direct_buffer_pool_size_bytes{type="count"} 91\njvm_direct_buffer_pool_size_bytes{type="used"} 226135222\njvm_direct_buffer_pool_size_bytes{type="capacity"} 226135221\n# HELP  jvm_young_gc jvm young gc stat\n# TYPE  jvm_young_gc gauge\njvm_young_gc{type="count"} 2186\njvm_young_gc{type="time"} 93650\n# HELP  jvm_old_gc jvm old gc stat\n# TYPE  jvm_old_gc gauge\njvm_old_gc{type="count"} 21\njvm_old_gc{type="time"} 58268\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 767\njvm_thread{type="peak_count"} 831\n...\n```\n')])])]),a("p",[e._v("This is a monitoring data presented in [Promethus Format] (https://prometheus.io/docs/practices/naming/). We take one of these monitoring items as an example to illustrate:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 41661235200\njvm_heap_size_bytes{type="committed"} 19785285632\njvm_heap_size_bytes{type="used"} 10113221064\n')])])]),a("ol",[a("li",[e._v('Behavior commentary line at the beginning of "#". HELP is the description of the monitored item; TYPE represents the data type of the monitored item, and Gauge is the scalar data in the example. There are also Counter, Histogram and other data types. Specifically, you can see [Prometheus Official Document] (https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram).')]),e._v(" "),a("li",[a("code",[e._v("jvm_heap_size_bytes")]),e._v(" is the name of the monitored item (Key); "),a("code",[e._v('type= "max"')]),e._v(" is a label named "),a("code",[e._v("type")]),e._v(", with a value of "),a("code",[e._v("max")]),e._v(". A monitoring item can have multiple Labels.")]),e._v(" "),a("li",[e._v("The final number, such as "),a("code",[e._v("41661235200")]),e._v(", is the monitored value.")])]),e._v(" "),a("h2",{attrs:{id:"monitoring-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-architecture"}},[e._v("#")]),e._v(" Monitoring Architecture")]),e._v(" "),a("p",[e._v("The entire monitoring architecture is shown in the following figure:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/monitor_arch.png"),alt:""}}),e._v(" "),a("ol",[a("li",[e._v("The yellow part is Prometheus related components. Prometheus Server is the main process of Prometheus. At present, Prometheus accesses the monitoring interface of Doris node by Pull, and then stores the time series data in the time series database TSDB (TSDB is included in the Prometheus process, and need not be deployed separately). Prometheus also supports building [Push Gateway] (https://github.com/prometheus/pushgateway) to allow monitored data to be pushed to Push Gateway by Push by monitoring system, and then data from Push Gateway by Prometheus Server through Pull.")]),e._v(" "),a("li",[e._v("[Alert Manager] (https://github.com/prometheus/alertmanager) is a Prometheus alarm component, which needs to be deployed separately (no solution is provided yet, but can be built by referring to official documents). Through Alert Manager, users can configure alarm strategy, receive mail, short messages and other alarms.")]),e._v(" "),a("li",[e._v("The green part is Grafana related components. Grafana Server is the main process of Grafana. After startup, users can configure Grafana through Web pages, including data source settings, user settings, Dashboard drawing, etc. This is also where end users view monitoring data.")])]),e._v(" "),a("h2",{attrs:{id:"start-building"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-building"}},[e._v("#")]),e._v(" Start building")]),e._v(" "),a("p",[e._v("Please start building the monitoring system after you have completed the deployment of Doris.")]),e._v(" "),a("p",[e._v("Prometheus")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the latest version of Proetheus on the [Prometheus Website] (https://prometheus.io/download/). Here we take version 2.3.2-linux-amd64 as an example.")])]),e._v(" "),a("li",[a("p",[e._v("Unzip the downloaded tar file on the machine that is ready to run the monitoring service.")])]),e._v(" "),a("li",[a("p",[e._v("Open the configuration file promethues.yml. Here we provide an example configuration and explain it (the configuration file is in YML format, pay attention to uniform indentation and spaces):")]),e._v(" "),a("p",[e._v("Here we use the simplest way of static files to monitor configuration. Prometheus supports a variety of [service discovery] (https://prometheus.io/docs/prometheus/latest/configuration/configuration/), which can dynamically sense the addition and deletion of nodes.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# my global config\nglobal:\n  scrape_interval:     15s # Global acquisition interval, default 1 m, set to 15s\n  evaluation_interval: 15s # Global rule trigger interval, default 1 m, set 15s here\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'PALO_CLUSTER' # Each Doris cluster, we call it a job. Job can be given a name here as the name of Doris cluster in the monitoring system.\n    metrics_path: '/metrics' # Here you specify the restful API to get the monitors. With host: port in the following targets, Prometheus will eventually collect monitoring items through host: port/metrics_path.\n    static_configs: # Here we begin to configure the target addresses of FE and BE, respectively. All FE and BE are written into their respective groups.\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # Here configure the group of fe, which contains three Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # Here configure the group of be, which contains three Backends\n\n  - job_name: 'PALO_CLUSTER_2' # We can monitor multiple Doris clusters in a Prometheus, where we begin the configuration of another Doris cluster. Configuration is the same as above, the following is outlined.\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n")])])])]),e._v(" "),a("li",[a("p",[e._v("start Promethues")]),e._v(" "),a("p",[e._v("Start Promethues with the following command:")]),e._v(" "),a("p",[a("code",[e._v('nohup ./prometheus --web.listen-address="0.0.0.0:8181" &')])]),e._v(" "),a("p",[e._v("This command will run Prometheus in the background and specify its Web port as 8181. After startup, data is collected and stored in the data directory.")])]),e._v(" "),a("li",[a("p",[e._v("stop Promethues")]),e._v(" "),a("p",[e._v("At present, there is no formal way to stop the process, kill - 9 directly. Of course, Prometheus can also be set as a service to start and stop in a service way.")])]),e._v(" "),a("li",[a("p",[e._v("access Prometheus")]),e._v(" "),a("p",[e._v("Prometheus can be easily accessed through web pages. The page of Prometheus can be accessed by opening port 8181 through browser. Click on the navigation bar, "),a("code",[e._v("Status")]),e._v(" -> "),a("code",[e._v("Targets")]),e._v(", and you can see all the monitoring host nodes of the grouped Jobs. Normally, all nodes should be "),a("code",[e._v("UP")]),e._v(", indicating that data acquisition is normal. Click on an "),a("code",[e._v("Endpoint")]),e._v(" to see the current monitoring value. If the node state is not UP, you can first access Doris's metrics interface (see previous article) to check whether it is accessible, or query Prometheus related documents to try to resolve.")])]),e._v(" "),a("li",[a("p",[e._v("So far, a simple Prometheus has been built and configured. For more advanced usage, see [Official Documents] (https://prometheus.io/docs/introduction/overview/)")])])]),e._v(" "),a("h3",{attrs:{id:"grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[e._v("#")]),e._v(" Grafana")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the latest version of Grafana on [Grafana's official website] (https://grafana.com/grafana/download). Here we take version 5.2.1.linux-amd64 as an example.")])]),e._v(" "),a("li",[a("p",[e._v("Unzip the downloaded tar file on the machine that is ready to run the monitoring service.")])]),e._v(" "),a("li",[a("p",[e._v("Open the configuration file conf/defaults.ini. Here we only list the configuration items that need to be changed, and the other configurations can be used by default.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocal = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n")])])])]),e._v(" "),a("li",[a("p",[e._v("start Grafana")]),e._v(" "),a("p",[e._v("Start Grafana with the following command")]),e._v(" "),a("p",[a("code",[e._v("nohuo ./bin/grafana-server &")])]),e._v(" "),a("p",[e._v("This command runs Grafana in the background, and the access port is 8182 configured above.")])]),e._v(" "),a("li",[a("p",[e._v("stop Grafana")]),e._v(" "),a("p",[e._v("At present, there is no formal way to stop the process, kill - 9 directly. Of course, you can also set Grafana as a service to start and stop as a service.")])]),e._v(" "),a("li",[a("p",[e._v("access Grafana")]),e._v(" "),a("p",[e._v("Through the browser, open port 8182, you can start accessing the Grafana page. The default username password is admin.")])]),e._v(" "),a("li",[a("p",[e._v("Configure Grafana")]),e._v(" "),a("p",[e._v("For the first landing, you need to set up the data source according to the prompt. Our data source here is Proetheus, which was configured in the previous step.")]),e._v(" "),a("p",[e._v("The Setting page of the data source configuration is described as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Name: Name of the data source, customized, such as doris_monitor_data_source")]),e._v(" "),a("li",[e._v("Type: Select Prometheus")]),e._v(" "),a("li",[e._v("URL: Fill in the web address of Prometheus, such as http://host:8181")]),e._v(" "),a("li",[e._v("Access: Here we choose the Server mode, which is to access Prometheus through the server where the Grafana process is located.")]),e._v(" "),a("li",[e._v("The other options are available by default.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Save & Test")]),e._v(" at the bottom. If "),a("code",[e._v("Data source is working")]),e._v(", it means that the data source is available.")]),e._v(" "),a("li",[e._v("After confirming that the data source is available, click on the + number in the left navigation bar and start adding Dashboard. Here we have prepared Doris's dashboard template (at the beginning of this document). When the download is complete, click "),a("code",[e._v("New dashboard")]),e._v(" -> "),a("code",[e._v("Import dashboard")]),e._v(" -> "),a("code",[e._v("Upload.json File")]),e._v(" above to import the downloaded JSON file.")]),e._v(" "),a("li",[e._v("After importing, you can name Dashboard by default "),a("code",[e._v("Doris Overview")]),e._v(". At the same time, you need to select the data source, where you select the "),a("code",[e._v("doris_monitor_data_source")]),e._v(" you created earlier.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Import")]),e._v(" to complete the import. Later, you can see Doris's dashboard display.")])])]),e._v(" "),a("li",[a("p",[e._v("So far, a simple Grafana has been built and configured. For more advanced usage, see [Official Documents] (http://docs.grafana.org/)")])])]),e._v(" "),a("h2",{attrs:{id:"dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),a("p",[e._v("Here we briefly introduce Doris Dashboard. The content of Dashboard may change with the upgrade of version. This document is not guaranteed to be the latest Dashboard description.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Top Bar")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/dashboard_navibar.png"),alt:""}}),e._v(" "),a("ul",[a("li",[e._v("The upper left corner is the name of Dashboard.")]),e._v(" "),a("li",[e._v("The upper right corner shows the current monitoring time range. You can choose different time ranges by dropping down. You can also specify a regular refresh page interval.")]),e._v(" "),a("li",[e._v("Cluster name: Each job name in the Prometheus configuration file represents a Doris cluster. Select a different cluster, and the chart below shows the monitoring information for the corresponding cluster.")]),e._v(" "),a("li",[e._v("fe_master: The Master Frontend node corresponding to the cluster.")]),e._v(" "),a("li",[e._v("fe_instance: All Frontend nodes corresponding to the cluster. Select a different Frontend, and the chart below shows the monitoring information for the Frontend.")]),e._v(" "),a("li",[e._v("be_instance: All Backend nodes corresponding to the cluster. Select a different Backend, and the chart below shows the monitoring information for the Backend.")]),e._v(" "),a("li",[e._v("Interval: Some charts show rate-related monitoring items, where you can choose how much interval to sample and calculate the rate (Note: 15s interval may cause some charts to be unable to display).")])])]),e._v(" "),a("li",[a("p",[e._v("Row.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/dashboard_row.png"),alt:""}}),e._v(" "),a("p",[e._v("In Grafana, the concept of Row is a set of graphs. As shown in the figure above, Overview and Cluster Overview are two different Rows. Row can be folded by clicking Row. Currently Dashboard has the following Rows (in continuous updates):")]),e._v(" "),a("ol",[a("li",[e._v("Overview: A summary display of all Doris clusters.")]),e._v(" "),a("li",[e._v("Cluster Overview: A summary display of selected clusters.")]),e._v(" "),a("li",[e._v("Query Statistic: Query-related monitoring of selected clusters.")]),e._v(" "),a("li",[e._v("FE JVM: Select Frontend's JVM monitoring.")]),e._v(" "),a("li",[e._v("BE: A summary display of the backends of the selected cluster.")]),e._v(" "),a("li",[e._v("BE Task: Display of Backends Task Information for Selected Clusters.")])])]),e._v(" "),a("li",[a("p",[e._v("Charts")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/dashboard_panel.png"),alt:""}}),e._v(" "),a("p",[e._v("A typical icon is divided into the following parts:")]),e._v(" "),a("ol",[a("li",[e._v("Hover the I icon in the upper left corner of the mouse to see the description of the chart.")]),e._v(" "),a("li",[e._v("Click on the illustration below to view a monitoring item separately. Click again to display all.")]),e._v(" "),a("li",[e._v("Dragging in the chart can select the time range.")]),e._v(" "),a("li",[e._v("The selected cluster name is displayed in [] of the title.")]),e._v(" "),a("li",[e._v("Some values correspond to the Y-axis on the left and some to the right, which can be distinguished by the "),a("code",[e._v("-right")]),e._v(" at the end of the legend.")]),e._v(" "),a("li",[e._v("Click on the name of the chart -> "),a("code",[e._v("Edit")]),e._v(" to edit the chart.")])])])]),e._v(" "),a("h2",{attrs:{id:"dashboard-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-update"}},[e._v("#")]),e._v(" Dashboard Update")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("code",[e._v("+")]),e._v(" in the left column of Grafana and "),a("code",[e._v("Dashboard")]),e._v(".")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("New dashboard")]),e._v(" in the upper left corner, and "),a("code",[e._v("Import dashboard")]),e._v(" appears on the right.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Upload .json File")]),e._v(" to select the latest template file.")]),e._v(" "),a("li",[e._v("Selecting Data Sources")]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Import (Overwrite)")]),e._v(" to complete the template update.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);