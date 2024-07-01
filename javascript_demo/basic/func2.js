/*
函数作为构造函数在JavaScript中有很多重要的用途:

创建对象实例
最常见的用途就是使用构造函数创建特定类型的对象。通过new操作符调用构造函数可以创建一个新的对象实例,并为其设置初始属性和方法。
*/

function Person (name, age) {
  this.name = name
  this.age = age
}

const john = new Person('John', 30)
console.log(john.name) // 'John'
console.log(john.age) // 30

// 实现继承
// 在JavaScript中,构造函数可以利用原型链实现基于原型的继承。子类的构造函数可以调用父类构造函数,从而继承父类的属性和方法。

function Animal (name) {
  this.name = name
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`)
}

function Dog (name, breed) {
  Animal.call(this, name) // 继承Animal的属性
  this.breed = breed
}

// 继承Animal的方法
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

const buddy = new Dog('Buddy', 'Golden Retriever')
buddy.eat() // 'Buddy is eating.'

// 创建私有成员
// 构造函数可以用来创建私有属性和方法,这些私有成员只能在构造函数内部访问,无法在实例对象上直接访问。

function Counter () {
  let count = 0 // 私有变量

  this.increment = function () {
    count++
  }

  this.getCount = function () {
    return count
  }
}

const counter = new Counter()
counter.increment()
counter.increment()
console.log(counter.getCount()) // 2

// 实现模块化设计
// 构造函数可以用于实现模块化设计,将相关的功能封装在一个对象内部,提供公共API供外部访问。这种模式被称为模块模式。

const Counter = (function () {
  let count = 0

  function increment () {
    count++
  }

  function getCount () {
    return count
  }

  return {
    increment: increment,
    getCount: getCount
  }
})()

Counter.increment()
Counter.increment()
console.log(Counter.getCount()) // 2
