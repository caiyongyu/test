function fn(obj){
    var f=function(){};
    f.prototype=obj;
    return new f();
}

function o(){
    this.name="张三";
    this.arr=[1,2,3];
}

o.prototype.run=function(){
    return "组合";
}
o.prototype.brr=[5,6,7];

function Child(){
    o.call(this);
}

// Child.prototype=new o();

var obj1=fn(o.prototype);       //传递原型
obj1.constructor=Child;          //构造函数指向
o.prototype=obj1;       //实例化对象赋给原型

var obj2=new Child();
var obj3=new Child();
obj2.arr[0]="刘武";
// obj3.brr[0]="改变";

console.log(obj2.arr);
console.log(obj3.arr);
console.log(obj2.run==obj3.run);

// console.log(obj2.brr);               //undefined



