ts-node TestShape.ts

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 
大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。
tsc TestShape.ts
使用 tsc 命令编译以上代码（AMD）：
tsc --module amd TestShape.ts


使用 tsc 命令编译以上代码（Commonjs）：
tsc --module commonjs TestShape.ts


tsc --help --module
