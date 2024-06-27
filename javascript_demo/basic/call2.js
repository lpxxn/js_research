/*
Function.prototype.call 方法可以接受多个参数。call 方法的第一个参数是函数调用时的 this 值，其后的参数会作为函数的参数传递给被调用的函数。

func.call(thisArg, arg1, arg2, ...);

	•	thisArg：在函数运行时使用的 this 值。
	•	arg1, arg2, ...：传递给函数的参数。

call 方法允许你显式地指定函数调用时的 this 值，并且可以传递多个参数给函数。这使得 call 方法非常灵活和强大，能够在不同的上下文中调用函数并传递任意数量的参数。
*/

function example (a, b, c) {
  console.log(a, b, c)
}
// 在这个示例中，我们使用 call 方法调用了 example 函数。this 值设置为 null，传递的参数是 1，2 和 3。

example.call(null, 1, 2, 3) // 输出: 1 2 3
example.call(null, 1) // 输出: 1 undefined undefined
example.call(null, 1, 2, 3, 4, 5) // 输出: 1 2 3

function greet (greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation)
}

const person = {
  name: 'Alice'
}

// 使用 call 方法调用 greet 函数
greet.call(person, 'Hello', '!') // 输出: Hello, Alice!
// 在这个例子中，greet 函数使用 call 方法调用，并传入了 person 对象作为 this 值，以及两个参数 greeting 和 punctuation。结果是输出了 “Hello, Alice!”。
