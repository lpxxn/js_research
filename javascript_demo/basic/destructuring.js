// 解构赋值语法(Destructuring assignment syntax)通常被称为"Destructuring"。

// 对象解构
const person = { name: 'li', age: 11 }
console.log(person)
const { name, age } = person // 相当于 const name = person.name  const age = person.age
console.log(`name: ${name}, age: ${age}`)
// 数组解构
const arr = [1, 2, 3]
const [item1, item2] = arr
console.log(`item1: ${item1}, item2: ${item2}`)

/*
在 React 中,我们经常使用对象解构来获取组件的 props,就像你之前看到的例子:

function MyComponent({ prop1, prop2 }) {
  // ...
}

等同于:
function FilterableProductTable(props) {
  const products = props.products;
  // ...
}
*/
