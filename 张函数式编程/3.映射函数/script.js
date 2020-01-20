//映射函数  将数组中的每一个值调用另一个函数，返回一个新的数组

function Map(fn,array){
    var brr=[];

    forEach(array,function(element){
        brr.push(fn(element));
    })
    return brr;
}

function forEach(arr,fn){
    for(var i=0;i<arr.length;i++){
        fn(arr[i]);
    }
}

alert(Map(Math.round,[1.1,2.2,3.3]));