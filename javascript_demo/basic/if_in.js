const person = {
  name: 'John',
  age: 30
}

console.log('name' in person) // true
console.log('age' in person) // true
console.log('address' in person) // false

console.log('toString' in person) // true

// in 操作符也可以用于数组,用来检查某个索引是否存在于数组中。
// 在数组中使用 in 操作符时,它会检查指定的索引是否存在于数组中,而不是检查属性名称。

let arr = [1, 2, 3]

console.log(0 in arr) // true
console.log(1 in arr) // true
console.log(2 in arr) // true
console.log(3 in arr) // false

//但是,需要注意的是,in 操作符不会区分数组的稀疏区域。即使数组中某些索引位置没有值,in 操作符也会将其视为存在。
console.log('-------------------in-----------------------')
arr = [10, , 30]

console.log(0 in arr) // 输出 true
console.log(1 in arr) // 输出 true
console.log(2 in arr) // 输出 true
// 因此,如果你想检查某个索引位置是否真正存在值,最好使用数组的 hasOwnProperty 方法或者直接访问该索引位置的值并进行判断。
console.log('-------------------hasOwnProperty-----------------------')
console.log(arr.hasOwnProperty(0)) // 输出 true
console.log(arr.hasOwnProperty(1)) // 输出 false
console.log(arr.hasOwnProperty(2)) // 输出 true
console.log(arr.hasOwnProperty(3)) // 输出 false
console.log(arr[0] === undefined)
console.log(arr[1] === undefined)
