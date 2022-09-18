type Adder = (a: number, b: number) => number;

const add: Adder = (a, b) => a + b;

const x = add(1, 2);
console.log(x);

let a = "abc";
const b = "abc";
console.log(a, b);

type Direction = 'UP'|'DOWN';

function move(dir: Direction) {
    console.log(dir);
}

move("UP");
//move("aaa");// err