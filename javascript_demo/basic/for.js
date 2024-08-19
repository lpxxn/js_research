let o = { a: 1, b: 'name', x: 1 }

for (let p in o) {
  console.log('p:', p, 'o[p]:', o[p])
}

let a = [], i = 0
for (a[i++] in o);
console.log('a:', a)
for (let i in a) {
  console.log('i:', i, 'a[i]:', a[i])
}

console.log('end for in ')

console.log('for of Object.keys:---------')
// for (let p of o) { // error o is not iterable
for (let p of Object.keys(o)) {
  console.log('p:', p, 'o[p]:', o[p])
}

console.log('Object.entries:---------')
for (let [key, value] of Object.entries(o)) {
  console.log('key:', key, 'value', value)
}

// 在浏览器的 console 里可以试
// try {
//   let n = Number(prompt("enter a integer", "0"))
//   console.log('n:', n)
// } catch (err) {
//   console.log('err:', err)
// }