var message = "Hello World";
var x = message.length;
message.toUpperCase()
console.log(x);
console.log(message);

// JavaScript 对象就是一个 name:value 集合。
person = new Object();
person.firstName = "john";
person.lastName = "Doe";
person.age = 13;
person.changeAge = function (a) {
    this.age = a;
}
person.changeAge(123);
console.log(person.age);
person2 = {firstName: "john", lastName: "Doe", age: 123};

console.log("x in person");
for (x in person) {
    console.log(x);
}
console.log("end x in person");

// 把方法添加到 JavaScript 对象, 方法只不过是附加在对象上的函数。在构造器函数内部定义对象的方法：

function person3(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.cn=changeName;
    function changeName(name)
    {
        this.lastname=name;
    }
    this.cn2 = function (name) {
        this.firstname = name;
    }
}

person3Obj = new person3("a", "b", 1);
person3Obj.cn("ccc");
console.log(person3Obj);

person3Obj.cn2("cdddd");
console.log(person3Obj);
