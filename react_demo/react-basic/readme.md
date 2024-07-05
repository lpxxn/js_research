```
npx create-react-app react-basic


https://pnpm.io/zh/6.x/cli/dlx
pnpm dlx
从源中获取包而不将其安装为依赖项，热加载，并运行它公开的任何默认命令二进制文件。

pnpm dlx 是 pnpm 包管理器提供的一个命令，用于临时执行依赖包中的二进制文件。它类似于 npx 的功能，可以帮助你在不全局安装包的情况下，执行包中的可执行文件。

以下是 pnpm dlx 的几个用途和示例：

1. 临时执行包中的命令

假设你想要使用 create-react-app 来创建一个新的 React 项目，你可以使用以下命令：
pnpm dlx create-react-app my-app
这条命令会下载 create-react-app 包并执行它，但不会将它安装到全局环境中。
. 指定包版本

你可以指定某个版本的包来执行。例如，运行特定版本的 create-react-app：
pnpm dlx create-react-app@4.0.3 my-app
使用多包命令
你还可以在一个命令中使用多个包。例如，使用 prettier 和 eslint 格式化代码：
pnpm dlx prettier-eslint --write "src/**/*.js"
好处

	•	避免全局安装：无需全局安装包，减少全局依赖管理的复杂度。
	•	隔离执行环境：每次执行都会临时下载包并运行，不会污染全局环境。
	•	版本控制：可以轻松指定和使用不同版本的包。
  
pnpm dlx create-react-app react-basic2
```

du -sh
npm install tar@latest -g
npm install svgo@latest -g

npm start

pnpm install
pnpm start

pnpm add -g sax 安装软件包到全局环境中 Install package globally
pnpm add sax 保存到 dependencies 配置项下 Save to dependencies
pnpm add -D sax 保存到 devDependencies 配置项下 Save to devDependencies
pnpm add -O sax 保存到 optionalDependencies 配置项下 Save to optionalDependencies

https://www.bilibili.com/video/BV1Z44y1K7Fj?p=5&spm_id_from=pageDriver&vd_source=8d4b220c3958f634b9f3e09271aebf79

jsx 并不是标准的 JS 语法，是 JS 的语法扩展，浏览器并不认识，脚手架中内置的@babel/tranform-react-jsx 插件，用来解析 jsx 语法。

![jsx转换](img/jsx1.png)

## code

https://gitee.com/react-cp/react-pc-code

https://gitee.com/react-course-series

##

JS 中出现() 表示其中想要写 html 比如组件的 return (<div></div>)
