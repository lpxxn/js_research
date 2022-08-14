// 函数前的关键字async 使函数返回 promise:

async function f() {
    return "hello";
}

// 等价于

async function f2() {
    return Promise.reject("abc");
}

r2 = f2();
r2.then(function (rf) {
    console.log(rf);
}, function (err) {
    console.log(err);
})

// await 只能在 async 函数中使用
async function f3(x) {
    let promise = new Promise(function (resolve, reject) {
        if (x == 0) {
            resolve(x);
        } else {
            reject({a: x, b: "myerr"});
        }
    });
    var result = "";
    try {
        result = await promise;
    } catch (err) {
        console.log("try catch err")
        result = err
    }
    console.log(result);
}

f3(2);

async function f4() {
    console.log("aaaa");
}
f4().then(
);