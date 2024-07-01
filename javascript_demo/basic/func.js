// 1. function

function add (a, b) {
  return a + b
}
function foo () {
  console.log('foo')
}
foo()
console.log(add(1, 2))

// 2. 匿名函数

// 3.函数表达式
let f1 = function () {
  console.log('n')
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

function sayHello () {
  console.log('Hello!')
}

console.log(sayHello.toString()) // 输出函数的源代码
// 在上面的例子中,我们调用了 sayHello 函数对象的 toString() 方法,它是从 Object 原型上继承而来的。

/*
函数可以作为构造函数创建对象
*/
function Person (name) {
  this.name = name
}
const john = new Person('John')
console.log(john.name) // 输出 'John'

/*
函数也有原型
每个函数对象都有一个 prototype 属性,它是一个对象,用于实现基于原型的继承。
*/
function Person2 () {}

Person2.prototype.sayHello = function () {
  console.log('Hello!')
}

const john2 = new Person2()
john2.sayHello() // 输出 'Hello!'
// 在上面的例子中,我们为 Person 函数对象的原型添加了一个 sayHello 方法,所有基于 Person 创建的实例对象都可以访问这个方法。
