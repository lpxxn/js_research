// this 关键字不具有变量那样的作用机制，除了箭头函数，嵌套函数不会继承包含函数的 this 值。如果嵌套函数（非箭头函数）被当做函数来调用，那么他的 this 值就是全局对象。

let o = {
  m () {
    let self = this
    console.log('m() this is ', this, 'self is o: ', self === o)
    f()
    function f () {
      console.log(self)
      console.log(self === o)
      console.log('f() this is ', this) // global
      console.log('f() this === o ', this === o)
    }
  }
}

o.m()

console.log('global this is ', this)
console.log('----------------------')
console.log(
  'es6及以后的版本，把嵌套函数 f 转换成箭头函数，箭头数数可以继承 this,箭头函数内部的 this 值就是外部函数的 this 值'
)
let o2 = {
  m () {
    let self = this
    console.log('m() this is ', this, 'self is o: ', self === o2)
    let f = () => {
      console.log(self)
      console.log(self === o2)
      console.log('f() this is ', this) // this is o2
      console.log('f() this === o ', this === o2)
    }
    // 函数表达式不像函数声明语句那样会提升，所以需要在表达式之后调用函数
    f()
    return 123
  }
}

o2.m()
