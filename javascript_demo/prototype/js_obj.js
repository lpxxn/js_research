var message = "Hello World"
var x = message.length
message.toUpperCase()
console.log(x)
console.log(message)

// JavaScript 对象就是一个 name:value 集合。
person = new Object()
person.firstName = "john"
person.lastName = "Doe"
person.age = 13
person.changeAge = function (a) {
    this.age = a
}
person.changeAge(123)
console.log(person.age)
person2 = { firstName: "john", lastName: "Doe", age: 123 }

console.log("x in person")
for (x in person) {
    console.log(x)
}
console.log("end x in person")

// 把方法添加到 JavaScript 对象, 方法只不过是附加在对象上的函数。在构造器函数内部定义对象的方法：
// 下面这种的方式叫做 对象构造器函数。
// 通过 new 关键词调用构造器函数可以创建相同类型的对象
function person3 (firstname, lastname, age) {
    this.firstName = firstname
    this.lastName = lastname
    this.age = age
    this.cn = changeName
    function changeName (name) {
        this.lastname = name
    }
    this.cn2 = function (name) {
        this.firstname = name
    }
}
p3 = person3("a", "b", 1)
console.log(p3)

// 使用 prototype 为构造器添加新属性
person3.prototype.nationality = "En"

person3Obj = new person3("a", "b", 1)
person3Obj.cn("ccc")
console.log("person3Obj:", person3Obj)
console.log(person3Obj.nationality)
person3Obj.vvv = "abcd"
person3Obj.zzz = function () {
    console.log(this.vvv)
}
person3Obj.zzz()

person3Obj.cn2("cdddd")
console.log(person3Obj)
debugger
console.log("person4 -----------")
function person4 (firstname, lastname, age, eyecolor) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.eyecolor = eyecolor
    return [this.firstname, this.lastname, this.age, this.eyecolor, this]
}

var myFather = new person4("John", "Doe", 50, "blue")
var myMother = person4("Sally", "Rally", 48, "green")
console.log("myFather: ", myFather) // this 输出一个 person 对象
console.log("myMother: ", myMother) // this 输出 window 或者global 对象
console.log(myFather[4].firstname)
// myMother是global所以 firstname在global里也有
console.log(myMother[4].person2)
console.log(myMother[4].firstname)
console.log(eyecolor)