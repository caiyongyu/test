//1             清除标记（最常用，默认）
//2             引用计数（最不常用）
//3             手动清除（如果项目要求性能好，要求做手动垃圾回收的话）

//1
function fn1(){
    var a=10;           //标记a
    console.log(a);
    
}
fn1()
//11行后，不在用到，则清除标记



//2
function fn2(){
    var a=10;           //计数+1
    var a=20;           //计数+2

    //不用了  -1
    //不用了  -2
    //如果全是引用，则一直都不清除
}


function fn3() {
    var a=0;
    var obj=new Object();
    var c=function() {

    }
    a=null;
    obj=null;
    c=null;
    alert(c);
    //变量，对象，函数。手动清除-----置为null
}
fn3()


