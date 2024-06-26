

## export 

在 JavaScript 模块系统中,`export default` 和 `export` 都是用于导出模块内部的变量、函数或类,但它们的用法和行为有一些区别。

1. **导出方式**:

- `export default` 在一个模块中只能有一个默认导出。它通常用于导出模块的主要功能或对象。
- `export` 可以导出多个命名项目,每个导出项都需要一个标识符。

2. **导入方式**:

- 导入默认导出时,可以使用任意名称作为本地绑定。
- 导入命名导出时,必须使用与导出时相同的名称,或者使用解构赋值的语法。

3. **示例**:

```javascript
// 文件 module.js
export default function add(a, b) {
  return a + b;
}

export const PI = 3.14159;
export const sqrt = Math.sqrt;
```

```javascript
// 导入默认导出
import add from './module.js';
console.log(add(2, 3)); // 输出 5

// 导入命名导出
import { PI, sqrt } from './module.js';
console.log(PI); // 输出 3.14159
console.log(sqrt(16)); // 输出 4
```

4. **混合使用**:

在同一个模块中,你可以同时使用 `export default` 和 `export` 导出不同的项目。但是,一个模块只能有一个默认导出。

总的来说,`export default` 更适合导出模块的主要功能或对象,而 `export` 则更适合导出多个相关的项目。选择哪种方式取决于你的具体需求和代码组织方式。