
function displayer(a) {
    console.log(a);
}

function displayerErr(a) {
    console.log("err: ", a);
}

let myPromise = new Promise(function (myResolve, myReject){
    let x = 0;
    if (x == 0) {
        myResolve(x, 1);
    } else {
        myReject(x);
    }
});

myPromise.then(function (resp) {
   displayer(resp);
}, function (err) {
    displayerErr(err);
})