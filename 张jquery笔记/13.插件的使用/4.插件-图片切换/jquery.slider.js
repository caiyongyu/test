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
        timer=null;
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
            $(this).hover(function(){
                clearInterval(timer);
            },function(){
                if(settings.autoSlider){

                    timer=setInterval(run,settings.speed);
                }
            })
            
            
            
        
        function run(){
            index++;
            if(index==len){
                index=0;
            }
            picShow(index);
        }
        function picShow(index){
            ul.animate({left:-index*li.width()})
        }
        return this;
    }
})(jQuery);