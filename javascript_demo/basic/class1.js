class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log(`name: ${this.name}, age: ${this.age}`)
  }
}

// 类的继承
class Employee extends Person {
  constructor (name, age, salary) {
    super(name, age)
    this.salary = salary
  }
  greet () {
    console.log(`name: ${this.name}, age: ${this.age}, salary: ${this.salary}`)
  }
}
const person = new Person('John', 30)
person.greet()

const join = new Employee('John', 30, 1000)
join.greet()

// 类还可以定义 getter 和 setter 方法,用于控制属性的访问和修改。
class Rectangle {
  constructor (width, height) {
    this._width = width
    this._height = height
  }
  get area () {
    // getter
    return this._width * this._height
  }
  set width (value) {
    // setter
    this._width = value
  }
  set height (value) {
    // setter
    this._height = value
  }
}
const rect = new Rectangle(10, 20)
console.log(rect.area)
rect.width = 100
rect.height = 200
console.log(rect.area)
