(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{730:function(a,t,s){"use strict";s.r(t);var r=s(28),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"验证-apache-发布版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证-apache-发布版本"}},[a._v("#")]),a._v(" 验证 Apache 发布版本")]),a._v(" "),s("p",[a._v("可以按照以下步骤对发布版本进行验证：")]),a._v(" "),s("ol",[s("li",[a._v("[ ] 下载链接是否合法。")]),a._v(" "),s("li",[a._v("[ ] 校验值和 PGP 签名是否合法。")]),a._v(" "),s("li",[a._v("[ ] 是否包含 DISCLAIMER-WIP。")]),a._v(" "),s("li",[a._v("[ ] 代码是否和当前发布版本相匹配。")]),a._v(" "),s("li",[a._v("[ ] LICENSE 和 NOTICE 文件是否正确。")]),a._v(" "),s("li",[a._v("[ ] 所有文件都携带必要的协议说明。")]),a._v(" "),s("li",[a._v("[ ] 在源码包中不包含已经编译好的内容。")]),a._v(" "),s("li",[a._v("[ ] 编译是否能够顺利执行。")])]),a._v(" "),s("h2",{attrs:{id:"_1-下载源码包、签名文件、校验值文件和-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载源码包、签名文件、校验值文件和-keys"}},[a._v("#")]),a._v(" 1. 下载源码包、签名文件、校验值文件和 KEYS")]),a._v(" "),s("p",[a._v("下载所有相关文件, 以 a.b.c-incubating 为示例:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wget https://dist.apache.org/repos/dist/dev/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz\n\nwget https://dist.apache.org/repos/dist/dev/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.sha512\n\nwget https://dist.apache.org/repos/dist/dev/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.asc\n\nwget https://dist.apache.org/repos/dist/dev/incubator/doris/KEYS\n")])])]),s("h2",{attrs:{id:"_2-检查签名和校验值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-检查签名和校验值"}},[a._v("#")]),a._v(" 2. 检查签名和校验值")]),a._v(" "),s("p",[a._v("推荐使用 GunPG，可以通过以下命令安装：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CentOS: yum install gnupg\nUbuntu: apt-get install gnupg\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("gpg --import KEYS\ngpg --verify apache-doris-a.b.c-incubating-src.tar.gz.asc apache-doris-a.b.c-incubating-src.tar.gz\nsha512sum --check apache-doris-a.b.c-incubating-src.tar.gz.sha512\n")])])]),s("h2",{attrs:{id:"_3-验证源码协议头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证源码协议头"}},[a._v("#")]),a._v(" 3. 验证源码协议头")]),a._v(" "),s("p",[a._v("推荐使用 Apache RAT 验证源码协议，可以从一下连接下载：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wget http://mirrors.tuna.tsinghua.edu.cn/apache//creadur/apache-rat-0.12/apache-rat-0.12-bin.tar.gz\ntar zxvf apache-rat-0.12-bin.tar.gz\n")])])]),s("p",[a._v("假设源码目录名称为 apache-doris-a.b.c-incubating-src，可以使用以下命令进行验证。\n这个命令会产生一个文件，其中列举了所有非 ASF 协议的文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/usr/java/jdk/bin/java  -jar apache-rat-0.12/apache-rat-0.12.jar -a -d apache-doris-a.b.c-incubating-src -E apache-doris-a.b.c-incubating-src/.rat-excudes\n")])])]),s("h2",{attrs:{id:"_4-验证编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证编译"}},[a._v("#")]),a._v(" 4. 验证编译")]),a._v(" "),s("p",[a._v("详细的编译步骤，请参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/installing/compilation.html"}},[a._v("编译文档")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);