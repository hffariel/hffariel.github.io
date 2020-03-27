(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{368:function(e,o,t){"use strict";t.r(o);var r=t(28),i=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"compilation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),t("p",[e._v("This document focuses on how to code Doris through source code.")]),e._v(" "),t("h2",{attrs:{id:"developing-mirror-compilation-using-docker-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developing-mirror-compilation-using-docker-recommended"}},[e._v("#")]),e._v(" Developing mirror compilation using Docker (recommended)")]),e._v(" "),t("h3",{attrs:{id:"use-off-the-shelf-mirrors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-off-the-shelf-mirrors"}},[e._v("#")]),e._v(" Use off-the-shelf mirrors")]),e._v(" "),t("ol",[t("li",[e._v("Download Docker Mirror")])]),e._v(" "),t("p",[t("code",[e._v("$ docker pull apachedoris/doris-dev:build-env")])]),e._v(" "),t("p",[e._v("Check mirror download completed:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\n$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\napachedoris/doris-dev   build-env           f8bc5d4024e0        21 hours ago        3.28GB\n```\n")])])]),t("p",[e._v("Note: For different versions of Oris, you need to download the corresponding mirror version.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("image version")]),e._v(" "),t("th",[e._v("commit id")]),e._v(" "),t("th",[e._v("release version")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("apachedoris/doris-dev:build-env")]),e._v(" "),t("td",[e._v("before "),t("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("0.8.x, 0.9.x")])]),e._v(" "),t("tr",[t("td",[e._v("apachedoris/doris-dev:build-env-1.1")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),t("OutboundLink")],1),e._v(" or later")]),e._v(" "),t("td",[e._v("0.10.x or later")])])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Running Mirror")])]),e._v(" "),t("p",[t("code",[e._v("$ docker run -it apachedoris/doris-dev:build-env")])]),e._v(" "),t("p",[e._v("If you want to compile the local Doris source code, you can mount the path:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\ndocker run -it -v /your/local/incubator-doris-DORIS-x.x.x-release/:/root/incubator-doris-DORIS-x.x.x-release/ apachedoris/doris-dev:build-env\n```\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Download source code")])]),e._v(" "),t("p",[e._v("After starting the mirror, you should be in the container. The Doris source code can be downloaded from the following command (local source directory mounted is not required):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/xxx.tar.gz\nor\n$ git clone https://github.com/apache/incubator-doris.git\n```\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[e._v("Compile Doris")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sh build.sh\n")])])])])]),e._v(" "),t("p",[e._v("After compilation, the output file is in the "),t("code",[e._v("output/")]),e._v(" directory.")]),e._v(" "),t("h3",{attrs:{id:"self-compiling-development-environment-mirror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#self-compiling-development-environment-mirror"}},[e._v("#")]),e._v(" Self-compiling Development Environment Mirror")]),e._v(" "),t("p",[e._v("You can also create a Doris development environment mirror yourself, referring specifically to the `docker/README.md'file.")]),e._v(" "),t("h2",{attrs:{id:"direct-compilation-centos-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-compilation-centos-ubuntu"}},[e._v("#")]),e._v(" Direct Compilation (CentOS/Ubuntu)")]),e._v(" "),t("p",[e._v("You can try to compile Doris directly in your own Linux environment.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("System Dependence")]),e._v(" "),t("p",[t("code",[e._v("GCC 5.3.1+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+")])]),e._v(" "),t("p",[e._v("If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies")]),e._v(" "),t("p",[t("code",[e._v("sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev")])]),e._v(" "),t("p",[e._v("After installation, set environment variables "),t("code",[e._v("PATH")]),e._v(", "),t("code",[e._v("JAVA_HOME")]),e._v(", etc.")])]),e._v(" "),t("li",[t("p",[e._v("Compile Doris")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sh build.sh\n")])])])])]),e._v(" "),t("p",[e._v("After compilation, the output file is in the "),t("code",[e._v("output/")]),e._v(" directory.")])])}),[],!1,null,null,null);o.default=i.exports}}]);