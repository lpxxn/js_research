let arr = [1, 2, 3]
let arr2 = arr.map(v => v + 1)
let obj = { a: 1, b: 2 }

// 解构
let [e, d] = arr
let { a, b, c } = obj
console.log(e, d, a, b, c)

let message = 'Hello'
let [a1, b1] = message
let [x, y, ...z] = message
console.log(a1, b1)
console.log(x, y, z)

/*
解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性值从对象/数组中取出,赋值给其他变
量。

实际上，结构赋值就是将复杂的结构分解为简单的部分。解构赋值语法可以用于变量声明或者变量赋值。除此之外，还可以使用嵌套的解构赋值语法来处理嵌套结构。

二. 解构分类
根据MDN对解构赋值的定义，我们可以将解构赋值分为两大类：

对象解构
数组解构
三. 对象的解构赋值
1.对象中获取值
对象解构又称为对象属性分配模式，它允许我们将对象的属性值分配给相应的变量。它有两种写法：

let obj =  {x: 1, y: 2, z: 3};

let {x, y, z} = obj;
console.log(x, y, z)

let {x: a, y: b, z: c} = obj;  // 别名
console.log(a, b, c)

在使用数组解构时，实际上会使用迭代器将所需要的值与结构源分开。因此，我们可以对可迭代值使用数组结构，包括字符串、数组、集合、函数映射、DOM元素。我们还可以将解构赋值与扩展运算符结合使用。
1.字符串
let message = 'Hello';
let [a, b] = message;
let [x, y, ...z] = message;

console.log(a, b);        // H e
console.log(x, y, z);     // H e ['l', 'l', 'o']
2.数组
let numbers = [1, 2, 3];
let [x, y, z] = numbers;

console.log(x, y, z);    // 1 2 3
3.集合
let set = new Set().add('foo').add('bar');
let [a, b] = set;

console.log(a, b);      // foo bar
4.Map
let map = new Map().set('a', 1).set('b', 2);
let [x, y] = map;

console.log(x, y);    // ["a", 1] ["b", 2]
 */
