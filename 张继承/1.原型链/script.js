//原型链    将父构造函数实例化对象赋值给子函数的原型
function   Parent(){

    this.name="张三";
    this.arr=[1,2,3];
    this.run=function(){
        return "我是原型链";
    }


}


function Child(){

}

Child.prototype=new Parent();           //与jquery的原型链相同

var o1=new Child();
var o2=new Child();

console.log(o1.name);
console.log(o1.run==o2.run);
o1.arr[0]="李四";
console.log(o2.arr);

//缺点  1原型模式的缺点，引用类型数据共享   2子函数无法向父构造函数传参



