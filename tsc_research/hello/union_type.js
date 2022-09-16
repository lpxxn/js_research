/*
联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
注意：只能赋值指定的类型，如果赋值其它类型就会报错。
 */
var val;
val = 12;
console.log(val);
val = "abcdef";
console.log(val);
// val = true; // error
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("abcddef");
disp(["a", "b", "c"]);
