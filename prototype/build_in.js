x1 = new Object();
x2 = new String("aaaa");
x2.concat("abcdef");
console.log(x2);
x3 = new Number(123);
var x4 = new Boolean();   // 一个新的 Boolean 对象
var x5 = new Array();     // 一个新的数组对象
var x6 = new RegExp();    // 一个新的 RegExp 对象
var x7 = new Function();  // 一个新的函数对象
var x8 = new Date();      // 一个新的日期对象
/*
正如以上所见，JavaScript 提供原始数据类型字符串、数字和布尔的对象版本。但是并无理由创建复杂的对象。原始值快得多！
请使用对象字面量 {} 代替 new Object()。
请使用字符串字面量 "" 代替 new String()。
请使用数值字面量代替 Number()。
请使用布尔字面量代替 new Boolean()。
请使用数组字面量 [] 代替 new Array()。
请使用模式字面量代替 new RexExp()。
请使用函数表达式 () {} 代替 new Function()。
实例

 */
var x1 = {};            // 新对象
var x2 = "";            // 新的原始字符串
var x3 = 0;             // 新的原始数值
var x4 = false;         // 新的原始布尔值
var x5 = [];            // 新的数组对象
var x6 = /()/           // 新的正则表达式对象
var x7 = function(){};  // 新函数对象

var myFunc = new Function("a", "b", "return a +b");
console.log(myFunc(1, 2));
