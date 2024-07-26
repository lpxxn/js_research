
// 继承Animal的方法
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog



这两行代码是在 JavaScript 中实现原型继承的一种常见模式。让我们逐行解析：

Dog.prototype = Object.create(Animal.prototype)

这行代码的作用是让 Dog 继承 Animal 的原型。

Object.create(Animal.prototype) 创建一个新对象，其原型指向 Animal.prototype。
将这个新创建的对象赋值给 Dog.prototype，使得 Dog 的原型链上包含了 Animal 的原型。
这样，Dog 的实例就可以访问 Animal 原型上的方法和属性。
Dog.prototype.constructor = Dog

这行代码修复了继承过程中 constructor 属性的指向问题。

在第一步中，当我们重写 Dog.prototype 时，丢失了原有的 constructor 属性。
这行代码将 Dog.prototype.constructor 重新指向 Dog 函数本身。
这确保了 Dog 的实例的 constructor 属性正确地指向 Dog 构造函数。
综合效果：

Dog 继承了 Animal 的所有原型方法和属性。
Dog 的实例可以使用 Animal 原型上的方法。
Dog 保持了自己的 constructor 引用，这对于类型检查和实例创建很重要。