//作用域，全局定义的变量和函数。都是window下的变量和函数
// (function fn(){
//     window.a=10;
// })()
// alert(a);


//作用域链：内部可以访问外部，外部不能访问内部
// function fn(){
//     var a=20;
//     window.a=10;            //还是20！！
//     return function(){
//         return a;
//     }
// }
// alert(fn()())


function fn(){
    var a=b=10;             //b是全局的
}
fn()
// alert(a);
alert(b);