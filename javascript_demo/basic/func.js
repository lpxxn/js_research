

// 1. function

function add (a, b) {
  return a + b
}
function foo () {
  console.log("foo")
}
foo()
console.log(add(1, 2))

// 2. 匿名函数

// 3.函数表达式
let f1 = function () {
  console.log("n")
}

f1()

// 4 箭头函数
let f2 = () => console.log('arrow')
f2()

let f3 = (a, b) => a + b
console.log(f3(1, 3))

// 4 构造函数 new Function
let sum = new Function('a', 'b', 'return a + b')
console.log(sum(1, 2))


