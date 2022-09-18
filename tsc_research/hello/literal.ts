type Adder = (a: number, b: number) => number;

const add: Adder = (a, b) => a + b;

const x = add(1, 2);
console.log(x);

let a = "abc";
const b = "abc";
console.log(a, b);

type Direction = 'UP' | 'DOWN';

function move(dir: Direction) {
    console.log(dir);
}

move("UP");

//move("aaa");// err

interface Config {
    size: 'small' | 'big';
    isEnable: true | false
    margin: 0 | 1 | 2;
    getSize: (this) => string;
}

let i1: Config = {
    size: "small",
    isEnable: true,
    margin: 1,
    getSize: (): string => {
        return this.size;
    }
}
console.log(i1.isEnable, i1.getSize());