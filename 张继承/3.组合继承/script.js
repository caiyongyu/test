//最常用的继承方式      解决了以上提到的三个缺点

function Parent(){

    this.name="张三";
    this.arr=[1,2,3,4];

}

Parent.prototype.run=function(){

    return "方法单独提出来，写在原型中";
}

function Child(){
    Parent.call(this);
}

Child.prototype=new Parent();           

var o1=new Child();
var o2=new Child();

//缺点： 子类原型得到两份父类的属性