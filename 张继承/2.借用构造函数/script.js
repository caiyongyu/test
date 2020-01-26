//借用父类构造函数增强子类实例，相当于复制了一份父类的属性和方法

function Parent(tname){
    this.name=tname;
    this.arr=[1,2,3];
    this.run=function(){
        return 111;
    }
}

function Child(){
    Parent.call(this,"李四");
}

var o1=new Child();
var o2=new Child();

console.log(o1.run==o2.run);
console.log(o1.name);
//优点：    1 可以向父类传递参数        2 解决子类实例共享父类引用属性的问题
//缺点：   1 每一个实例都有自己的方法，占用内存 


