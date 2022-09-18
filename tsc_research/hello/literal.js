var _this = this;
var add = function (a, b) { return a + b; };
var x = add(1, 2);
console.log(x);
var a = "abc";
var b = "abc";
console.log(a, b);
function move(dir) {
    console.log(dir);
}
move("UP");
var i1 = {
    size: "small",
    isEnable: true,
    margin: 1,
    getSize: function () {
        return _this.size;
    }
};
console.log(i1.isEnable, i1.getSize());
var entity = {
    add: function (a, b) {
        return a + b;
    },
    del: function (a, b) {
        return a - b;
    }
};
console.log(entity.add(1, 2), entity.del(2, 1));
