//每一个新建的函数，都有个prototype属性
//prototype属性指向new的对象，这个对象的作用是用于特定实例共享属性和方法

function fn(){
    fn.prototype.userName="张三";
    fn.prototype.arr=[1,2,3];
    fn.prototype.run=function(){
        return "我是原型模式";
    }
}

var o1=new fn();
var o2=new fn();


console.log(o1.fn===o2.fn);

o1.userName="李四";
console.log(o2.userName);   //张三          因为是基本数据类型

o2.arr[0]="原型";
console.log(o1.arr);                    //缺点：因为属性和方法共享，所有一改全改



