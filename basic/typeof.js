
a1 = typeof "abcdef"
console.log(a1);

a1 = typeof 1
console.log(a1);

a1 = typeof [1, 2, 3]
console.log(a1);

a1 = typeof {name: "a"}
console.log(a1);

// null 为对象
// undefined 为变量

var p = null
console.log(typeof p)

var p = undefined;
console.log(typeof p);

console.log("null", typeof null);
console.log("undefined", typeof undefined);

console.log("null == undefined", null == undefined);
console.log("null === undefined", null === undefined);
