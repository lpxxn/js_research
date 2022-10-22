/*
约定
不同于“老式”的传入回调，在使用 Promise 时，会有以下约定：

在本轮 事件循环 运行完成之前，回调函数是不会被调用的。
即使异步操作已经完成（成功或失败），在这之后通过 then() 添加的回调函数也会被调用。
通过多次调用 then() 可以添加多个回调函数，它们会按照插入顺序进行执行。
Promise 很棒的一点就是链式调用（chaining）
*/

function displayer (a) {
    console.log(a)
}

function displayerErr (a) {
    console.log("err: ", a)
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0
    if (x == 0) {
        myResolve(x, 1)
    } else {
        myReject(x)
    }
})

myPromise.then(function (resp) {
    displayer(resp)
}, function (err) {
    displayerErr(err)
})

