//$("#box").css("background","red").html("123");     
;(function(){

    var jQuery=function(element){                      //不能是函数，要是对象
        // console.log(jQuery.prototype.init(num));
        
        return new jQuery.prototype.init(element);             //返回一个init对象
    }

    function markAll(dom,that){
        var that=that||[];
        // alert(arr.length)
        for(var i=0;i<dom.length;i++){
            that[i]=dom[i]
        }
        return that;                    //返回对象
    }

    jQuery.prototype={

        init:function(element){                 //节点选择初始化
            // alert(num);
            var dom=document.querySelectorAll(element);
            return markAll(dom,this);                       
        },
        css:function(){

        },
        html:function(){

        }

    }


    window.jQuery=window.$=jQuery;
})();

console.log($("ul li"));
