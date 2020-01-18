//递归函数          阶乘
// function fn(num){
//     if(num==1){
//         return num;
//     }else{
//         return num*fn(num-1);
//     }
// }
// alert(fn(6));


//闭包
// function fn(){
//     var a=0;
//     return function(){
//         a++;
//         return a;
//     }
// }
// // alert(fn()())           //1         想输出结果为1  2  3  。。。
// var tem=fn();
// alert(tem());
// alert(tem());
// alert(tem());
// alert(tem());



//2         for循环中包含有函数
var lis=document.getElementsByTagName("li");

for(var i=0;i<lis.length;i++){
    // console.log(i);
    lis[i].index=i;
    lis[i].onclick=function(){
        alert(this.index);
    }
}

