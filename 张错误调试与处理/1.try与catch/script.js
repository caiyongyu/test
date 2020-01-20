//常见错误      1.除数为0        2.object=null时，为其添加属性
// var num1=10;
// var num2=0;
// alert(num1/num2)

//好处---不会阻止下面代码的执行
function fn(obj){
    try{
        obj.userName="张三";                //可能要错误的代码
    }catch(e){
        console.log(e);
        console.log(e="与同事配合的中文提示信息");                     //错误信息对象  与new Error()相同
        console.log(e.name);
        console.log(e.message);
        
    }finally{
        console.log("一定会执行的代码");
        
    }
    


}

fn(null);

var err=new Error();
console.log(err.name);
console.log(err.message);



alert(1111);