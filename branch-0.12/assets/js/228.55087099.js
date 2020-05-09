(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{618:function(e,a,t){"use strict";t.r(a);var s=t(33),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"group-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[e._v("#")]),e._v(" GROUP BY")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("GROUP BY "),t("code",[e._v("GROUPING SETS")]),e._v(" ｜ "),t("code",[e._v("CUBE")]),e._v(" ｜ "),t("code",[e._v("ROLLUP")]),e._v(" is an extension to  GROUP BY clause. This syntax lets you define multiple groupings in the same query. GROUPING SETS produce a single result set that is equivalent to a UNION ALL of differently grouped rows\nFor example GROUPING SETS clause:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n")])])]),t("p",[e._v("This statement is equivalent to:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n")])])]),t("p",[t("code",[e._v("GROUPING(expr)")]),e._v(" indicates whether a specified column expression in a GROUP BY list is aggregated or not. GROUPING returns 1 for aggregated or 0 for not aggregated in the result set.")]),e._v(" "),t("p",[t("code",[e._v("GROUPING_ID(expr [ , expr [ , ... ] ])")]),e._v(" describes which of a list of expressions are grouped in a row produced by a GROUP BY query. The GROUPING_ID function simply returns the decimal equivalent of the binary value formed as a result of the concatenation of the values returned by the GROUPING functions.")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n")])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("p",[t("code",[e._v("groupSet")]),e._v(" is a set of expression or column  or it's alias appearing in the query block’s SELECT list. "),t("code",[e._v("groupSet ::= { ( expr [ , expr [ , ... ] ] )}")])]),e._v(" "),t("p",[t("code",[e._v("expr")]),e._v("  is expression or column  or it's alias appearing in the query block’s SELECT list.")]),e._v(" "),t("h3",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("p",[e._v("doris supports PostgreSQL like syntax, for example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n")])])]),t("p",[t("code",[e._v("ROLLUP(a,b,c)")]),e._v(" is equivalent to "),t("code",[e._v("GROUPING SETS")]),e._v(" as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")])])]),t("p",[t("code",[e._v("CUBE ( a, b, c )")]),e._v(" is equivalent to "),t("code",[e._v("GROUPING SETS")]),e._v(" as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("This is a simple example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("GROUP, GROUPING, GROUPING_ID, GROUPING_SETS, GROUPING SETS, CUBE, ROLLUP")])])}),[],!1,null,null,null);a.default=n.exports}}]);