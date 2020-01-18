
//变量提升   =  var a=undefined;
// console.log(a);
// var a;

//函数内this.a=window.a
// (function() {
//     // window.a=10;
//     var a=20;
//     console.log(this.a);
    
// })()


//函数的声明，是部分执行顺序的
// function fn(){
//     console.log(fns());
    
//     function fns(){
//         var a=10;
//         return a;
//     }
// }
// fn()


function fn(){
    window.a=10;
    a=30;
    console.log(this.a);
    
}
fn()


function fn(){
    window.a=10;
    var a=20;
    a=30;
    console.log(this.a);
    
}
fn()
