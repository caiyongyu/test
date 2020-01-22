//检测对象的属性是否存在



var obj={
    "userName":"张三",
    "age":26
}
// console.log(obj.__proto__);                 //打印出原型属性和方法

//1
// console.log("age" in obj);
// console.log("age123" in obj);
// console.log("toString" in obj);



//2和3原型自带的属性----返回false
// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("toString"));



//3
// console.log(obj.propertyIsEnumerable("age"));
// console.log(obj.propertyIsEnumerable("toString"));

//2和3的区别在于如果对象的属性不可枚举后


Object.defineProperty(obj,"userName",{              //不可枚举后，此属性还在只是不可以被枚举出来
    enumerable:false
})

for(var k in obj){
    console.log(k);
    
}

console.log(obj.hasOwnProperty("userName"));                //true

console.log(obj.propertyIsEnumerable("userName"));          //false
