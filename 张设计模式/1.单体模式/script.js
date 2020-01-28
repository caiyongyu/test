function Obj(){
    this.name="张三";
}

Obj.prototype.getName=function(){
    return this.name;
}

function getRun(){
    var run=null;
    if(!run){
        var object=new Obj();
    }
    return object;
}

var o1=getRun();
var o2=getRun();
console.log(o1.name);
console.log(o1.getName==o2.getName);

//优点   1  划分命名空间  o1.   o2.
//2   提升阅读性，维护性    getName   this.name
//3  只实例化一次

