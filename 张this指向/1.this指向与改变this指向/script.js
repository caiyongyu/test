// var obj={
//     run:function(){
//         return this;
//     }
// }
// alert(obj.run())


// var obj={
//     userName:"张三",
//     run:function(){
//         return this.userName;
//     }
// }
// alert(obj.run())


//闭包中的this指向window

// var userName="李四";
// var obj={
//     userName:"张三",
//     run:function(){
//         return function(){
//             return this.userName;
//         }
//     }
// }
// alert(obj.run()())


//改变this指向          （1）赋值
// var userName="李四";
// var obj={
//     userName:"张三",
//     run:function(){
//         var that=this;
//         return function(){
//             return that.userName;
//         }
//     }
// }
// alert(obj.run()())



var obj={
    run:function(){
        return this;
    }
}

function fns(o){

    // obj.run;
    // console.log(o());
    alert(o());                         //[object Window]   构成了一个闭包
    alert(arguments[0]())               //[object Arguments]     因为arguments本身就是一个对象
}
fns(obj.run);

