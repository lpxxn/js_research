obj1 = {
  name: 'Mark',
  age: 18,
  extra: {
    height: 180,
    weight: 60,
    sex: 'male'
  }
}

obj2 = {
  ...obj1,
  extra: {
    ...obj1.extra,
    height: 1999
  }
}
console.log(obj2)

obj3 = {
  ...obj1
}

console.log(obj3)

obj4 = {
  ...obj1,
  extra: {
    height: 1999
  }
}
console.log(obj4)
