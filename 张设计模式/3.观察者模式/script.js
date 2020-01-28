//也叫订阅模式          当一个大对象改变时，监听它的多个对象也随之改变

var obj={};         //发布者
obj.list=[];
obj.listen=function(fn){          //监听者          回调函数
    this.list.push(fn);
}
obj.message=function(){         //发布的信息
    for(var i=0,fn;fn=this.list[i++];){
        fn.apply(this,arguments);
    }
}

obj.listen(function(color,size){
    console.log("颜色是"+color);
    console.log("尺寸是"+size);
    
})

// obj.listen(function(color,size){
//     console.log("颜色是"+color);
//     console.log("尺寸是"+size);
    
// })

obj.message("红色",40);
obj.message("黑色",80);         //好乱啊
