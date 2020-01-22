var obj={
    "userName":"张三",
    run:function(){
        return "这是方法"
    }
}

console.log(obj.userName);
delete obj.userName;
console.log(obj.userName);
console.log(obj.run());
delete obj.run;
console.log(obj.run());


