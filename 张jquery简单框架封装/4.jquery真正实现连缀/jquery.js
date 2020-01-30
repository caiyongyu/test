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
        that.length=dom.length;             //必须要添加length属性
        return that;                    //返回对象
    }

    jQuery.prototype={

        init:function(element){                 //节点选择初始化
            // alert(num);
            var dom=null;
            if(typeof element!='string'){
                dom=[element];
                // console.log(typeof dom);
                
            }else{
                dom=document.querySelectorAll(element);
                 
            }
            return markAll(dom,this);      
        },
        css:function(attr,val){
            // alert(this.length)
            for(var i=0;i<this.length;i++){
                this[i].style[attr]=val;
                console.log(this[i]);
                
            }
            return this;
        },
        html:function(val){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML=val;
                
            }
            return this;
        },
        hover:function(fn1,fn2){
            for(var i=0;i<this.length;i++){
                this[i].onmouseover=fn1;
                this[i].onmouseout=fn2;
            }
            return this;
        },
        first:function(){
            return jQuery(this[0]);
        },
        last:function(){
            return $(this[this.length-1]);
        }
        
    }

    jQuery.prototype.init.prototype=jQuery.prototype;
    window.jQuery=window.$=jQuery;
})();

            //first()在css之前
$("ul li").last().css("background","red").html("我改变了").hover(function(){
    alert(1);
},function(){
    alert(2);
});
// console.log($("#dv1"));
