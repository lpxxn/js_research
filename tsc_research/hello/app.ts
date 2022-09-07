var msg = "hello world";
console.log(msg);
// tsc app.ts
// 与 app.ts 同一目录）就会生成一个 app.js 文件
// node app.js


class Site {
    name(): void {
        console.log("hello")
    }
}

var obj = new Site();
obj.name()