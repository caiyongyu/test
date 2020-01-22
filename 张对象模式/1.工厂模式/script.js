//工厂模式   在函数中新建一个空的对象，返回一个对象

function createObject(){
    var obj=new Object();
    obj.name="西瓜汁";
    obj.run=function(){
        return "贴了商标了";
    }
    return obj;
}

var o1=new createObject();
var o2=new createObject();
console.log(o1.name);
console.log(o1);

console.log(o1.run==o2.run);            //缺点：对象的方法不共享（函数地址不相同）   正常，new 的不同的createObject函数，内部的方法肯定不相同

