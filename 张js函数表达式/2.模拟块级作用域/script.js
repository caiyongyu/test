//js是没有块级作用域的

// for(var i=0;i<3;i++){

// }
// alert(i)            //3


//模拟块级作用域
// (function fn(){
//         for(var i=0;i<3;i++){

//     }
// })()
// alert(i)


//jQuery也有用到模拟块级作用域和自执行函数
(function fn(){
    var jQuery=function(){
        return "jquery";
    }
    window.$=window.aaa=jQuery;
})()

// alert(aaa());
alert($())

