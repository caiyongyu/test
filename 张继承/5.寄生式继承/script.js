//用到了原型式继承

function F(obj){
    var f=function(){};
    f.prototype=obj;
    return new f();
}

function getSub(obj){
    //创建新对象
    var clone=F(obj);

    //增强属性
    clone.userName="张三";
    clone.arr=[1,2,3];

    return clone;
}

var o={
    name:"李四",
    age:20
}

var obj1=new getSub(o);
console.log(obj1);
console.log(obj1.name);

