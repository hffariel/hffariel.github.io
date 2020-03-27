(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{289:function(a,e,t){"use strict";t.r(e);var n=t(28),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"group-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[a._v("#")]),a._v(" GROUP BY")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v("GROUP BY "),t("code",[a._v("GROUPING SETS")]),a._v(" ｜ "),t("code",[a._v("CUBE")]),a._v(" ｜ "),t("code",[a._v("ROLLUP")]),a._v(" 是对 GROUP BY 子句的扩展，它能够在一个 GROUP BY 子句中实现多个集合的分组的聚合。其结果等价于将多个相应 GROUP BY 子句进行 UNION 操作。")]),a._v(" "),t("p",[a._v("GROUP BY 子句是只含有一个元素的 GROUP BY GROUPING SETS 的特例。\n例如，GROUPING SETS 语句：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n")])])]),t("p",[a._v("其查询结果等价于：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n")])])]),t("p",[t("code",[a._v("GROUPING(expr)")]),a._v(" 指示一个列是否为聚合列，如果是聚合列为0，否则为1")]),a._v(" "),t("p",[t("code",[a._v("GROUPING_ID(expr [ , expr [ , ... ] ])")]),a._v(" 与GROUPING 类似， GROUPING_ID根据指定的column 顺序，计算出一个列列表的 bitmap 值，每一位为GROUPING的值. GROUPING_ID()函数返回位向量的十进制值。")]),a._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n")])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("p",[t("code",[a._v("groupSet")]),a._v(" 表示 select list 中的列，别名或者表达式组成的集合 "),t("code",[a._v("groupSet ::= { ( expr [ , expr [ , ... ] ] )}")])]),a._v(" "),t("p",[t("code",[a._v("expr")]),a._v("  表示 select list 中的列，别名或者表达式")]),a._v(" "),t("h3",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[a._v("#")]),a._v(" Note")]),a._v(" "),t("p",[a._v("doris 支持类似PostgreSQL 语法, 语法实例如下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n")])])]),t("p",[t("code",[a._v("ROLLUP(a,b,c)")]),a._v(" 等价于如下"),t("code",[a._v("GROUPING SETS")]),a._v(" 语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")])])]),t("p",[t("code",[a._v("CUBE ( a, b, c )")]),a._v(" 等价于如下"),t("code",[a._v("GROUPING SETS")]),a._v(" 语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("p",[a._v("下面是一个实际数据的例子")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("p",[a._v("GROUP, GROUPING, GROUPING_ID, GROUPING_SETS, GROUPING SETS, CUBE, ROLLUP")])])}),[],!1,null,null,null);e.default=s.exports}}]);