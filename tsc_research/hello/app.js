var msg = "hello world";
console.log(msg);
// tsc app.ts
// 与 app.ts 同一目录）就会生成一个 app.js 文件
// node app.js
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("hello");
    };
    return Site;
}());
var obj = new Site();
obj.name();
