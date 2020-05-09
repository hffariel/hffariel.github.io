(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{864:function(e,s,a){"use strict";a.r(s);var r=a(33),o=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-repository"}},[e._v("#")]),e._v(" CREATE REPOSITORY")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('该语句用于创建仓库。仓库用于属于备份或恢复。仅 root 或 superuser 用户可以创建仓库。\n语法：\n    CREATE [READ ONLY] REPOSITORY `repo_name`\n    WITH BROKER `broker_name`\n    ON LOCATION `repo_location`\n    PROPERTIES ("key"="value", ...);\n        \n说明：\n    1. 仓库的创建，依赖于已存在的 broker\n    2. 如果是只读仓库，则只能在仓库上进行恢复。如果不是，则可以进行备份和恢复操作。\n    3. 根据 broker 的不同类型，PROPERTIES 有所不同，具体见示例。\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('1. 创建名为 bos_repo 的仓库，依赖 BOS broker "bos_broker"，数据根目录为：bos://palo_backup\n    CREATE REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n        "bos_endpoint" = "http://gz.bcebos.com",\n        "bos_accesskey" = "069fc2786e664e63a5f111111114ddbs22",\n        "bos_secret_accesskey"="70999999999999de274d59eaa980a"\n    );\n \n2. 创建和示例 1 相同的仓库，但属性为只读：\n    CREATE READ ONLY REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n        "bos_endpoint" = "http://gz.bcebos.com",\n        "bos_accesskey" = "069fc2786e664e63a5f111111114ddbs22",\n        "bos_secret_accesskey"="70999999999999de274d59eaa980a"\n    );\n\n3. 创建名为 hdfs_repo 的仓库，依赖 Baidu hdfs broker "hdfs_broker"，数据根目录为：hdfs://hadoop-name-node:54310/path/to/repo/\n    CREATE REPOSITORY `hdfs_repo`\n    WITH BROKER `hdfs_broker`\n    ON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\n    PROPERTIES\n    (\n        "username" = "user",\n        "password" = "password"\n    );\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE REPOSITORY\n")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);