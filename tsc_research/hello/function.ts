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

function greet(person: any): unknown {
    if (typeof person === "string") {
        return `hi ${person}`
    } else if (Array.isArray(person)) {
        return person.map(name => `Hello ${name}`)
    }
    throw new Error("Unable to run function")
}
console.log(greet(suits[0]));
console.log(greet(suits));