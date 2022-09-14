// 重载

function disp(s1:string): void;
function disp(n1:number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}

disp("abc");
disp(1, "xyz");


let suits = ["hearts", "spades", "clubs", "diamonds"];

function greet(person: string): string;
function greet(psrson: string[]): string[];

function greet(person: unknown): unknown {
    if (typeof person === "string") {
        return `hi ${person}`
    } else if (Array.isArray(person)) {
        return person.map(name => `Hello ${name}`)
    }
    throw new Error("Unable to run function")
}
console.log(greet(suits[0]));
console.log(greet(suits));
/*
在typescript中有两种顶级类型(any 与 unknown)，那它们两者之间有什么区别呢？
1.任何类型都可以是any类型，any类型就相当于是免检标签，给了开发者很大的自由，typescript允许any类型的值进行任何操作，对它一路绿灯。

 */

let score: any = 124;
let num = Math.round(score);
/*
2.任何类型也都可以是unknown类型，但与any完全相反，unknown类型就像是typescript给打上了一个重点检查的标签。在没有对它进行类型检查之前，ubnknow类型的变量是不能进行任何操作的。

let score2: unknown = 1234;
let num2 = Math.round(score2) // error f type 'unknown' is not assignable to parameter of type 'number'.

 */
let score2: unknown = 1234;
if (typeof score2 === "number") {
    let num2 = Math.round(score2)
}

// 断言
let score3: unknown = 87.5;
let num3 = Math.round(score3 as number);
// 或
let num4 = Math.round(<number>score3);
// 尽量使用使用类型更安全的 unknown