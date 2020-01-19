//call与apply功能相同，只是语法不同

//指向obj
// var userName="李四";
// var obj={
//     userName:"张三",
//     run:function(){
//         return function(){
//             return this.userName;
//         }
//     }
// }

// alert(obj.run().call(obj));

//指向window
// var userName="李四";
// var obj={
//     userName:"张三",
//     run:function(){
//         return this.userName;
//     }
// }
// alert(obj.run.apply(window))


//call与apply借用别的函数的功能
// function fn(a,b){
//     return a+b;
// }

// function Myfn(c,d){
//     // return fn.call(window,c,d)
//     return fn.apply(null,[c,d])
// }

// alert(Myfn(8,7))



//apply的另一种用法
function fn(){
    // return Math.min(3,6,1,9);
    var arr=[45,38,10,99,56]
    return Math.min.apply(window,arr)
}
alert(fn())


