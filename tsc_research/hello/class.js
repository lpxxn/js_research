var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(weight) {
        this.type = 'Animal';
        this.weight = weight;
    }
    Animal.prototype.say = function (name) {
        console.log("i'm ".concat(name));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof~!");
    };
    Dog.prototype.getType = function () {
        return this.type;
    };
    return Dog;
}(Animal));
var dog = new Dog(12);
dog.bark();
dog.say("A");
console.log(dog.type);
console.log(dog.getType());
var Son = /** @class */ (function () {
    function Son(firstName) {
        this.firstName = firstName;
    }
    return Son;
}());
var GrandSon = /** @class */ (function (_super) {
    __extends(GrandSon, _super);
    function GrandSon(firstName) {
        return _super.call(this, firstName) || this;
    }
    return GrandSon;
}(Son));
// 可以直接通过类访问静态属性
// class MyArray {
//     static displayName = "MyArray";
//     static IsArray(obj unknown) {
//         return Obj
// }
// }
