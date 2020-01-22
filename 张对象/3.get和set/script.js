// var arr=[1,2,3];
// // arr.length=10;
// Array.prototype.length=10;              //只能读，不能写？？             不是改的都不一样吗，改的是原型中的length,也改成功了
// console.log(arr.__proto__);

// console.log(arr.length);



var obj={
    "name":"张三",
    get age(){                  //相当于新添加了一个属性
        return this.name;
    },
    set age(val){
        this.name=val;
    }
}
obj.age="李四";
console.log(obj.age);

