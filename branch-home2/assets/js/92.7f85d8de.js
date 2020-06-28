(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{482:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"date-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[e._v("#")]),e._v(" date_format")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("'WARCHAR DATE'U FORMAT (DATETIME DATE, WARCHAR Format)'")]),e._v(" "),a("p",[e._v("Convert the date type to a bit string according to the format type.\nCurrently supports a string with a maximum 128 bytes and returns NULL if the length of the return value exceeds 128")]),e._v(" "),a("p",[e._v("The date parameter is the valid date. Format specifies the date/time output format.")]),e._v(" "),a("p",[e._v("The formats available are:")]),e._v(" "),a("p",[e._v("% a | Abbreviation for Sunday Name")]),e._v(" "),a("p",[e._v("% B | Abbreviated Monthly Name")]),e._v(" "),a("p",[e._v("% C | Month, numerical value")]),e._v(" "),a("p",[e._v("% D | Sky in the Moon with English Prefix")]),e._v(" "),a("p",[e._v("% d | Monthly day, numerical value (00-31)")]),e._v(" "),a("p",[e._v("% e | Monthly day, numerical value (0-31)")]),e._v(" "),a("p",[e._v("% f | microseconds")]),e._v(" "),a("p",[e._v("% H | Hours (00-23)")]),e._v(" "),a("p",[e._v("% h | hour (01-12)")]),e._v(" "),a("p",[e._v("% I | Hours (01-12)")]),e._v(" "),a("p",[e._v("% I | min, numerical value (00-59)")]),e._v(" "),a("p",[e._v("% J | Days of Year (001-366)")]),e._v(" "),a("p",[e._v("% k | hours (0-23)")]),e._v(" "),a("p",[e._v("% L | Hours (1-12)")]),e._v(" "),a("p",[e._v("% M | Moon Name")]),e._v(" "),a("p",[e._v("% m | month, numerical value (00-12)")]),e._v(" "),a("p",[e._v("%p | AM or PM")]),e._v(" "),a("p",[e._v("% R | Time, 12 - hour (hh: mm: SS AM or PM)")]),e._v(" "),a("p",[e._v("% S | seconds (00-59)")]),e._v(" "),a("p",[e._v("% s | seconds (00-59)")]),e._v(" "),a("p",[e._v("% T | Time, 24 - hour (hh: mm: ss)")]),e._v(" "),a("p",[e._v("% U | Week (00-53) Sunday is the first day of the week")]),e._v(" "),a("p",[e._v("% U | Week (00 - 53) Monday is the first day of the week")]),e._v(" "),a("p",[e._v("% V | Week (01-53) Sunday is the first day of the week, and% X is used.")]),e._v(" "),a("p",[e._v("% v | Week (01 - 53) Monday is the first day of the week, and% x is used")]),e._v(" "),a("p",[e._v("% W | Sunday")]),e._v(" "),a("p",[e._v("% w | Weekly day (0 = Sunday, 6 = Saturday)")]),e._v(" "),a("p",[e._v("% X | Year, where Sunday is the first day of the week, 4 places, and% V use")]),e._v(" "),a("p",[e._v("% X | year, of which Monday is the first day of the week, 4 places, and% V")]),e._v(" "),a("p",[e._v("% Y | Year, 4")]),e._v(" "),a("p",[e._v("% Y | Year, 2")]),e._v(" "),a("p",[e._v("%%  | Represent %")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")])])]),a("p",[e._v("##keyword\nDATE_FORMAT,DATE,FORMAT")])])}),[],!1,null,null,null);t.default=r.exports}}]);