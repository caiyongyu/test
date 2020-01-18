
//1  创建对象的两种方法
// var obj=new Object();
// alert(obj)

// var obj={};
// alert(obj)

//2.动态属性和方法
// var obj=new Object();
// obj.userName="张三";
// alert(obj.userName)

// obj.tem=function(){
//     return "动态方法";
// }
// alert(obj.tem())

//3.传递参数

// function fn(o){
//     o.userName="李四";
// }
// var obj=new Object();
// fn(obj);
// alert(obj.userName)


//传递参数----传递的是值，和引用类型又有所不同
// function fn(o){
//     o.userName="李四";

//     o=new Object();
//     o.userName="王五";
// }
// var obj=new Object();
// fn(obj);
// alert(obj.userName)



// var obj=new Object();
// obj.userName="李四";

// obj=new Object();
// obj.userName="王五";
// alert(obj.userName)


//4.检测类型

var obj=new Object();
var str=new String();

alert(obj instanceof Object);
alert(str instanceof String);

if(str instanceof String){
    alert("str检测出类型为字符串");
}else{
    alert("str检测出类型不是字符串");
}



