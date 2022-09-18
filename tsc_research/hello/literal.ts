type Adder = (a: number, b: number) => number;

const add: Adder = (a, b) => a + b;

const x = add(1, 2);
console.log(x);