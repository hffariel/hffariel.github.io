(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{446:function(e,t,a){"use strict";a.r(t);var n=a(43),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"user-define-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-define-function"}},[e._v("#")]),e._v(" User Define Function")]),e._v(" "),a("p",[e._v("Users can extend Doris's capabilities through UDF mechanisms. Through this document, users can create their own UDF.")]),e._v(" "),a("h2",{attrs:{id:"writing-udf-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-udf-functions"}},[e._v("#")]),e._v(" Writing UDF functions")]),e._v(" "),a("p",[e._v("Before using UDF, users need to write their own UDF functions in Doris's UDF framework. In the "),a("code",[e._v("be/src/udf_samples/udf_sample.h | cpp")]),e._v(" file, it is a simple UDF Demo.")]),e._v(" "),a("p",[e._v("Writing a UDF function requires the following steps.")]),e._v(" "),a("h3",{attrs:{id:"writing-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-functions"}},[e._v("#")]),e._v(" Writing functions")]),e._v(" "),a("p",[e._v("Create the corresponding header file, CPP file, and implement the logic you need in the CPP file. The corresponding relationship between the format of implementation function in CPP file and UDF.")]),e._v(" "),a("h4",{attrs:{id:"non-variable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-variable-parameters"}},[e._v("#")]),e._v(" Non-variable parameters")]),e._v(" "),a("p",[e._v("For UDF with non-variable parameters, the corresponding relationship between them is very direct.\nFor example, "),a("code",[e._v("INT MyADD'(INT, INT)")]),e._v(" UDF corresponds to "),a("code",[e._v("IntVal AddUdf(FunctionContext* context, const IntVal & arg1, const IntVal & arg2)")]),e._v(".")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("AddUdf")]),e._v(" can be any name, as long as it is specified when UDF is created.")]),e._v(" "),a("li",[e._v("The first parameter in the implementation function is always "),a("code",[e._v("FunctionContext*")]),e._v(". The implementer can obtain some query-related content and apply for some memory to be used through this structure. Specific interfaces can be defined in "),a("code",[e._v("udf/udf.h")]),e._v(".")]),e._v(" "),a("li",[e._v("Implementing functions from the second parameter requires one-to-one correspondence with UDF parameters, such as "),a("code",[e._v("IntVal")]),e._v(" corresponding to "),a("code",[e._v("INT")]),e._v(" type. All types in this section are referenced by "),a("code",[e._v("const")]),e._v(".")]),e._v(" "),a("li",[e._v("Return parameters should correspond to the type of UDF parameters.")])]),e._v(" "),a("h4",{attrs:{id:"variable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-parameters"}},[e._v("#")]),e._v(" Variable parameters")]),e._v(" "),a("p",[e._v("For variable parameters, see the following example, UDF "),a("code",[e._v("String md5sum (String,...)")]),e._v(" corresponds to\n"),a("code",[e._v("StringVal md5sumUdf (FunctionContext * ctx, int num args, const StringVal * args)")])]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("md5sumUdf")]),e._v(" can also be changed at will. It can be specified at the time of creation.")]),e._v(" "),a("li",[e._v("The first parameter, like a non-variable parameter function, is passed in a "),a("code",[e._v("FunctionContext*")]),e._v(".")]),e._v(" "),a("li",[e._v("The variable parameter part consists of two parts. First, an integer is passed in, which shows that there are several parameters. Later, an array of variable parameter parts is passed in.")])]),e._v(" "),a("h4",{attrs:{id:"type-correspondence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-correspondence"}},[e._v("#")]),e._v(" Type correspondence")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("UDF Type")]),e._v(" "),a("th",[e._v("Argument Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("TinyInt")]),e._v(" "),a("td",[e._v("TinyIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("SmallInt")]),e._v(" "),a("td",[e._v("SmallIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("Int")]),e._v(" "),a("td",[e._v("IntVal")])]),e._v(" "),a("tr",[a("td",[e._v("BigInt")]),e._v(" "),a("td",[e._v("BigIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("LargeInt")]),e._v(" "),a("td",[e._v("LargeIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("Float")]),e._v(" "),a("td",[e._v("FloatVal")])]),e._v(" "),a("tr",[a("td",[e._v("Double")]),e._v(" "),a("td",[e._v("DoubleVal")])]),e._v(" "),a("tr",[a("td",[e._v("Date")]),e._v(" "),a("td",[e._v("DateTimeVal")])]),e._v(" "),a("tr",[a("td",[e._v("Datetime")]),e._v(" "),a("td",[e._v("DateTimeVal")])]),e._v(" "),a("tr",[a("td",[e._v("Char")]),e._v(" "),a("td",[e._v("StringVal")])]),e._v(" "),a("tr",[a("td",[e._v("Varchar")]),e._v(" "),a("td",[e._v("StringVal")])]),e._v(" "),a("tr",[a("td",[e._v("Decimal")]),e._v(" "),a("td",[e._v("DecimalVal")])])])]),e._v(" "),a("h2",{attrs:{id:"compiling-udf-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiling-udf-functions"}},[e._v("#")]),e._v(" Compiling UDF functions")]),e._v(" "),a("h3",{attrs:{id:"compile-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-doris"}},[e._v("#")]),e._v(" Compile Doris")]),e._v(" "),a("p",[e._v("Executing "),a("code",[e._v("sh build.sh")]),e._v(" in the Doris root directory generates the corresponding "),a("code",[e._v("headers|libs")]),e._v(" in "),a("code",[e._v("output/udf/")])]),e._v(" "),a("h3",{attrs:{id:"edit-cmakelists-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-cmakelists-txt"}},[e._v("#")]),e._v(" Edit CMakeLists.txt")]),e._v(" "),a("p",[e._v("Based on the "),a("code",[e._v("headers | libs")]),e._v(" generated in the previous step, users can introduce the dependency using tools such as "),a("code",[e._v("CMakeLists")]),e._v("; in "),a("code",[e._v("CMakeLists")]),e._v(", dynamic libraries can be added by adding "),a("code",[e._v("-I|L")]),e._v(" to "),a("code",[e._v("CMAKE_CXX_FLAGS")]),e._v(", respectively. For example, in "),a("code",[e._v("be/src/udf_samples/CMakeLists.txt")]),e._v(", a "),a("code",[e._v("udf sample")]),e._v(" dynamic library is added using "),a("code",[e._v("add_library")]),e._v(" (udfsample SHARED udf_sample.cpp) "),a("code",[e._v("target_link_libraries")]),e._v("(udfsample -static-libstdc++ -static-libgcc). You need to write down all the source files involved later (no header files included).")]),e._v(" "),a("h3",{attrs:{id:"execute-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-compilation"}},[e._v("#")]),e._v(" Execute compilation")]),e._v(" "),a("p",[e._v("Create a "),a("code",[e._v("build")]),e._v(" directory under this directory and execute "),a("code",[e._v("cmake ../")]),e._v(" generate "),a("code",[e._v("Makefile")]),e._v(" under "),a("code",[e._v("build")]),e._v(", and execute "),a("code",[e._v("make")]),e._v(" to generate corresponding dynamic libraries.")]),e._v(" "),a("h2",{attrs:{id:"create-udf-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-udf-functions"}},[e._v("#")]),e._v(" Create UDF functions")]),e._v(" "),a("p",[e._v("Through the above steps, you can get a dynamic library. You need to put this dynamic library in a location that can be accessed through the HTTP protocol. Then execute the create UDF function to create a UDF inside the Doris system. You need AMDIN privileges to do this.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE [AGGREGATE] FUNCTION \n\tname ([argtype][,...])\n\t[RETURNS] rettype\n\tPROPERTIES (["key"="value"][,...])\n')])])]),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("In PROPERTIES, "),a("code",[e._v("symbol")]),e._v(" denotes the corresponding symbol for the execution of the entry function, which must be set. You can get the corresponding symbol by the "),a("code",[e._v("nm")]),e._v(" command, such as "),a("code",[e._v("nm libudfsample.so")]),e._v(", "),a("code",[e._v("grep AddUdf")]),e._v(", "),a("code",[e._v("ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4")]),e._v(".")]),e._v(" "),a("li",[e._v("In PROPERTIES, "),a("code",[e._v("object_file")]),e._v(" denotes where to download to the corresponding dynamic library. This parameter must be set.")]),e._v(" "),a("li",[e._v("name: A function belongs to a DB in the form of "),a("code",[e._v("dbName")]),e._v(". "),a("code",[e._v("funcName")]),e._v(". When "),a("code",[e._v("dbName")]),e._v(" is not specified explicitly, the DB where the current session is located is used as "),a("code",[e._v("dbName")]),e._v(".")])]),e._v(" "),a("p",[e._v("For more details, see "),a("code",[e._v("CREATE FUNCTION")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"using-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-udf"}},[e._v("#")]),e._v(" Using UDF")]),e._v(" "),a("p",[e._v("Users using UDF/UDAF must have "),a("code",[e._v("SELECT")]),e._v(" privileges for the corresponding database.")]),e._v(" "),a("p",[e._v("UDF is used in the same way as normal functions. The only difference is that the scope of built-in functions is global, while the scope of UDF is internal to DB. When the link session is inside the data, using the UDF name directly will find the corresponding UDF within the current DB. Otherwise, the user needs to display the database name of the specified UDF, such as "),a("code",[e._v("dbName")]),e._v(". "),a("code",[e._v("funcName")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"delete-udf-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-udf-functions"}},[e._v("#")]),e._v(" Delete UDF functions")]),e._v(" "),a("p",[e._v("When you no longer need UDF functions, you can delete a UDF function by using the following command, referring to "),a("code",[e._v("DROP FUNCTION")]),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);