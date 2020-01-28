//也叫订阅模式          当一个大对象改变时，监听它的多个对象也随之改变

var obj={};         //发布者
obj.list=[];
obj.listen=function(key,fn){          //监听者          回调函数
    if(!this.list[key]){
        this.list[key]=[];
    }
    this.list[key].push(fn);
}
obj.message=function(){         //发布的信息
    var key=Array.prototype.shift.call(arguments); //黑色         //取出信息名称，即第一个参数取出后删除
    var fns=this.list[key];                     //取出信息的回调函数集合        this.list里没有黑色，只有红色

    if(!fns || fns.length==0){
        return;
    }

    for(var i=0,fn;fn=fns[i++];){
        fn.apply(this,arguments);
    }

}

obj.listen("红色",function(size){
    console.log("尺寸是"+size);
    
});

obj.message("黑色",50);

