//声明文件不包含实现，它只是类型声明，把声明文件加入到 TypeScript 中：
/// <reference path = "Calc.d.ts" />
var obj = new Runoob.Calc();
console.log(obj.doSum(10))

// tsc CalcTest.ts //  TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// obj.doSum("aaa")