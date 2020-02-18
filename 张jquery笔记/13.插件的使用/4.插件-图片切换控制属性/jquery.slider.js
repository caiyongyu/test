;(function($){
    $.fn.slider=function(options){
        var defau={
            "autoSlider":true,
            "speed":1200,
            "numControl":false,
            "btnControl":false
        };
        var settings=$.extend({},defau,options),
        ul=$(this).find("ul"),
        li=ul.find("li"),
        img=li.find("img"),
        len=li.length,
        index=0,
        timer=null,
        slider=$(this);
        img.css({
            "width":$(this).width(),
            "height":$(this).height()
        })
        li.css({
            "width":$(this).width(),
            "height":$(this).height()
        })
        ul.css({
            "width":li.width()*len,
            "height":li.height()
        })
        if(settings.autoSlider){
            timer=setInterval(run,settings.speed);
        }
        $(this).on("mouseover",function(){
            clearInterval(timer);
        })
        $(this).on("mouseout",function(){
            if(settings.autoSlider){

                timer=setInterval(run,settings.speed);
            }
        })
        // $(this).hover(function(){
        //     clearInterval(timer);
        // },function(){
        //     if(settings.autoSlider){

        //         timer=setInterval(run,settings.speed);
        //     }
        // })
            
        if(settings.numControl){
            $(this).append("<div id='box'></div>");
            for(var i=0;i<len;i++){
                $("#box").append("<span>"+(i+1)+"</span>")
            }
            $("#box span").eq(0).addClass("active");
            $(this).find("#box span").on("mouseover",function(){         
                slider.find("#box span").eq($(this).index()).addClass("active").siblings().removeClass("active");
                // index=slider.find("span").index($(this));
                index=$(this).index();
                picShow(index)
            })
        } 
          
        if(settings.btnControl){
            $(this).append("<span class='left'></span><span class='right'></span>");
            $(this).find(".right").on("click",function(){
                index++;
                if(index==len){
                    index=0;
                }
                picShow(index)
            })
            $(this).find(".left").on("click",function(){
                // alert(1)
                index--;
                if(index==-1){
                    index=len-1;
                }
                picShow(index)
            })
        }
        
        function run(){
            index++;
            if(index==len){
                index=0;
            }
            picShow(index);
        }
        function picShow(index){
            // console.log(1);
            ul.animate({left:-index*li.width()});
            slider.find("#box span").eq(index).addClass("active").siblings().removeClass("active");
           
            
        }
        return this;
    }
})(jQuery);