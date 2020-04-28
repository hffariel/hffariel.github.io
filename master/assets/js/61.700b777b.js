(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{503:function(e,t,o){"use strict";o.r(t);var r=o(33),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installation-and-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-deployment"}},[e._v("#")]),e._v(" Installation and deployment")]),e._v(" "),o("p",[e._v("This document mainly introduces the hardware and software environment needed to deploy Doris, the proposed deployment mode, cluster expansion and scaling, and common problems in the process of cluster building and running.\nBefore reading this document, compile Doris according to the compiled document.")]),e._v(" "),o("h2",{attrs:{id:"software-and-hardware-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-and-hardware-requirements"}},[e._v("#")]),e._v(" Software and hardware requirements")]),e._v(" "),o("h3",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Doris, as an open source MPP architecture OLAP database, can run on most mainstream commercial servers. In order to make full use of the concurrency advantages of MPP architecture and the high availability features of Doris, we recommend that the deployment of Doris follow the following requirements:")]),e._v(" "),o("h4",{attrs:{id:"linux-operating-system-version-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-operating-system-version-requirements"}},[e._v("#")]),e._v(" Linux Operating System Version Requirements")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Linux System")]),e._v(" "),o("th",[e._v("Version")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Centers")]),e._v(" "),o("td",[e._v("7.1 and above")])]),e._v(" "),o("tr",[o("td",[e._v("Ubuntu")]),e._v(" "),o("td",[e._v("16.04 and above")])])])]),e._v(" "),o("h4",{attrs:{id:"software-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software requirements")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Soft")]),e._v(" "),o("th",[e._v("Version")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Java")]),e._v(" "),o("td",[e._v("1.8 and above")])]),e._v(" "),o("tr",[o("td",[e._v("GCC")]),e._v(" "),o("td",[e._v("4.8.2 and above")])])])]),e._v(" "),o("h4",{attrs:{id:"development-test-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-test-environment"}},[e._v("#")]),e._v(" Development Test Environment")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Module")]),e._v(" "),o("th",[e._v("CPU")]),e._v(" "),o("th",[e._v("Memory")]),e._v(" "),o("th",[e._v("Disk")]),e._v(" "),o("th",[e._v("Network")]),e._v(" "),o("th",[e._v("Instance Number")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Frontend")]),e._v(" "),o("td",[e._v("8 core +")]),e._v(" "),o("td",[e._v("8GB +")]),e._v(" "),o("td",[e._v("SSD or SATA, 10GB + *")]),e._v(" "),o("td",[e._v("Gigabit Network Card")]),e._v(" "),o("td",[e._v("1")])]),e._v(" "),o("tr",[o("td",[e._v("Backend")]),e._v(" "),o("td",[e._v("8-core +")]),e._v(" "),o("td",[e._v("16GB +")]),e._v(" "),o("td",[e._v("SSD or SATA, 50GB + *")]),e._v(" "),o("td",[e._v("Gigabit Network Card")]),e._v(" "),o("td",[e._v("1-3*")])])])]),e._v(" "),o("h4",{attrs:{id:"production-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#production-environment"}},[e._v("#")]),e._v(" Production environment")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Module")]),e._v(" "),o("th",[e._v("CPU")]),e._v(" "),o("th",[e._v("Memory")]),e._v(" "),o("th",[e._v("Disk")]),e._v(" "),o("th",[e._v("Network")]),e._v(" "),o("th",[e._v("Number of Instances (Minimum Requirements)")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Frontend")]),e._v(" "),o("td",[e._v("16 core +")]),e._v(" "),o("td",[e._v("64GB +")]),e._v(" "),o("td",[e._v("SSD or RAID card, 100GB + *")]),e._v(" "),o("td",[e._v("10,000 Mbp network card")]),e._v(" "),o("td",[e._v("1-5*")])]),e._v(" "),o("tr",[o("td",[e._v("Backend")]),e._v(" "),o("td",[e._v("16 core +")]),e._v(" "),o("td",[e._v("64GB +")]),e._v(" "),o("td",[e._v("SSD or SATA, 100G + *")]),e._v(" "),o("td",[e._v("10-100 Mbp network card*")]),e._v(" "),o("td")])])]),e._v(" "),o("blockquote",[o("p",[e._v("Note 1:")]),e._v(" "),o("ol",[o("li",[e._v("The disk space of FE is mainly used to store metadata, including logs and images. Usually it ranges from several hundred MB to several GB.")]),e._v(" "),o("li",[e._v("BE's disk space is mainly used to store user data. The total disk space is calculated according to the user's total data * 3 (3 copies). Then an additional 40% of the space is reserved for background compaction and some intermediate data storage.")]),e._v(" "),o("li",[e._v("Multiple BE instances can be deployed on a single machine, but "),o("strong",[e._v("can only deploy one FE")]),e._v(". If you need three copies of data, you need at least one BE instance per machine (instead of three BE instances per machine). "),o("strong",[e._v("Clocks of multiple FE servers must be consistent (allowing a maximum of 5 seconds clock deviation)")])]),e._v(" "),o("li",[e._v("The test environment can also be tested with only one BE. In the actual production environment, the number of BE instances directly determines the overall query latency.")]),e._v(" "),o("li",[e._v("All deployment nodes close Swap.")])])]),e._v(" "),o("blockquote",[o("p",[e._v("Note 2: Number of FE nodes")]),e._v(" "),o("ol",[o("li",[e._v("FE roles are divided into Follower and Observer. (Leader is an elected role in the Follower group, hereinafter referred to as Follower, for the specific meaning, see [Metadata Design Document] (./internal/metadata-design).)")]),e._v(" "),o("li",[e._v("FE node data is at least 1 (1 Follower). When one Follower and one Observer are deployed, high read availability can be achieved. When three Followers are deployed, read-write high availability (HA) can be achieved.")]),e._v(" "),o("li",[e._v("The number of Followers "),o("strong",[e._v("must be")]),e._v(" odd, and the number of Observers is arbitrary.")]),e._v(" "),o("li",[e._v("According to past experience, when cluster availability requirements are high (e.g. providing online services), three Followers and one to three Observers can be deployed. For offline business, it is recommended to deploy 1 Follower and 1-3 Observers.")])])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Usually we recommend about 10 to 100 machines to give full play to Doris's performance (3 of them deploy FE (HA) and the rest deploy BE)")])]),e._v(" "),o("li",[o("strong",[e._v("Of course, Doris performance is positively correlated with the number and configuration of nodes. With a minimum of four machines (one FE, three BEs, one BE mixed with one Observer FE to provide metadata backup) and a lower configuration, Doris can still run smoothly.")])]),e._v(" "),o("li",[o("strong",[e._v("If FE and BE are mixed, we should pay attention to resource competition and ensure that metadata catalogue and data catalogue belong to different disks.")])])]),e._v(" "),o("h4",{attrs:{id:"broker-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broker-deployment"}},[e._v("#")]),e._v(" Broker deployment")]),e._v(" "),o("p",[e._v("Broker is a process for accessing external data sources, such as hdfs. Usually, a broker instance is deployed on each machine.")]),e._v(" "),o("h4",{attrs:{id:"network-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-requirements"}},[e._v("#")]),e._v(" Network Requirements")]),e._v(" "),o("p",[e._v("Doris instances communicate directly over the network. The following table shows all required ports")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Instance Name")]),e._v(" "),o("th",[e._v("Port Name")]),e._v(" "),o("th",[e._v("Default Port")]),e._v(" "),o("th",[e._v("Communication Direction")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("BE")]),e._v(" "),o("td",[e._v("be_port")]),e._v(" "),o("td",[e._v("9060")]),e._v(" "),o("td",[e._v("FE - > BE")]),e._v(" "),o("td",[e._v("BE for receiving requests from FE")])]),e._v(" "),o("tr",[o("td",[e._v("BE")]),e._v(" "),o("td",[e._v("webserver_port")]),e._v(" "),o("td",[e._v("8040")]),e._v(" "),o("td",[e._v("BE <--\x3e BE")]),e._v(" "),o("td",[e._v("BE")])]),e._v(" "),o("tr",[o("td",[e._v("BE")]),e._v(" "),o("td",[e._v("heartbeat_service_port")]),e._v(" "),o("td",[e._v("9050")]),e._v(" "),o("td",[e._v("FE - > BE")]),e._v(" "),o("td",[e._v("the heart beat service port (thrift) on BE, used to receive heartbeat from FE")])]),e._v(" "),o("tr",[o("td",[e._v("BE")]),e._v(" "),o("td",[e._v("brpc_port*")]),e._v(" "),o("td",[e._v("8060")]),e._v(" "),o("td",[e._v("FE < - > BE, BE < - > BE")]),e._v(" "),o("td",[e._v("BE for communication between BEs")])]),e._v(" "),o("tr",[o("td",[e._v("FE")]),e._v(" "),o("td",[e._v("http_port*")]),e._v(" "),o("td",[e._v("8030")]),e._v(" "),o("td",[e._v("FE < - > FE, HTTP server port on user")]),e._v(" "),o("td",[e._v("FE")])]),e._v(" "),o("tr",[o("td",[e._v("FE")]),e._v(" "),o("td",[e._v("rpc_port")]),e._v(" "),o("td",[e._v("9020")]),e._v(" "),o("td",[e._v("BE - > FE, FE < - > FE")]),e._v(" "),o("td",[e._v("thrift server port on FE")])]),e._v(" "),o("tr",[o("td",[e._v("FE")]),e._v(" "),o("td",[e._v("query_port")]),e._v(" "),o("td",[e._v("9030")]),e._v(" "),o("td",[e._v("user")]),e._v(" "),o("td",[e._v("FE")])]),e._v(" "),o("tr",[o("td",[e._v("FE")]),e._v(" "),o("td",[e._v("edit_log_port")]),e._v(" "),o("td",[e._v("9010")]),e._v(" "),o("td",[e._v("FE <--\x3e FE")]),e._v(" "),o("td",[e._v("FE")])]),e._v(" "),o("tr",[o("td",[e._v("Broker")]),e._v(" "),o("td",[e._v("broker ipc_port")]),e._v(" "),o("td",[e._v("8000")]),e._v(" "),o("td",[e._v("FE - > Broker, BE - > Broker")]),e._v(" "),o("td",[e._v("Broker for receiving requests")])])])]),e._v(" "),o("blockquote",[o("p",[e._v("Note:")]),e._v(" "),o("ol",[o("li",[e._v("When deploying multiple FE instances, make sure that the http port configuration of FE is the same.")]),e._v(" "),o("li",[e._v("Make sure that each port has access in its proper direction before deployment.")])])]),e._v(" "),o("h4",{attrs:{id:"ip-binding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ip-binding"}},[e._v("#")]),e._v(" IP binding")]),e._v(" "),o("p",[e._v("Because of the existence of multiple network cards, or the existence of virtual network cards caused by the installation of docker and other environments, the same host may have multiple different ips. Currently Doris does not automatically identify available IP. So when you encounter multiple IP on the deployment host, you must force the correct IP to be specified through the priority_networks configuration item.")]),e._v(" "),o("p",[e._v("Priority_networks is a configuration that both FE and BE have, and the configuration items need to be written in fe.conf and be.conf. This configuration item is used to tell the process which IP should be bound when FE or BE starts. Examples are as follows:")]),e._v(" "),o("p",[o("code",[e._v("priority_networks=10.1.3.0/24")])]),e._v(" "),o("p",[e._v("This is a representation of [CIDR] (https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). FE or BE will find the matching IP based on this configuration item as their own local IP.")]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": When priority networks is configured and FE or BE is started, only the correct IP binding of FE or BE is ensured. In ADD BACKEND or ADD FRONTEND statements, you also need to specify IP matching priority networks configuration, otherwise the cluster cannot be established. Give an example:")]),e._v(" "),o("p",[e._v("BE is configured as "),o("code",[e._v("priority_networks = 10.1.3.0/24'.")]),e._v(".")]),e._v(" "),o("p",[e._v("When you want to ADD BACKEND use ："),o("code",[e._v('ALTER SYSTEM ADD BACKEND "192.168.0.1:9050";')])]),e._v(" "),o("p",[e._v("Then FE and BE will not be able to communicate properly.")]),e._v(" "),o("p",[e._v("At this point, DROP must remove the BE that added errors and re-use the correct IP to perform ADD BACKEND.")]),e._v(" "),o("p",[e._v("FE is the same.")]),e._v(" "),o("p",[e._v("BROKER does not currently have, nor does it need, priority\\ networks. Broker's services are bound to 0.0.0 by default. Simply execute the correct accessible BROKER IP when ADD BROKER is used.")]),e._v(" "),o("h2",{attrs:{id:"cluster-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cluster-deployment"}},[e._v("#")]),e._v(" Cluster deployment")]),e._v(" "),o("h3",{attrs:{id:"manual-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-deployment"}},[e._v("#")]),e._v(" Manual deployment")]),e._v(" "),o("h4",{attrs:{id:"deploy-fe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-fe"}},[e._v("#")]),e._v(" Deploy FE")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Copy the FE deployment file to the specified node")]),e._v(" "),o("p",[e._v("Copy the Fe folder under output generated by source code compilation to the node specified deployment path of FE.")])]),e._v(" "),o("li",[o("p",[e._v("Configure FE")]),e._v(" "),o("ol",[o("li",[e._v("The configuration file is conf/fe.conf. Note: "),o("code",[e._v("meta_dir")]),e._v(": Metadata storage location. The default is fe/doris-meta/. The directory needs to be "),o("strong",[e._v("created manually")]),e._v(" by.")]),e._v(" "),o("li",[e._v("JAVA_OPTS in fe.conf defaults to a maximum heap memory of 4GB for java, and it is recommended that the production environment be adjusted to more than 8G.")])])]),e._v(" "),o("li",[o("p",[e._v("Start FE")]),e._v(" "),o("p",[o("code",[e._v("sh bin/start_fe.sh --daemon")])]),e._v(" "),o("p",[e._v("The FE process starts and enters the background execution. Logs are stored in the fe/log/directory by default. If startup fails, you can view error messages by looking at fe/log/fe.log or fe/log/fe.out.")])]),e._v(" "),o("li",[o("p",[e._v('For deployment of multiple FEs, see the section "FE scaling and downsizing"')])])]),e._v(" "),o("h4",{attrs:{id:"deploy-be"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-be"}},[e._v("#")]),e._v(" Deploy BE")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Copy BE deployment files to all nodes to deploy BE")]),e._v(" "),o("p",[e._v("Copy the be folder under output generated by source code compilation to the specified deployment path of the BE node.")])]),e._v(" "),o("li",[o("p",[e._v("Modify all BE configurations")]),e._v(" "),o("p",[e._v("Modify be/conf/be.conf. Mainly configure "),o("code",[e._v("storage_root_path")]),e._v(": data storage directory. The default is be/storage, this directory needs to be "),o("strong",[e._v("created manually")]),e._v(" by. In multi directories case, using "),o("code",[e._v(";")]),e._v(" separation (do not add "),o("code",[e._v(";")]),e._v(" after the last directory).")])]),e._v(" "),o("li",[o("p",[e._v("Add all BE nodes to FE")]),e._v(" "),o("p",[e._v("BE nodes need to be added in FE before they can join the cluster. You can use mysql-client to connect to FE:")]),e._v(" "),o("p",[o("code",[e._v("./mysql-client -h host -P port -uroot")])]),e._v(" "),o("p",[e._v("The host is the node IP where FE is located; the port is the query_port in fe/conf/fe.conf; the root account is used by default and no password is used to login.")]),e._v(" "),o("p",[e._v("After login, execute the following commands to add each BE:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD BACKEND "host:port";')])]),e._v(" "),o("p",[e._v("If the multi-tenant function is used, the following command is executed to add BE:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD FREE BACKEND "host:port";')])]),e._v(" "),o("p",[e._v("The host is the node IP where BE is located; the port is heartbeat_service_port in be/conf/be.conf.")]),e._v(" "),o("p",[e._v("If the FREE keyword is not added, BE defaults to the automatically generated cluster, and the new BE does not belong to any cluster after adding the FREE keyword, so that when creating a new cluster, it can be selected from these free be, as detailed in [Multi-tenant Design Document] (./administrator-guide/operation/multi-tenant.md)")])]),e._v(" "),o("li",[o("p",[e._v("Start BE")]),e._v(" "),o("p",[o("code",[e._v("sh bin/start_be.sh --daemon")])]),e._v(" "),o("p",[e._v("The BE process will start and go into the background for execution. Logs are stored in be/log/directory by default. If startup fails, you can view error messages by looking at be/log/be.log or be/log/be.out.")])]),e._v(" "),o("li",[o("p",[e._v("View BE status")]),e._v(" "),o("p",[e._v("Connect to FE using mysql-client and execute "),o("code",[e._v("SHOW PROC'/ backends';")]),e._v("View BE operation. If everything is normal, the "),o("code",[e._v("isAlive")]),e._v("column should be "),o("code",[e._v("true")]),e._v(".")])])]),e._v(" "),o("h4",{attrs:{id:"optional-fs-broker-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-fs-broker-deployment"}},[e._v("#")]),e._v(" (Optional) FS_Broker deployment")]),e._v(" "),o("p",[e._v("Broker is deployed as a plug-in, independent of Doris. If you need to import data from a third-party storage system, you need to deploy the corresponding Broker. By default, it provides fs_broker to read HDFS and Baidu cloud BOS. Fs_broker is stateless and it is recommended that each FE and BE node deploy a Broker.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Copy the corresponding Broker directory in the output directory of the source fs_broker to all the nodes that need to be deployed. It is recommended to maintain the same level as the BE or FE directories.")])]),e._v(" "),o("li",[o("p",[e._v("Modify the corresponding Broker configuration")]),e._v(" "),o("p",[e._v("In the corresponding broker/conf/directory configuration file, you can modify the corresponding configuration.")])]),e._v(" "),o("li",[o("p",[e._v("Start Broker")]),e._v(" "),o("p",[o("code",[e._v("sh bin /start'u broker.sh --daemon")]),e._v(" start Broker")])]),e._v(" "),o("li",[o("p",[e._v("Add Broker")]),e._v(" "),o("p",[e._v("To let Doris FE and BE know which nodes Broker is on, add a list of Broker nodes by SQL command.")]),e._v(" "),o("p",[e._v("Use mysql-client to connect the FE started, and execute the following commands:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD BROKER broker_name "host1:port1","host2:port2",...;')])]),e._v(" "),o("p",[e._v("The host is Broker's node ip; the port is brokeripcport in the Broker configuration file.")])]),e._v(" "),o("li",[o("p",[e._v("View Broker status")]),e._v(" "),o("p",[e._v("Connect any booted FE using mysql-client and execute the following command to view Broker status: "),o("code",[e._v("SHOW PROC '/brokers';")])])])]),e._v(" "),o("p",[o("strong",[e._v("Note: In production environments, daemons should be used to start all instances to ensure that processes are automatically pulled up after they exit, such as [Supervisor] (http://supervisord.org/). For daemon startup, in 0.9.0 and previous versions, you need to modify the start_xx.sh scripts to remove the last & symbol")]),e._v(". Starting with version 0.10.0, call "),o("code",[e._v("sh start_xx.sh")]),e._v(" directly to start. Also refer to [here] (https://www.cnblogs.com/lenmom/p/9973401.html)")]),e._v(" "),o("h2",{attrs:{id:"expansion-and-contraction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expansion-and-contraction"}},[e._v("#")]),e._v(" Expansion and contraction")]),e._v(" "),o("p",[e._v("Doris can easily expand and shrink FE, BE, Broker instances.")]),e._v(" "),o("h3",{attrs:{id:"fe-expansion-and-compression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fe-expansion-and-compression"}},[e._v("#")]),e._v(" FE Expansion and Compression")]),e._v(" "),o("p",[e._v("High availability of FE can be achieved by expanding FE to three top-one nodes.")]),e._v(" "),o("p",[e._v("Users can login to Master FE through MySQL client. By:")]),e._v(" "),o("p",[o("code",[e._v("SHOW PROC '/frontends';")])]),e._v(" "),o("p",[e._v("To view the current FE node situation.")]),e._v(" "),o("p",[e._v("You can also view the FE node through the front-end page connection: "),o("code",[e._v("http://fe_hostname: fe_http_port/frontend")]),e._v(" or "),o("code",[e._v("http://fe_hostname: fe_http_port/system? Path=//frontends")]),e._v(".")]),e._v(" "),o("p",[e._v("All of the above methods require Doris's root user rights.")]),e._v(" "),o("p",[e._v("The process of FE node expansion and contraction does not affect the current system operation.")]),e._v(" "),o("h4",{attrs:{id:"adding-fe-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-fe-nodes"}},[e._v("#")]),e._v(" Adding FE nodes")]),e._v(" "),o("p",[e._v("FE is divided into three roles: Leader, Follower and Observer. By default, a cluster can have only one Leader and multiple Followers and Observers. Leader and Follower form a Paxos selection group. If the Leader goes down, the remaining Followers will automatically select a new Leader to ensure high write availability. Observer synchronizes Leader data, but does not participate in the election. If only one FE is deployed, FE defaults to Leader.")]),e._v(" "),o("p",[e._v("The first FE to start automatically becomes Leader. On this basis, several Followers and Observers can be added.")]),e._v(" "),o("p",[e._v("Add Follower or Observer. Connect to the started FE using mysql-client and execute:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD FOLLOWER "host:port";')])]),e._v(" "),o("p",[e._v("or")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD OBSERVER "host:port";')])]),e._v(" "),o("p",[e._v("The host is the node IP of Follower or Observer, and the port is edit_log_port in its configuration file fe.conf.")]),e._v(" "),o("p",[e._v("Configure and start Follower or Observer. Follower and Observer are configured with Leader. The following commands need to be executed at the first startup:")]),e._v(" "),o("p",[o("code",[e._v("./bin/start_fe.sh --helper host:port --daemon")])]),e._v(" "),o("p",[e._v("The host is the node IP of Leader, and the port is edit_log_port in Lead's configuration file fe.conf. The --helper is only required when follower/observer is first startup.")]),e._v(" "),o("p",[e._v("View the status of Follower or Observer. Connect to any booted FE using mysql-client and execute: SHOW PROC'/frontends'; you can view the FE currently joined the cluster and its corresponding roles.")]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for FE expansion:")]),e._v(" "),o("ol",[o("li",[e._v("The number of Follower FEs (including Leaders) must be odd. It is recommended that a maximum of three constituent high availability (HA) modes be deployed.")]),e._v(" "),o("li",[e._v("When FE is in a highly available deployment (1 Leader, 2 Follower), we recommend that the reading service capability of FE be extended by adding Observer FE. Of course, you can continue to add Follower FE, but it's almost unnecessary.")]),e._v(" "),o("li",[e._v("Usually a FE node can handle 10-20 BE nodes. It is suggested that the total number of FE nodes should be less than 10. Usually three can meet most of the needs.")])])]),e._v(" "),o("h4",{attrs:{id:"delete-fe-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-fe-nodes"}},[e._v("#")]),e._v(" Delete FE nodes")]),e._v(" "),o("p",[e._v("Delete the corresponding FE node using the following command:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')])]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for FE contraction:")]),e._v(" "),o("ol",[o("li",[e._v("When deleting Follower FE, make sure that the remaining Follower (including Leader) nodes are odd.")])])]),e._v(" "),o("h3",{attrs:{id:"be-expansion-and-compression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#be-expansion-and-compression"}},[e._v("#")]),e._v(" BE Expansion and Compression")]),e._v(" "),o("p",[e._v("Users can login to Leader FE through mysql-client. By:")]),e._v(" "),o("p",[o("code",[e._v("SHOW PROC '/backends';")])]),e._v(" "),o("p",[e._v("To see the current BE node situation.")]),e._v(" "),o("p",[e._v("You can also view the BE node through the front-end page connection: "),o("code",[e._v("http://fe_hostname: fe_http_port/backend")]),e._v(" or "),o("code",[e._v("http://fe_hostname: fe_http_port/system? Path=//backends")]),e._v(".")]),e._v(" "),o("p",[e._v("All of the above methods require Doris's root user rights.")]),e._v(" "),o("p",[e._v("The expansion and scaling process of BE nodes does not affect the current system operation and the tasks being performed, and does not affect the performance of the current system. Data balancing is done automatically. Depending on the amount of data available in the cluster, the cluster will be restored to load balancing in a few hours to a day. For cluster load, see the [Tablet Load Balancing Document] (../administrator-guide/operation/tablet-repair-and-balance.md).")]),e._v(" "),o("h4",{attrs:{id:"add-be-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-be-nodes"}},[e._v("#")]),e._v(" Add BE nodes")]),e._v(" "),o("p",[e._v("The BE node is added in the same way as in the "),o("strong",[e._v("BE deployment")]),e._v(" section. The BE node is added by the "),o("code",[e._v("ALTER SYSTEM ADD BACKEND")]),e._v(" command.")]),e._v(" "),o("blockquote",[o("p",[e._v("Notes for BE expansion:")]),e._v(" "),o("ol",[o("li",[e._v("After BE expansion, Doris will automatically balance the data according to the load, without affecting the use during the period.")])])]),e._v(" "),o("h4",{attrs:{id:"delete-be-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-be-nodes"}},[e._v("#")]),e._v(" Delete BE nodes")]),e._v(" "),o("p",[e._v("There are two ways to delete BE nodes: DROP and DECOMMISSION")]),e._v(" "),o("p",[e._v("The DROP statement is as follows:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),o("p",[o("strong",[e._v("Note: DROP BACKEND will delete the BE directly and the data on it will not be recovered!!! So we strongly do not recommend DROP BACKEND to delete BE nodes. When you use this statement, there will be corresponding error-proof operation hints.")])]),e._v(" "),o("p",[e._v("DECOMMISSION clause：")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')])]),e._v(" "),o("blockquote",[o("p",[e._v("DECOMMISSION notes:")]),e._v(" "),o("ol",[o("li",[e._v("This command is used to safely delete BE nodes. After the command is issued, Doris attempts to migrate the data on the BE to other BE nodes, and when all data is migrated, Doris automatically deletes the node.")]),e._v(" "),o("li",[e._v("The command is an asynchronous operation. After execution, you can see that the BE node's isDecommission status is true through ``SHOW PROC '/backends';` Indicates that the node is offline.")]),e._v(" "),o("li",[e._v("The order "),o("strong",[e._v("does not necessarily carry out successfully")]),e._v(". For example, when the remaining BE storage space is insufficient to accommodate the data on the offline BE, or when the number of remaining machines does not meet the minimum number of replicas, the command cannot be completed, and the BE will always be in the state of isDecommission as true.")]),e._v(" "),o("li",[e._v("The progress of DECOMMISSION can be viewed through "),o("code",[e._v("SHOW PROC '/backends';")]),e._v(" Tablet Num, and if it is in progress, Tablet Num will continue to decrease.")]),e._v(" "),o("li",[e._v("The operation can be carried out by:\n"),o("code",[e._v('CANCEL ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')]),e._v("\nThe order was cancelled. When cancelled, the data on the BE will maintain the current amount of data remaining. Follow-up Doris re-load balancing")])])]),e._v(" "),o("p",[o("strong",[e._v("For expansion and scaling of BE nodes in multi-tenant deployment environments, please refer to the [Multi-tenant Design Document] (./administrator-guide/operation/multi-tenant.md).")])]),e._v(" "),o("h3",{attrs:{id:"broker-expansion-and-shrinkage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broker-expansion-and-shrinkage"}},[e._v("#")]),e._v(" Broker Expansion and Shrinkage")]),e._v(" "),o("p",[e._v("There is no rigid requirement for the number of Broker instances. Usually one physical machine is deployed. Broker addition and deletion can be accomplished by following commands:")]),e._v(" "),o("p",[o("code",[e._v('ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),o("code",[e._v('ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";')]),e._v(" "),o("code",[e._v("ALTER SYSTEM DROP ALL BROKER broker_name;")])]),e._v(" "),o("p",[e._v("Broker is a stateless process that can be started or stopped at will. Of course, when it stops, the job running on it will fail. Just try again.")]),e._v(" "),o("h2",{attrs:{id:"common-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),o("h3",{attrs:{id:"process-correlation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#process-correlation"}},[e._v("#")]),e._v(" Process correlation")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("How to determine the success of FE process startup")]),e._v(" "),o("p",[e._v("After the FE process starts, metadata is loaded first. According to the different roles of FE, you can see "),o("code",[e._v("transfer from UNKNOWN to MASTER/FOLLOWER/OBSERVER")]),e._v("in the log. Eventually, you will see the "),o("code",[e._v("thrift server started")]),e._v(" log and connect to FE through MySQL client, which indicates that FE started successfully.")]),e._v(" "),o("p",[e._v("You can also check whether the startup was successful by connecting as follows:")]),e._v(" "),o("p",[o("code",[e._v("http://fe_host:fe_http_port/api/bootstrap")])]),e._v(" "),o("p",[e._v("If returned:")]),e._v(" "),o("p",[o("code",[e._v('{"status":"OK","msg":"Success"}')])]),e._v(" "),o("p",[e._v("The startup is successful, there may be problems in other cases.")]),e._v(" "),o("blockquote",[o("p",[e._v("Note: If you can't see the information of boot failure in fe. log, you may see it in fe. out.")])])]),e._v(" "),o("li",[o("p",[e._v("How to determine the success of BE process startup")]),e._v(" "),o("p",[e._v("After the BE process starts, if there is data before, there may be several minutes of data index loading time.")]),e._v(" "),o("p",[e._v("If BE is started for the first time or the BE has not joined any cluster, the BE log will periodically scroll the words "),o("code",[e._v("waiting to receive first heartbeat from frontend")]),e._v(". BE has not received Master's address through FE's heartbeat and is waiting passively. This error log will disappear after ADD BACKEND in FE sends the heartbeat. If the word "),o("code",[e._v("master client', get client from cache failed. host:, port: 0, code: 7")]),e._v(" master client'appears again after receiving heartbeat, it indicates that FE has successfully connected BE, but BE cannot actively connect FE. It may be necessary to check the connectivity of rpc_port from BE to FE.")]),e._v(" "),o("p",[e._v("If BE has been added to the cluster, the heartbeat log from FE should be scrolled every five seconds: "),o("code",[e._v("get heartbeat, host:xx. xx.xx.xx, port:9020, cluster id:xxxxxxx")]),e._v(", indicating that the heartbeat is normal.")]),e._v(" "),o("p",[e._v("Secondly, the word "),o("code",[e._v("finish report task success. return code: 0")]),e._v(" should be scrolled every 10 seconds in the log to indicate that BE's communication to FE is normal.")]),e._v(" "),o("p",[e._v("At the same time, if there is a data query, you should see the rolling logs, and have "),o("code",[e._v("execute time is xxx")]),e._v(" logs, indicating that BE started successfully, and the query is normal.")]),e._v(" "),o("p",[e._v("You can also check whether the startup was successful by connecting as follows:")]),e._v(" "),o("p",[o("code",[e._v("http://be_host:be_http_port/api/health")])]),e._v(" "),o("p",[e._v("If returned:")]),e._v(" "),o("p",[o("code",[e._v('{"status": "OK","msg": "To Be Added"}')])]),e._v(" "),o("p",[e._v("If the startup is successful, there may be problems in other cases.")]),e._v(" "),o("blockquote",[o("p",[e._v("Note: If you can't see the information of boot failure in be.INFO, you may see it in be.out.")])])]),e._v(" "),o("li",[o("p",[e._v("How to determine the normal connectivity of FE and BE after building the system")]),e._v(" "),o("p",[e._v("Firstly, confirm that FE and BE processes have been started separately and normally, and confirm that all nodes have been added through "),o("code",[e._v("ADD BACKEND")]),e._v(" or "),o("code",[e._v("ADD FOLLOWER/OBSERVER")]),e._v(" statements.")]),e._v(" "),o("p",[e._v("If the heartbeat is normal, BE logs will show "),o("code",[e._v("get heartbeat, host:xx.xx.xx.xx, port:9020, cluster id:xxxxx")]),e._v(" If the heartbeat fails, the words "),o("code",[e._v("backend [10001] get Exception: org.apache.thrift.transport.TTransportException")]),e._v(" will appear in FE's log, or other thrift communication abnormal log, indicating that the heartbeat fails from FE to 10001 BE. Here you need to check the connectivity of FE to BE host's heart-beating port.")]),e._v(" "),o("p",[e._v("If BE's communication to FE is normal, the BE log will display the words "),o("code",[e._v("finish report task success. return code: 0")]),e._v(". Otherwise, the words "),o("code",[e._v("master client")]),e._v(", get client from cache failed` will appear. In this case, the connectivity of BE to the rpc_port of FE needs to be checked.")])]),e._v(" "),o("li",[o("p",[e._v("Doris Node Authentication Mechanism")]),e._v(" "),o("p",[e._v("In addition to Master FE, the other role nodes (Follower FE, Observer FE, Backend) need to register to the cluster through the "),o("code",[e._v("ALTER SYSTEM ADD")]),e._v(" statement before joining the cluster.")]),e._v(" "),o("p",[e._v("When Master FE is first started, a cluster_id is generated in the doris-meta/image/VERSION file.")]),e._v(" "),o("p",[e._v("When FE first joins the cluster, it first retrieves the file from Master FE. Each subsequent reconnection between FEs (FE reboot) checks whether its cluster ID is the same as that of other existing FEs. If different, the FE will exit automatically.")]),e._v(" "),o("p",[e._v("When BE first receives the heartbeat of Master FE, it gets the cluster ID from the heartbeat and records it in the "),o("code",[e._v("cluster_id")]),e._v(" file of the data directory. Each heartbeat after that compares to the cluster ID sent by FE. If cluster IDs are not equal, BE will refuse to respond to FE's heartbeat.")]),e._v(" "),o("p",[e._v("The heartbeat also contains Master FE's ip. When FE cuts the master, the new Master FE will carry its own IP to send the heartbeat to BE, BE will update its own saved Master FE ip.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("priority_network")])]),e._v(" "),o("p",[e._v("priority network is that both FE and BE have a configuration. Its main purpose is to assist FE or BE to identify their own IP addresses in the case of multi-network cards. Priority network is represented by CIDR: [RFC 4632] (https://tools.ietf.org/html/rfc4632)")]),e._v(" "),o("p",[e._v("When the connectivity of FE and BE is confirmed to be normal, if the table Timeout still occurs, and the FE log has an error message with the words "),o("code",[e._v("backend does not find. host:xxxx.xxx.XXXX")]),e._v(". This means that there is a problem with the IP address that Doris automatically identifies and that priority_network parameters need to be set manually.")]),e._v(" "),o("p",[e._v("The main reason for this problem is that when the user adds BE through the "),o("code",[e._v("ADD BACKEND")]),e._v(" statement, FE recognizes whether the statement specifies hostname or IP. If it is hostname, FE automatically converts it to an IP address and stores it in metadata. When BE reports on the completion of the task, it carries its own IP address. If FE finds that BE reports inconsistent IP addresses and metadata, it will make the above error.")]),e._v(" "),o("p",[e._v("Solutions to this error: 1) Set "),o("strong",[e._v("priority_network")]),e._v(" parameters in FE and BE respectively. Usually FE and BE are in a network segment, so this parameter can be set to the same. 2) Fill in the "),o("code",[e._v("ADD BACKEND")]),e._v(" statement directly with the correct IP address of BE instead of hostname to avoid FE getting the wrong IP address.")])])]),e._v(" "),o("li",[o("p",[e._v("File descriptor number of BE process")]),e._v(" "),o("p",[e._v("The number of file descriptor of BE process is controlled by the two parameters min_file_descriptor_number/max_file_descriptor_number.")]),e._v(" "),o("p",[e._v("If it is not in the [min_file_descriptor_number, max_file_descriptor_number] interval, error will occurs when starting BE process.")]),e._v(" "),o("p",[e._v("Please using ulimit command to set file descriptor under this circumstance.")]),e._v(" "),o("p",[e._v("The default value of min_file_descriptor_number is 65536.")]),e._v(" "),o("p",[e._v("The default value of max_file_descriptor_number is 131072.")]),e._v(" "),o("p",[e._v("For Example : ulimit -n 65536; this command set file descriptor to 65536.")]),e._v(" "),o("p",[e._v("After starting BE process, you can use "),o("strong",[e._v("cat /proc/$pid/limits")]),e._v(" to see the actual limit of process.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);