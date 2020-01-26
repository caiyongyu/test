//子类实例赋给新生成的对象

function fn(obj){

    function F(){};
    F.prototype=obj;
    return new F();

}

function Child(){
    this.name="张三";
    this.arr=[1,2,3];
}

// var newObj={
//     "userName":"王五";
// }
// fn(newObj)


var o1=new Child();
o1.age=13;

console.log(fn(o1).age);

//优点： 从已有对象中繁衍出新的对象，不需再自定义类型
//缺点： 1 实例后的对象共享引用类型属性   2 不再有复用性，后添加的属性都没用到函数封装