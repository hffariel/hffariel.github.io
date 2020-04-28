(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{888:function(_,t,v){"use strict";v.r(t);var a=v(33),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"user-define-function"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#user-define-function"}},[_._v("#")]),_._v(" User Define Function")]),_._v(" "),v("p",[_._v("用户可以通过UDF机制来扩展Doris的能力。通过这篇文档，用户能够创建自己的UDF。")]),_._v(" "),v("h2",{attrs:{id:"编写udf函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写udf函数"}},[_._v("#")]),_._v(" 编写UDF函数")]),_._v(" "),v("p",[_._v("在使用UDF之前，用户需要先在Doris的UDF框架下，编写自己的UDF函数。在"),v("code",[_._v("be/src/udf_samples/udf_sample.h|cpp")]),_._v("文件中是一个简单的UDF Demo。")]),_._v(" "),v("p",[_._v("编写一个UDF函数需要以下几个步骤。")]),_._v(" "),v("h3",{attrs:{id:"编写函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写函数"}},[_._v("#")]),_._v(" 编写函数")]),_._v(" "),v("p",[_._v("创建对应的头文件、CPP文件，在CPP文件中实现你需要的逻辑。CPP文件中的实现函数格式与UDF的对应关系。")]),_._v(" "),v("h4",{attrs:{id:"非可变参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非可变参数"}},[_._v("#")]),_._v(" 非可变参数")]),_._v(" "),v("p",[_._v("对于非可变参数的UDF，那么两者之间的对应关系很直接。\n比如"),v("code",[_._v("INT MyADD(INT, INT)")]),_._v("的UDF就会对应"),v("code",[_._v("IntVal AddUdf(FunctionContext* context, const IntVal& arg1, const IntVal& arg2)")]),_._v("。")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("AddUdf")]),_._v("可以为任意的名字，只要创建UDF的时候指定即可。")]),_._v(" "),v("li",[_._v("实现函数中的第一个参数永远是"),v("code",[_._v("FunctionContext*")]),_._v("。实现者可以通过这个结构体获得一些查询相关的内容，以及申请一些需要使用的内存。具体使用的接口可以参考"),v("code",[_._v("udf/udf.h")]),_._v("中的定义。")]),_._v(" "),v("li",[_._v("实现函数中从第二个参数开始需要与UDF的参数一一对应，比如"),v("code",[_._v("IntVal")]),_._v("对应"),v("code",[_._v("INT")]),_._v("类型。这部分的类型都要使用"),v("code",[_._v("const")]),_._v("引用。")]),_._v(" "),v("li",[_._v("返回参数与UDF的参数的类型要相对应。")])]),_._v(" "),v("h4",{attrs:{id:"可变参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可变参数"}},[_._v("#")]),_._v(" 可变参数")]),_._v(" "),v("p",[_._v("对于可变参数，可以参见以下例子，UDF"),v("code",[_._v("String md5sum(String, ...)")]),_._v("对应的\n实现函数是"),v("code",[_._v("StringVal md5sumUdf(FunctionContext* ctx, int num_args, const StringVal* args)")])]),_._v(" "),v("ol",[v("li",[v("code",[_._v("md5sumUdf")]),_._v("这个也是可以任意改变的，创建的时候指定即可。")]),_._v(" "),v("li",[_._v("第一个参数与非可变参数函数一样，传入的是一个"),v("code",[_._v("FunctionContext*")]),_._v("。")]),_._v(" "),v("li",[_._v("可变参数部分由两部分组成，首先会传入一个整数，说明后面还有几个参数。后面传入的是一个可变参数部分的数组。")])]),_._v(" "),v("h4",{attrs:{id:"类型对应关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型对应关系"}},[_._v("#")]),_._v(" 类型对应关系")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("UDF Type")]),_._v(" "),v("th",[_._v("Argument Type")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("TinyInt")]),_._v(" "),v("td",[_._v("TinyIntVal")])]),_._v(" "),v("tr",[v("td",[_._v("SmallInt")]),_._v(" "),v("td",[_._v("SmallIntVal")])]),_._v(" "),v("tr",[v("td",[_._v("Int")]),_._v(" "),v("td",[_._v("IntVal")])]),_._v(" "),v("tr",[v("td",[_._v("BigInt")]),_._v(" "),v("td",[_._v("BigIntVal")])]),_._v(" "),v("tr",[v("td",[_._v("LargeInt")]),_._v(" "),v("td",[_._v("LargeIntVal")])]),_._v(" "),v("tr",[v("td",[_._v("Float")]),_._v(" "),v("td",[_._v("FloatVal")])]),_._v(" "),v("tr",[v("td",[_._v("Double")]),_._v(" "),v("td",[_._v("DoubleVal")])]),_._v(" "),v("tr",[v("td",[_._v("Date")]),_._v(" "),v("td",[_._v("DateTimeVal")])]),_._v(" "),v("tr",[v("td",[_._v("Datetime")]),_._v(" "),v("td",[_._v("DateTimeVal")])]),_._v(" "),v("tr",[v("td",[_._v("Char")]),_._v(" "),v("td",[_._v("StringVal")])]),_._v(" "),v("tr",[v("td",[_._v("Varchar")]),_._v(" "),v("td",[_._v("StringVal")])]),_._v(" "),v("tr",[v("td",[_._v("Decimal")]),_._v(" "),v("td",[_._v("DecimalVal")])])])]),_._v(" "),v("h2",{attrs:{id:"编译udf函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译udf函数"}},[_._v("#")]),_._v(" 编译UDF函数")]),_._v(" "),v("h3",{attrs:{id:"编译doris"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译doris"}},[_._v("#")]),_._v(" 编译Doris")]),_._v(" "),v("p",[_._v("在Doris根目录下执行"),v("code",[_._v("sh build.sh")]),_._v("就会在"),v("code",[_._v("output/udf/")]),_._v("生成对应"),v("code",[_._v("headers|libs")])]),_._v(" "),v("h3",{attrs:{id:"编写cmakelists-txt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写cmakelists-txt"}},[_._v("#")]),_._v(" 编写CMakeLists.txt")]),_._v(" "),v("p",[_._v("基于上一步生成的"),v("code",[_._v("headers|libs")]),_._v("，用户可以使用"),v("code",[_._v("CMakeLists")]),_._v("等工具引入该依赖；在"),v("code",[_._v("CMakeLists")]),_._v("中，可以通过向"),v("code",[_._v("CMAKE_CXX_FLAGS")]),_._v("添加"),v("code",[_._v("-I|L")]),_._v("分别指定"),v("code",[_._v("headers|libs")]),_._v("路径；然后使用"),v("code",[_._v("add_library")]),_._v("添加动态库。例如，在"),v("code",[_._v("be/src/udf_samples/CMakeLists.txt")]),_._v("中，使用"),v("code",[_._v("add_library(udfsample SHARED udf_sample.cpp)")]),_._v(" "),v("code",[_._v("target_link_libraries")]),_._v("(udfsample -static-libstdc++ -static-libgcc)增加了一个"),v("code",[_._v("udfsample")]),_._v("动态库。后面需要写上涉及的所有源文件（不包含头文件）。")]),_._v(" "),v("h3",{attrs:{id:"执行编译"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行编译"}},[_._v("#")]),_._v(" 执行编译")]),_._v(" "),v("p",[_._v("在该目录下创建一个"),v("code",[_._v("build")]),_._v("目录并在"),v("code",[_._v("build")]),_._v("下执行"),v("code",[_._v("cmake ../")]),_._v("生成"),v("code",[_._v("Makefile")]),_._v("，并执行"),v("code",[_._v("make")]),_._v("就会生成对应动态库。")]),_._v(" "),v("h2",{attrs:{id:"创建udf函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建udf函数"}},[_._v("#")]),_._v(" 创建UDF函数")]),_._v(" "),v("p",[_._v("通过上述的步骤后，你可以得到一个动态库。你需要将这个动态库放到一个能够通过HTTP协议访问到的位置。然后执行创建UDF函数在Doris系统内部创建一个UDF，你需要拥有AMDIN权限才能够完成这个操作。")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v('CREATE [AGGREGATE] FUNCTION \n\tname ([argtype][,...])\n\t[RETURNS] rettype\n\tPROPERTIES (["key"="value"][,...])\n')])])]),v("p",[_._v("说明：")]),_._v(" "),v("ol",[v("li",[_._v("PROPERTIES中"),v("code",[_._v("symbol")]),_._v("表示的是，执行入口函数的对应symbol，这个参数是必须设定。你可以通过"),v("code",[_._v("nm")]),_._v("命令来获得对应的symbol，比如"),v("code",[_._v("nm libudfsample.so | grep AddUdf")]),_._v("获得到的"),v("code",[_._v("_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_")]),_._v("就是对应的symbol。")]),_._v(" "),v("li",[_._v("PROPERTIES中"),v("code",[_._v("object_file")]),_._v("表示的是从哪里能够下载到对应的动态库，这个参数是必须设定的。")]),_._v(" "),v("li",[_._v("name: 一个function是要归属于某个DB的，name的形式为"),v("code",[_._v("dbName")]),_._v("."),v("code",[_._v("funcName")]),_._v("。当"),v("code",[_._v("dbName")]),_._v("没有明确指定的时候，就是使用当前session所在的db作为"),v("code",[_._v("dbName")]),_._v("。")])]),_._v(" "),v("p",[_._v("具体使用可以参见 "),v("code",[_._v("CREATE FUNCTION")]),_._v(" 获取更详细信息。")]),_._v(" "),v("h2",{attrs:{id:"使用udf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用udf"}},[_._v("#")]),_._v(" 使用UDF")]),_._v(" "),v("p",[_._v("用户使用UDF/UDAF必须拥有对应数据库的 "),v("code",[_._v("SELECT")]),_._v(" 权限。")]),_._v(" "),v("p",[_._v("UDF的使用与普通的函数方式一致，唯一的区别在于，内置函数的作用域是全局的，而UDF的作用域是DB内部。当链接session位于数据内部时，直接使用UDF名字会在当前DB内部查找对应的UDF。否则用户需要显示的指定UDF的数据库名字，例如"),v("code",[_._v("dbName")]),_._v("."),v("code",[_._v("funcName")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"删除udf函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除udf函数"}},[_._v("#")]),_._v(" 删除UDF函数")]),_._v(" "),v("p",[_._v("当你不再需要UDF函数时，你可以通过下述命令来删除一个UDF函数, 可以参考 "),v("code",[_._v("DROP FUNCTION")]),_._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);