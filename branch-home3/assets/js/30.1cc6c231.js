(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{423:function(e,t,a){"use strict";a.r(t);var o=a(43),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"metadata-operations-and-maintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-operations-and-maintenance"}},[e._v("#")]),e._v(" Metadata Operations and Maintenance")]),e._v(" "),a("p",[e._v("This document focuses on how to manage Doris metadata in a real production environment. It includes the proposed deployment of FE nodes, some commonly used operational methods, and common error resolution methods.")]),e._v(" "),a("p",[e._v("For the time being, read the "),a("RouterLink",{attrs:{to:"/en/internal/metadata-design_EN.html"}},[e._v("Doris metadata design document")]),e._v(" to understand how Doris metadata works.")],1),e._v(" "),a("h2",{attrs:{id:"important-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-tips"}},[e._v("#")]),e._v(" Important tips")]),e._v(" "),a("ul",[a("li",[e._v("Current metadata design is not backward compatible. That is, if the new version has a new metadata structure change (you can see whether there is a new VERSION in the `FeMetaVersion. java'file in the FE code), it is usually impossible to roll back to the old version after upgrading to the new version. Therefore, before upgrading FE, be sure to test metadata compatibility according to the operations in the "),a("RouterLink",{attrs:{to:"/en/installing/upgrade_EN.html"}},[e._v("Upgrade Document")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"metadata-catalog-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-catalog-structure"}},[e._v("#")]),e._v(" Metadata catalog structure")]),e._v(" "),a("p",[e._v("Let's assume that the path of "),a("code",[e._v("meta_dir")]),e._v(" specified in fe.conf is "),a("code",[e._v("path/to/palo-meta")]),e._v(". In a normal Doris cluster, the directory structure of metadata should be as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/path/to/palo-meta/\n            |-- bdb/\n            |   |-- 00000000.jdb\n            |   |-- je.config.csv\n            |   |-- je.info.0\n            |   |-- je.info.0.lck\n            |   |-- je.lck\n            |   `-- je.stat.csv\n            `-- image/\n                |-- ROLE\n                |-- VERSION\n                `-- image.xxxx\n")])])]),a("ol",[a("li",[a("p",[e._v("bdb")]),e._v(" "),a("p",[e._v('We use [bdbje] (https://www.oracle.com/technetwork/database/berkeleydb/overview/index-093405.html) as a distributed kV system to store metadata journal. This BDB directory is equivalent to the "data directory" of bdbje.')]),e._v(" "),a("p",[e._v("The "),a("code",[e._v(".jdb")]),e._v(" suffix is the data file of bdbje. These data files will increase with the increasing number of metadata journals. When Doris regularly completes the image, the old log is deleted. So normally, the total size of these data files varies from several MB to several GB (depending on how Doris is used, such as import frequency). When the total size of the data file is larger than 10GB, you may need to wonder whether the image failed or the historical journals that failed to distribute the image could not be deleted.")]),e._v(" "),a("p",[a("code",[e._v("je.info.0")]),e._v(" is the running log of bdbje. The time in this log is UTC + 0 time zone. We may fix this in a later version. From this log, you can also see how some bdbje works.")])]),e._v(" "),a("li",[a("p",[e._v("image directory")]),e._v(" "),a("p",[e._v("The image directory is used to store metadata mirrors generated regularly by Doris. Usually, you will see a "),a("code",[e._v("image.xxxxx")]),e._v(" mirror file. Where "),a("code",[e._v("xxxxx")]),e._v(" is a number. This number indicates that the image contains all metadata journal before "),a("code",[e._v("xxxx")]),e._v(". And the generation time of this file (viewed through "),a("code",[e._v("ls -al")]),e._v(") is usually the generation time of the mirror.")]),e._v(" "),a("p",[e._v("You may also see a "),a("code",[e._v("image.ckpt")]),e._v(" file. This is a metadata mirror being generated. The "),a("code",[e._v("du -sh")]),e._v(" command should show that the file size is increasing, indicating that the mirror content is being written to the file. When the mirror is written, it automatically renames itself to a new "),a("code",[e._v("image.xxxxx")]),e._v(" and replaces the old image file.")]),e._v(" "),a("p",[e._v("Only FE with a Master role will actively generate image files on a regular basis. After each generation, FE is pushed to other non-Master roles. When it is confirmed that all other FEs have received this image, Master FE deletes the metadata journal in bdbje. Therefore, if image generation fails or image push fails to other FEs, data in bdbje will accumulate.")]),e._v(" "),a("p",[a("code",[e._v("ROLE")]),e._v(" file records the type of FE (FOLLOWER or OBSERVER), which is a text file.")]),e._v(" "),a("p",[a("code",[e._v("VERSION")]),e._v(" file records the cluster ID of the Doris cluster and the token used to access authentication between nodes, which is also a text file.")]),e._v(" "),a("p",[a("code",[e._v("ROLE")]),e._v(" file and "),a("code",[e._v("VERSION")]),e._v(" file may only exist at the same time, or they may not exist at the same time (e.g. at the first startup).")])])]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),a("h3",{attrs:{id:"start-single-node-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-single-node-fe"}},[e._v("#")]),e._v(" Start single node FE")]),e._v(" "),a("p",[e._v("Single node FE is the most basic deployment mode. A complete Doris cluster requires at least one FE node. When there is only one FE node, the type of the node is Follower and the role is Master.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First start-up")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Suppose the path of "),a("code",[e._v("meta_dir")]),e._v(" specified in fe.conf is "),a("code",[e._v("path/to/palo-meta")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Ensure that "),a("code",[e._v("path/to/palo-meta")]),e._v(" already exists, that the permissions are correct and that the directory is empty.")])]),e._v(" "),a("li",[a("p",[e._v("Start directly through "),a("code",[e._v("sh bin/start_fe.sh")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("After booting, you should be able to see the following log in fe.log:")]),e._v(" "),a("ul",[a("li",[e._v("Palo FE starting...")]),e._v(" "),a("li",[e._v("image does not exist: /path/to/palo-meta/image/image.0")]),e._v(" "),a("li",[e._v("transfer from INIT to UNKNOWN")]),e._v(" "),a("li",[e._v("transfer from UNKNOWN to MASTER")]),e._v(" "),a("li",[e._v("the very first time to open bdb, dbname is 1")]),e._v(" "),a("li",[e._v("start fencing, epoch number is 1")]),e._v(" "),a("li",[e._v("finish replay in xxx msec")]),e._v(" "),a("li",[e._v("QE service start")]),e._v(" "),a("li",[e._v("thrift server started")])]),e._v(" "),a("p",[e._v("The above logs are not necessarily strictly in this order, but they are basically similar.")])]),e._v(" "),a("li",[a("p",[e._v("The first start-up of a single-node FE usually does not encounter problems. If you haven't seen the above logs, generally speaking, you haven't followed the document steps carefully, please read the relevant wiki carefully.")])])])]),e._v(" "),a("li",[a("p",[e._v("Restart")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Stopped FE nodes can be restarted by using "),a("code",[e._v("sh bin/start_fe.sh")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("After restarting, you should be able to see the following log in fe.log:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Palo FE starting...")])]),e._v(" "),a("li",[a("p",[e._v("finished to get cluster id: xxxx, role: FOLLOWER and node name: xxxx")])]),e._v(" "),a("li",[a("p",[e._v("If no image has been generated before reboot, you will see:")])]),e._v(" "),a("li",[a("p",[e._v("image does not exist: /path/to/palo-meta/image/image.0")])]),e._v(" "),a("li",[a("p",[e._v("If an image is generated before the restart, you will see:")])]),e._v(" "),a("li",[a("p",[e._v("start load image from /path/to/palo-meta/image/image.xxx. is ckpt: false")])]),e._v(" "),a("li",[a("p",[e._v("finished load image in xxx ms")])]),e._v(" "),a("li",[a("p",[e._v("transfer from INIT to UNKNOWN")])]),e._v(" "),a("li",[a("p",[e._v("replayed journal id is xxxx, replay to journal id is yyyy")])]),e._v(" "),a("li",[a("p",[e._v("transfer from UNKNOWN to MASTER")])]),e._v(" "),a("li",[a("p",[e._v("finish replay in xxx msec")])]),e._v(" "),a("li",[a("p",[e._v("master finish replay journal, can write now.")])]),e._v(" "),a("li",[a("p",[e._v("begin to generate new image: image.xxxx")])]),e._v(" "),a("li",[a("p",[e._v("start save image to /path/to/palo-meta/image/image.ckpt. is ckpt: true")])]),e._v(" "),a("li",[a("p",[e._v("finished save image /path/to/palo-meta/image/image.ckpt in xxx ms. checksum is xxxx")])]),e._v(" "),a("li",[a("p",[e._v("push image.xxx to other nodes. totally xx nodes, push successed xx nodes")])]),e._v(" "),a("li",[a("p",[e._v("QE service start")])]),e._v(" "),a("li",[a("p",[e._v("thrift server started")])])]),e._v(" "),a("p",[e._v("The above logs are not necessarily strictly in this order, but they are basically similar.")])])])]),e._v(" "),a("li",[a("p",[e._v("Common problems")]),e._v(" "),a("p",[e._v("For the deployment of single-node FE, start-stop usually does not encounter any problems. If you have any questions, please refer to the relevant Wiki and check your operation steps carefully.")])])]),e._v(" "),a("h3",{attrs:{id:"add-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-fe"}},[e._v("#")]),e._v(" Add FE")]),e._v(" "),a("p",[e._v("Adding FE processes is described in detail in the [Deployment and Upgrade Documents] (https://github.com/apache/incubator-doris/wiki/Doris-Deploy-%26-Upgrade) and will not be repeated. Here are some points for attention, as well as common problems.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Notes")]),e._v(" "),a("ul",[a("li",[e._v("Before adding a new FE, make sure that the current Master FE runs properly (connection is normal, JVM is normal, image generation is normal, bdbje data directory is too large, etc.)")]),e._v(" "),a("li",[e._v("The first time you start a new FE, you must make sure that the "),a("code",[e._v("-helper")]),e._v(" parameter is added to point to Master FE. There is no need to add "),a("code",[e._v("-helper")]),e._v(" when restarting. (If "),a("code",[e._v("-helper")]),e._v(" is specified, FE will directly ask the helper node for its role. If not, FE will try to obtain information from "),a("code",[e._v("ROLE")]),e._v(" and "),a("code",[e._v("VERSION")]),e._v(" files in the "),a("code",[e._v("palo-meta/image/")]),e._v(" directory.")]),e._v(" "),a("li",[e._v("The first time you start a new FE, you must make sure that the "),a("code",[e._v("meta_dir")]),e._v(" of the FE is created, has correct permissions and is empty.")]),e._v(" "),a("li",[e._v("Starting a new FE and executing the "),a("code",[e._v("ALTER SYSTEM ADD FOLLOWER/OBSERVER")]),e._v(" statement adds FE to metadata in a sequence that is not required. If a new FE is started first and no statement is executed, the "),a("code",[e._v("current node is not added to the group. Please add it first.")]),e._v(" in the new FE log. When the statement is executed, it enters the normal process.")]),e._v(" "),a("li",[e._v("Make sure that after the previous FE is added successfully, the next FE is added.")]),e._v(" "),a("li",[e._v("Connect to  MASTER FE and execute "),a("code",[e._v("ALTER SYSTEM ADD FOLLOWER/OBSERVER")]),e._v(" claus。")])])]),e._v(" "),a("li",[a("p",[e._v("Common problems")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("this need is DETACHED")]),e._v(" "),a("p",[e._v("When you first start a FE to be added, if the data in palo-meta/bdb on Master FE is large, you may see the words "),a("code",[e._v("this node is DETACHED")]),e._v(". in the FE log to be added. At this point, bdbje is copying data, and you can see that the "),a("code",[e._v("bdb/")]),e._v(" directory of FE to be added is growing. This process usually takes several minutes (depending on the amount of data in bdbje). Later, there may be some bdbje-related error stack information in fe. log. If "),a("code",[e._v("QE service start")]),e._v(" and "),a("code",[e._v("thrift server start")]),e._v(" are displayed in the final log, the start is usually successful. You can try to connect this FE via mysql-client. If these words do not appear, it may be the problem of bdbje replication log timeout. At this point, restarting the FE directly will usually solve the problem.")])]),e._v(" "),a("li",[a("p",[e._v("Failure to add due to various reasons")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If OBSERVER is added, because OBSERVER-type FE does not participate in the majority of metadata writing, it can theoretically start and stop at will. Therefore, for the case of adding OBSERVER failure. The process of OBSERVER FE can be killed directly. After clearing the metadata directory of OBSERVER, add the process again.")])]),e._v(" "),a("li",[a("p",[e._v("If FOLLOWER is added, because FOLLOWER is mostly written by participating metadata. So it is possible that FOLLOWER has joined the bdbje electoral team. If there are only two FOLLOWER nodes (including MASTER), then stopping one FE may cause another FE to quit because it cannot write most of the time. At this point, we should first delete the newly added FOLLOWER node from the metadata through the "),a("code",[e._v("ALTER SYSTEM DROP FOLLOWER")]),e._v(" command, then kill the FOLLOWER process, empty the metadata and re-add the process.")])])])])])])]),e._v(" "),a("h3",{attrs:{id:"delete-fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-fe"}},[e._v("#")]),e._v(" Delete FE")]),e._v(" "),a("p",[e._v("The corresponding type of FE can be deleted by the "),a("code",[e._v("ALTER SYSTEM DROP FOLLOWER/OBSERVER")]),e._v(" command. The following points should be noted:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For OBSERVER type FE, direct DROP is enough, without risk.")])]),e._v(" "),a("li",[a("p",[e._v("For FOLLOWER type FE. First, you should make sure that you start deleting an odd number of FOLLOWERs (three or more).")]),e._v(" "),a("ol",[a("li",[e._v("If the FE of non-MASTER role is deleted, it is recommended to connect to MASTER FE, execute DROP command, and then kill the process.")]),e._v(" "),a("li",[e._v("If you want to delete MASTER FE, first confirm that there are odd FOLLOWER FE and it works properly. Then kill the MASTER FE process first. At this point, a FE will be elected MASTER. After confirming that the remaining FE is working properly, connect to the new MASTER FE and execute the DROP command to delete the old MASTER FE.")])])])]),e._v(" "),a("h2",{attrs:{id:"advanced-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-operations"}},[e._v("#")]),e._v(" Advanced Operations")]),e._v(" "),a("h3",{attrs:{id:"failure-recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failure-recovery"}},[e._v("#")]),e._v(" Failure recovery")]),e._v(" "),a("p",[e._v("FE may fail to start bdbje and synchronize between FEs for some reasons. Phenomena include the inability to write metadata, the absence of MASTER, and so on. At this point, we need to manually restore the FE. The general principle of manual recovery of FE is to start a new MASTER through metadata in the current "),a("code",[e._v("meta_dir")]),e._v(", and then add other FEs one by one. Please follow the following steps strictly:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First, stop all FE processes and all business access. Make sure that during metadata recovery, external access will not lead to other unexpected problems.")])]),e._v(" "),a("li",[a("p",[e._v("Identify which FE node's metadata is up-to-date:")]),e._v(" "),a("ul",[a("li",[e._v("First of all, "),a("strong",[e._v("be sure to back up all FE's "),a("code",[e._v("meta_dir")]),e._v(" directories first.")])]),e._v(" "),a("li",[e._v("Usually, Master FE's metadata is up to date. You can see the suffix of image.xxxx file in the "),a("code",[e._v("meta_dir/image")]),e._v(" directory. The larger the number, the newer the metadata.")]),e._v(" "),a("li",[e._v("Usually, by comparing all FOLLOWER FE image files, you can find the latest metadata.")]),e._v(" "),a("li",[e._v("After that, we use the FE node with the latest metadata to recover.")]),e._v(" "),a("li",[e._v("If using metadata of OBSERVER node to recover will be more troublesome, it is recommended to choose FOLLOWER node as far as possible.")])])]),e._v(" "),a("li",[a("p",[e._v("The following operations are performed on the FE nodes selected in step 2.")]),e._v(" "),a("ol",[a("li",[e._v("If the node is an OBSERVER, first change the "),a("code",[e._v("role=OBSERVER")]),e._v(" in the "),a("code",[e._v("meta_dir/image/ROLE")]),e._v(" file to "),a("code",[e._v("role=FOLLOWER")]),e._v(". (Recovery from the OBSERVER node will be more cumbersome, first follow the steps here, followed by a separate description)")]),e._v(" "),a("li",[e._v("Add configuration in fe.conf: "),a("code",[e._v("metadata_failure_recovery=true")]),e._v(".")]),e._v(" "),a("li",[e._v("Run "),a("code",[e._v("sh bin/start_fe.sh")]),e._v(" to start the FE")]),e._v(" "),a("li",[e._v("If normal, the FE will start in the role of MASTER, similar to the description in the previous section "),a("code",[e._v("Start a single node FE")]),e._v(". You should see the words "),a("code",[e._v("transfer from XXXX to MASTER")]),e._v(" in fe.log.")]),e._v(" "),a("li",[e._v("After the start-up is completed, connect to the FE first, and execute some query imports to check whether normal access is possible. If the operation is not normal, it may be wrong. It is recommended to read the above steps carefully and try again with the metadata previously backed up. If not, the problem may be more serious.")]),e._v(" "),a("li",[e._v("If successful, through the "),a("code",[e._v("show frontends;")]),e._v(" command, you should see all the FEs you added before, and the current FE is master.")]),e._v(" "),a("li",[e._v("Delete the "),a("code",[e._v("metadata_failure_recovery=true")]),e._v(" configuration item in fe.conf, or set it to "),a("code",[e._v("false")]),e._v(", and restart the FE ("),a("strong",[e._v("Important")]),e._v(").")])]),e._v(" "),a("blockquote",[a("p",[e._v("If you are recovering metadata from an OBSERVER node, after completing the above steps, you will find that the current FE role is OBSERVER, but "),a("code",[e._v("IsMaster")]),e._v(" appears as "),a("code",[e._v("true")]),e._v(". This is because the \"OBSERVER\" seen here is recorded in Doris's metadata, but whether it is master or not, is recorded in bdbje's metadata. Because we recovered from an OBSERVER node, there was inconsistency. Please take the following steps to fix this problem (we will fix it in a later version):")])]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v('First, all FE nodes except this "OBSERVER" are DROPed out.')]),e._v(" "),a("li",[e._v("A new FOLLOWER FE is added through the "),a("code",[e._v("ADD FOLLOWER")]),e._v(" command, assuming that it is on hostA.")]),e._v(" "),a("li",[e._v("Start a new FE on hostA and join the cluster by "),a("code",[e._v("helper")]),e._v(".")]),e._v(" "),a("li",[e._v("After successful startup, you should see two FEs through the "),a("code",[e._v("show frontends;")]),e._v(" statement, one is the previous OBSERVER, the other is the newly added FOLLOWER, and the OBSERVER is the master.")]),e._v(" "),a("li",[e._v("After confirming that the new FOLLOWER is working properly, the new FOLLOWER metadata is used to perform a failure recovery operation again.")]),e._v(" "),a("li",[e._v("The purpose of the above steps is to manufacture a metadata of FOLLOWER node artificially, and then use this metadata to restart fault recovery. This avoids inconsistencies in recovering metadata from OBSERVER.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The meaning of "),a("code",[e._v("metadata_failure_recovery = true")]),e._v(" is to empty the metadata of "),a("code",[e._v("bdbje")]),e._v(". In this way, bdbje will not contact other FEs before, but start as a separate FE. This parameter needs to be set to true only when restoring startup. After recovery, it must be set to false. Otherwise, once restarted, the metadata of bdbje will be emptied again, which will make other FEs unable to work properly.")])])]),e._v(" "),a("li",[a("p",[e._v("After the successful execution of step 3, we delete the previous FEs from the metadata by using the "),a("code",[e._v("ALTER SYSTEM DROP FOLLOWER/OBSERVER")]),e._v(" command and add them again by adding new FEs.")])]),e._v(" "),a("li",[a("p",[e._v("If the above operation is normal, it will be restored.")])])]),e._v(" "),a("h3",{attrs:{id:"fe-type-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-type-change"}},[e._v("#")]),e._v(" FE type change")]),e._v(" "),a("p",[e._v("If you need to change the existing FOLLOWER/OBSERVER type FE to OBSERVER/FOLLOWER type, please delete FE in the way described above, and then add the corresponding type FE.")]),e._v(" "),a("h3",{attrs:{id:"fe-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-migration"}},[e._v("#")]),e._v(" FE Migration")]),e._v(" "),a("p",[e._v("If you need to migrate one FE from the current node to another, there are several scenarios.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("FOLLOWER, or OBSERVER migration for non-MASTER nodes")]),e._v(" "),a("p",[e._v("After adding a new FOLLOWER / OBSERVER directly, delete the old FOLLOWER / OBSERVER.")])]),e._v(" "),a("li",[a("p",[e._v("Single-node MASTER migration")]),e._v(" "),a("p",[e._v("When there is only one FE, refer to the "),a("code",[e._v("Failure Recovery")]),e._v(" section. Copy the palo-meta directory of FE to the new node and start the new MASTER in Step 3 of the "),a("code",[e._v("Failure Recovery")]),e._v(" section")])]),e._v(" "),a("li",[a("p",[e._v("A set of FOLLOWER migrates from one set of nodes to another set of new nodes")]),e._v(" "),a("p",[e._v("Deploy FE on the new node and add the new node first by adding FOLLOWER. The old nodes can be dropped by DROP one by one. In the process of DROP-by-DROP, MASTER automatically selects the new FOLLOWER node.")])])]),e._v(" "),a("h3",{attrs:{id:"replacement-of-fe-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacement-of-fe-port"}},[e._v("#")]),e._v(" Replacement of FE port")]),e._v(" "),a("p",[e._v("FE currently has the following ports")]),e._v(" "),a("ul",[a("li",[e._v("Ed_log_port: bdbje's communication port")]),e._v(" "),a("li",[e._v("http_port: http port, also used to push image")]),e._v(" "),a("li",[e._v("rpc_port：FE 的 thrift server port")]),e._v(" "),a("li",[e._v("query_port: Mysql connection port")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("edit_log_port")]),e._v(" "),a("p",[e._v("If this port needs to be replaced, it needs to be restored with reference to the operations in the "),a("code",[e._v("Failure Recovery")]),e._v(" section. Because the port has been persisted into bdbje's own metadata (also recorded in Doris's own metadata), it is necessary to clear bdbje's metadata by setting "),a("code",[e._v("metadata_failure_recovery=true")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("http_port")]),e._v(" "),a("p",[e._v("All FE http_ports must be consistent. So if you want to modify this port, all FEs need to be modified and restarted. Modifying this port will be more complex in the case of multiple FOLLOWER deployments (involving laying eggs and laying hens...), so this operation is not recommended. If necessary, follow the operation in the "),a("code",[e._v("Failure Recovery")]),e._v(" section directly.")])]),e._v(" "),a("li",[a("p",[e._v("rpc_port")]),e._v(" "),a("p",[e._v("After modifying the configuration, restart FE directly. Master FE informs BE of the new port through heartbeat. Only this port of Master FE will be used. However, it is still recommended that all FE ports be consistent.")])]),e._v(" "),a("li",[a("p",[e._v("query_port")]),e._v(" "),a("p",[e._v("After modifying the configuration, restart FE directly. This only affects mysql's connection target.")])])]),e._v(" "),a("h3",{attrs:{id:"recover-metadata-from-fe-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recover-metadata-from-fe-memory"}},[e._v("#")]),e._v(" Recover metadata from FE memory")]),e._v(" "),a("p",[e._v("In some extreme cases, the image file on the disk may be damaged, but the metadata in the memory is intact. At this point, we can dump the metadata from the memory and replace the image file on the disk to recover the metadata. the entire non-stop query service operation steps are as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Stop all Load, Create, Alter operations.")])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command to dump metadata from the Master FE memory: (hereafter called image_mem)")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -u $root_user:$password http://$master_hostname:8030/dump\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Replace the image file in the "),a("code",[e._v("meta_dir/image")]),e._v(" directory on the OBSERVER FE node with the image_mem file, restart the OBSERVER FE node, and verify the integrity and correctness of the image_mem file. You can check whether the DB and Table metadata are normal on the FE Web page, whether there is an exception in "),a("code",[e._v("fe.log")]),e._v(", whether it is in a normal replayed jour.")])]),e._v(" "),a("li",[a("p",[e._v("Replace the image file in the "),a("code",[e._v("meta_dir/image")]),e._v(" directory on the FOLLOWER FE node with the image_mem file in turn, restart the FOLLOWER FE node, and confirm that the metadata and query services are normal.")])]),e._v(" "),a("li",[a("p",[e._v("Replace the image file in the "),a("code",[e._v("meta_dir/image")]),e._v(" directory on the Master FE node with the image_mem file, restart the Master FE node, and then confirm that the FE Master switch is normal and The Master FE node can generate a new image file through checkpoint.")])]),e._v(" "),a("li",[a("p",[e._v("Recover all Load, Create, Alter operations.")])])]),e._v(" "),a("p",[a("strong",[e._v("Note: If the Image file is large, the entire process can take a long time, so during this time, make sure Master FE does not generate a new image file via checkpoint. When the image.ckpt file in the meta_dir/image directory on the Master FE node is observed to be as large as the image.xxx file, the image.ckpt file can be deleted directly.")])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("p",[e._v("The deployment recommendation of FE is described in the Installation and "),a("RouterLink",{attrs:{to:"/en/installing/install-deploy_EN.html"}},[e._v("Deployment Document")]),e._v(". Here are some supplements.")],1),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("If you don't know the operation logic of FE metadata very well, or you don't have enough experience in the operation and maintenance of FE metadata, we strongly recommend that only one FOLLOWER-type FE be deployed as MASTER in practice, and the other FEs are OBSERVER, which can reduce many complex operation and maintenance problems.")]),e._v(" Don't worry too much about the failure of MASTER single point to write metadata. First, if you configure it properly, FE as a java process is very difficult to hang up. Secondly, if the MASTER disk is damaged (the probability is very low), we can also use the metadata on OBSERVER to recover manually through "),a("code",[e._v("fault recovery")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("The JVM of the FE process must ensure sufficient memory. We "),a("strong",[e._v("strongly recommend")]),e._v(" that FE's JVM memory should be at least 10GB and 32GB to 64GB. And deploy monitoring to monitor JVM memory usage. Because if OOM occurs in FE, metadata writing may fail, resulting in some failures that "),a("strong",[e._v("cannot recover")]),e._v("!")])]),e._v(" "),a("li",[a("p",[e._v("FE nodes should have enough disk space to prevent the excessive metadata from causing insufficient disk space. At the same time, FE logs also take up more than a dozen gigabytes of disk space.")])])]),e._v(" "),a("h2",{attrs:{id:"other-common-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-common-problems"}},[e._v("#")]),e._v(" Other common problems")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Output "),a("code",[e._v("meta out of date. current time: xxx, synchronized time: xxx, has log: xxx, fe type: xxx")]),e._v(" in fe.log")]),e._v(" "),a("p",[e._v("This is usually because the FE cannot elect Master. For example, if three FOLLOWERs are configured, but only one FOLLOWER is started, this FOLLOWER will cause this problem. Usually, just start the remaining FOLLOWER. If the problem has not been solved after the start-up, manual recovery may be required in accordance with the way in the "),a("code",[e._v("Failure Recovery")]),e._v(" section.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Clock delta: xxxx ms. between Feeder: xxxx and this Replica exceeds max permissible delta: xxxx ms.")])]),e._v(" "),a("p",[e._v("Bdbje requires that clock errors between nodes should not exceed a certain threshold. If exceeded, the node will exit abnormally. The default threshold is 5000ms, which is controlled by FE parameter `max_bdbje_clock_delta_ms', and can be modified as appropriate. But we suggest using NTP and other clock synchronization methods to ensure the clock synchronization of Doris cluster hosts.")])]),e._v(" "),a("li",[a("p",[e._v("Mirror files in the "),a("code",[e._v("image/")]),e._v(" directory have not been updated for a long time")]),e._v(" "),a("p",[e._v("Master FE generates a mirror file by default for every 50,000 metadata journal. In a frequently used cluster, a new image file is usually generated every half to several days. If you find that the image file has not been updated for a long time (for example, more than a week), you can see the reasons in sequence as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Search for "),a("code",[e._v("memory is not enough to do checkpoint. Committed memroy XXXX Bytes, used memory XXXX Bytes.")]),e._v(" in the fe.log of Master FE. If found, it indicates that the current FE's JVM memory is insufficient for image generation (usually we need to reserve half of the FE memory for image generation). Then you need to add JVM memory and restart FE before you can observe. Each time Master FE restarts, a new image is generated directly. This restart method can also be used to actively generate new images. Note that if there are multiple FOLLOWER deployments, then when you restart the current Master FE, another FOLLOWER FE will become MASTER, and subsequent image generation will be the responsibility of the new Master. Therefore, you may need to modify the JVM memory configuration of all FOLLOWER FE.")])]),e._v(" "),a("li",[a("p",[e._v("Search for "),a("code",[e._v("begin to generate new image: image.xxxx")]),e._v(" in the fe.log of Master FE. If it is found, then the image is generated. Check the subsequent log of this thread, and if "),a("code",[e._v("checkpoint finished save image.xxxx")]),e._v(" appears, the image is written successfully. If "),a("code",[e._v("Exception when generating new image file")]),e._v(" occurs, the generation fails and specific error messages need to be viewed.")])])])]),e._v(" "),a("li",[a("p",[e._v("The size of the "),a("code",[e._v("bdb/")]),e._v(" directory is very large, reaching several Gs or more.")]),e._v(" "),a("p",[e._v("The BDB directory will remain large for some time after eliminating the error that the new image cannot be generated. Maybe it's because Master FE failed to push image. You can search "),a("code",[e._v("push image.XXXX to other nodes. totally XX nodes, push successed YY nodes")]),e._v(" in the fe. log of Master FE. If YY is smaller than xx, then some FEs are not pushed successfully. You can see the specific error "),a("code",[e._v("Exception when pushing image file.url = xxx")]),e._v(" in the fe. log.")]),e._v(" "),a("p",[e._v("At the same time, you can add the configuration in the FE configuration file: "),a("code",[e._v("edit_log_roll_num = xxxx")]),e._v(". This parameter sets the number of metadata journals and makes an image once. The default is 50000. This number can be reduced appropriately to make images more frequent, thus speeding up the deletion of old journals.")])]),e._v(" "),a("li",[a("p",[e._v("FOLLOWER FE hangs up one after another")]),e._v(" "),a("p",[e._v("Because Doris's metadata adopts the majority writing strategy, that is, a metadata journal must be written to at least a number of FOLLOWER FEs (for example, three FOLLOWERs, two must be written successfully) before it can be considered successful. If the write fails, the FE process exits on its own initiative. So suppose there are three FOLLOWERs: A, B and C. C hangs up first, and then B hangs up, then A will hang up. So as described in the "),a("code",[e._v("Best Practices")]),e._v("section, if you don't have extensive experience in metadata operations and maintenance, it's not recommended to deploy multiple FOLLOWERs.")])]),e._v(" "),a("li",[a("p",[e._v("fe.log 中出现 "),a("code",[e._v("get exception when try to close previously opened bdb database. ignore it")])]),e._v(" "),a("p",[e._v("If there is the word "),a("code",[e._v("ignore it")]),e._v(" behind it, there is usually no need to deal with it. If you are interested, you can search for this error in "),a("code",[e._v("BDBEnvironment.java")]),e._v(", and see the annotations.")])]),e._v(" "),a("li",[a("p",[e._v("From "),a("code",[e._v("show frontends;")]),e._v(" Look, the "),a("code",[e._v("Join")]),e._v(" of a FE is listed as "),a("code",[e._v("true")]),e._v(", but actually the FE is abnormal.")]),e._v(" "),a("p",[e._v("Through "),a("code",[e._v("show frontends;")]),e._v(" see the "),a("code",[e._v("Join")]),e._v(" information. If the column is "),a("code",[e._v("true")]),e._v(", it only means that the FE "),a("strong",[e._v("has joined the")]),e._v(" cluster. It does not mean that it still exists normally in the cluster. If "),a("code",[e._v("false")]),e._v(", it means that the FE "),a("strong",[e._v("has never joined the")]),e._v(" cluster.")])]),e._v(" "),a("li",[a("p",[e._v("Configuration of FE "),a("code",[e._v("master_sync_policy")]),e._v(", "),a("code",[e._v("replica_sync_policy")]),e._v(", and "),a("code",[e._v("txn_rollback_limit.")])]),e._v(" "),a("p",[a("code",[e._v("master_sync_policy")]),e._v(" is used to specify whether fsync (), "),a("code",[e._v("replica_sync_policy")]),e._v(" is called when Leader FE writes metadata log, and "),a("code",[e._v("replica_sync_policy")]),e._v(" is used to specify whether other Follower FE calls fsync () when FE HA deploys synchronous metadata. In earlier versions of Oris, these two parameters defaulted to "),a("code",[e._v("WRITE_NO_SYNC")]),e._v(", i.e., fsync () was not called. In the latest version of Oris, the default has been changed to "),a("code",[e._v("SYNC")]),e._v(", that is, fsync () is called. Calling fsync () significantly reduces the efficiency of metadata disk writing. In some environments, IOPS may drop to several hundred and the latency increases to 2-3ms (but it's still enough for Doris metadata manipulation). Therefore, we recommend the following configuration:")]),e._v(" "),a("ol",[a("li",[e._v("For a single Follower FE deployment, "),a("code",[e._v("master_sync_policy")]),e._v(" is set to "),a("code",[e._v("SYNC")]),e._v(", which prevents the loss of metadata due to the downtime of the FE system.")]),e._v(" "),a("li",[e._v("For multi-Follower FE deployment, we can set "),a("code",[e._v("master_sync_policy")]),e._v(" and "),a("code",[e._v("replica_sync_policy")]),e._v(" to "),a("code",[e._v("WRITE_NO_SYNC")]),e._v(", because we think that the probability of simultaneous outage of multiple systems is very low.")])]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("master_sync_policy")]),e._v(" is set to "),a("code",[e._v("WRITE_NO_SYNC")]),e._v(" in a single Follower FE deployment, then a FE system outage may occur, resulting in loss of metadata. At this point, if other Observer FE attempts to restart, it may report an error:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Node xxx must rollback xx total commits(numPassedDurableCommits of which were durable) to the earliest point indicated by transaction xxxx in order to rejoin the replication group, but the transaction rollback limit of xxx prohibits this.\n")])])])])]),e._v(" "),a("p",[e._v("This means that some transactions that have been persisted need to be rolled back, but the number of entries exceeds the upper limit. Here our default upper limit is 100, which can be changed by setting "),a("code",[e._v("txn_rollback_limit")]),e._v(". This operation is only used to attempt to start FE normally, but lost metadata cannot be recovered.")])])}),[],!1,null,null,null);t.default=i.exports}}]);