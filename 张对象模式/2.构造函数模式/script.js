//与工厂模式的区别   1首字母大写，告知我是构造函数模式。    2不需要再内部新建对象再返回，只需加上this，指向被赋值的对象

function CreateObj(){
    this.name="苹果醋";
    this.run=function(){
        return "只是构造函数模式";
    }
}

var obj1=new CreateObj();
var obj2=new CreateObj();
console.log(obj1.name);
console.log(obj1.run==obj2.run);

