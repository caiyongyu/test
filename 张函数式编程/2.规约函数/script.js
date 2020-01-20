//规约函数          函数调用另一个函数      实现将一个数组转化为一个单一的值

//Redece

function Reduce(add,num,array){

    
        forEach(array,function(value){              //内部是会循环执行array.length次的
            num=add(num,value);
        })
    
    
    return num;

}

function add(num1,num2){
    return num1+num2;
}

function forEach(arr,fn){
    for(var i=0;i<arr.length;i++){
        fn(arr[i])
    }
}


var arr=[1,3,5,6];
alert(Reduce(add,2,arr))
