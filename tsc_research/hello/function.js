// 重载
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
var suits = ["hearts", "spades", "clubs", "diamonds"];
function greet(person) {
    if (typeof person === "string") {
        return "hi ".concat(person);
    }
    else if (Array.isArray(person)) {
        return person.map(function (name) { return "Hello ".concat(name); });
    }
    throw new Error("Unable to run function");
}
console.log(greet(suits[0]));
console.log(greet(suits));
/*
在typescript中有两种顶级类型(any 与 unknown)，那它们两者之间有什么区别呢？
1.任何类型都可以是any类型，any类型就相当于是免检标签，给了开发者很大的自由，typescript允许any类型的值进行任何操作，对它一路绿灯。

 */
var score = 124;
var num = Math.round(score);
/*
2.任何类型也都可以是unknown类型，但与any完全相反，unknown类型就像是typescript给打上了一个重点检查的标签。在没有对它进行类型检查之前，ubnknow类型的变量是不能进行任何操作的。

let score2: unknown = 1234;
let num2 = Math.round(score2) // error f type 'unknown' is not assignable to parameter of type 'number'.

 */
var score2 = 1234;
if (typeof score2 === "number") {
    var num2 = Math.round(score2);
}
// 断言
var score3 = 87.5;
var num3 = Math.round(score3);
// 或
var num4 = Math.round(score3);
// 尽量使用使用类型更安全的 unknown
// function say(this: Window, name:string) {
//     console.log(this.name);
// }
// global.say = say;
// window.say('hi');
function convert(x) {
    if (typeof x === "string") {
        return Number(x);
    }
    if (typeof x === "number") {
        return String(x);
    }
    return -1;
}
console.log((convert('1')));
console.log((convert(1)));
console.log((convert(null)));
function convert2(x) {
    if (typeof x === "string") {
        return Number(x);
    }
    if (typeof x === "number") {
        return String(x);
    }
    return -1;
}
console.log((convert2('1')));
console.log((convert2(1)));
console.log((convert2(null)));
