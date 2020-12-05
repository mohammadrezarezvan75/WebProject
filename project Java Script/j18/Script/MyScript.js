function myFunction() {
    var a, b, c;
    a = 10;
    b = 20;
    c = a * b;
    alert(c);
}

var x = function (a, b) { return a + b };// یک متغییر  داریم که فانکشن است 
//و دو ورودی می گیرد جمع می کند و بر میگرداند 
var c = x(4, 3);
console.log(c);

var my = new Function("a", "b", "return a*b");// کد خوانی این روش ضعیف است توصیه نمی شود
// نمونه از آبجکت فانگشن

var a1 = my(4, 2).toString("2");
console.log(a1);

(function () { })();//ابتدا

(function () {// و در نهایت
    alert("load");
})();

function sum(a, b) {
    return a + b;
}
var result = sum(2, 3) + 3;
console.log(result);

var sum2 = (a, b) => a + b;
alert(10, 12);

const sum3 = (x, y) => {
    return x * y;
}