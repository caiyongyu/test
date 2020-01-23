//优点： 每一个实例都有自己的属性，同事又共享着方法

function fn(){
    this.userName="张三";
    this.age=30;
    this.arr=[1,2,3];
}

fn.prototype.run=function(){
    return "组合模式";
}

var o1=new fn();
var o2=new fn();

console.log(o1.fn==o2.fn);

o1.arr[1]="自个的属性";
console.log(o2.arr);



