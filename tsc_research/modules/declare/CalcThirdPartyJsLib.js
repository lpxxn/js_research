var Runoob;
(function (Runoob) {
    var Calc = (function () {
        this.Say = Say;

        function Say() {
            console.log("calc...")
        }

        console.log("abc")
    })

    Calc.prototype.doSum = function (limit) {
        var sum = 0;
        for (var i = 0; i <= limit; i++) {
            sum = sum + 1;
        }
        return sum;
    }
    Runoob.Calc = Calc;
    return Calc;

})(Runoob || (Runoob = {}))

var test = new Runoob.Calc();
console.log(test);
test.Say();