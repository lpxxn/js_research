class Student {
  constructor (name, age) {
    this.name = name
    this.age = age
    this.score = [1, 2, 3, 4]
  }
}

Student.prototype.myMap = function (callback, thisArg) {
  // 检查 this 是否为 null 或 undefined
  if (this == null) {
    throw new TypeError('Array.prototype.myMap called on null or undefined')
  }

  // 检查 callback 是否为函数
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  // 将 this 转换为对象
  const O = Object(this)

  // 获取数组的长度
  const len = O.score.length >>> 0 // 保证 len 是一个正整数

  // 创建一个新数组来存放结果
  const result = new Array(len)

  // 处理 thisArg，如果提供了则使用，否则为 undefined
  const T = thisArg

  // 遍历数组并调用 callback
  for (let i = 0; i < len; i++) {
    const kValue = O.score[i]
    const mappedValue = callback.call(T, kValue, i, O)
    result[i] = mappedValue
  }

  // 返回新数组
  return result
}

const s1 = new Student('lpxxn', 18)

console.log(
  s1.myMap(function (item) {
    return item * 2
  })
)
console.log(
  s1.myMap((v, i, obj) => {
    console.log(v, i, obj)
    return v * 2
  })
)

console.log(
  s1.myMap((v, i, obj, obj2) => {
    console.log(v, i, obj, obj2)
    return v * 2
  })
)

console.log(5 >>> 0) // 输出: 5
console.log(-5 >>> 0) // 输出: 4294967291 (负数变成一个大的无符号整数)
console.log(3.5 >>> 0) // 输出: 3 (非整数被转换为整数)
console.log(undefined >>> 0) // 输出: 0
console.log(null >>> 0) // 输出: 0

/*
O.length >>> 0 是一种确保 length 是非负整数的技巧。让我们逐步解释这个表达式的作用和原理。

背景

在 JavaScript 中，数组的长度 (length) 属性是一个无符号32位整数。理论上，length 应该是一个非负整数，但在实际使用中，可能会出现一些意外情况，例如传递的对象不是真正的数组，或者 length 属性被手动设置为负数或非整数值。为了确保 length 是一个非负整数，可以使用 >>> 操作符。

位操作符 >>>

>>> 是 JavaScript 中的无符号右移位操作符，它将操作数右移并用零填充左侧。这会将操作数转换为32位无符号整数。

应用在 O.length 上

假设 O 是一个数组或类数组对象，O.length 返回的是它的长度属性值。通过使用 >>> 0，我们可以确保这个值是一个非负整数：

	•	如果 O.length 是正整数：>>> 0 不会改变它的值。
	•	如果 O.length 是负数：>>> 0 会将它转换为一个大的无符号整数。
	•	如果 O.length 是非整数：JavaScript 会首先将它转换为整数，然后再应用 >>> 0。
	•	如果 O.length 是 undefined 或 null：JavaScript 会将其转换为 0。

*/
