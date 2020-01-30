//$("#box").css("background","red").html("123");     
;(function(){

    var jQuery=function(num){                      //不能是函数，要是对象
        // console.log(jQuery.prototype.init(num));
        
        return new jQuery.prototype.init(num);             //返回一个init对象
    }

    jQuery.prototype={

        init:function(num){                 //节点选择初始化
            alert(num);
            return this;                        //返回jQuery对象,以实现对象
        },
        css:function(){

        },
        html:function(){

        }

    }


    window.jQuery=window.$=jQuery;
})();

console.log($(123));
