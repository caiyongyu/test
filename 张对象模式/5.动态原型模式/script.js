//将所有的属性和方法都封装在构造函数中，用构造函数来初始化原型
//只在第一次实例化对象时，初始化原型

function Fn(){
    this.name="张三";
    if(typeof this.run!="function"){
        console.log(1);
        
        Fn.prototype.run=function(){
            return "构造函数初始化原型";
        }
    }
}

var o1=new Fn();
var o2=new Fn();