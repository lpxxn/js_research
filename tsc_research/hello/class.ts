class Animal {
    weight: number;
    type = 'Animal';

    constructor(weight: number) {
        this.weight = weight;
    }

    say(name: string) {
        console.log(`i'm ${name}`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`Woof~!`);
    }

    getType(): string {
        return this.type
    }
}

const dog = new Dog(12);
dog.bark();
dog.say("A");
console.log(dog.type)
console.log(dog.getType())

class Son {
    public firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

class GrandSon extends Son {
    constructor(firstName: string) {
        super(firstName);
    }
}

// 可以直接通过类访问静态属性
// class MyArray {
//     static displayName = "MyArray";
//     static IsArray(obj unknown) {
//         return Obj
// }
// }