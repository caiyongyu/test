//高阶函数          函数操作另一个函数          来回做实参形参

//forEach
// var arr=["A","B","C"];
// function forEach(arr,fn){
//     for(var i=0;i<arr.length;i++){
//         fn(arr[i]);
//     }
// }

// forEach(arr,function(value){
//     console.log(value+"0");
    

// })

// forEach(arr,function(value){
//     console.log("0"+value);
    

// })


//filter
var arr=[2,3,4,5,6,7];
function filter(arr,fn){
    var brr=[];
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i])){
            brr.push(arr[i]);
        }
    }
    return brr;
    
}

console.log(filter(arr,function(value){

    // if(value>4){
    //     return value;
    // }

    return value>4;

}))