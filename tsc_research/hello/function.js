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
