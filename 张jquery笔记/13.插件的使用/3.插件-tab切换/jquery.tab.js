;(function($){
    
    $.fn.tab=function(options){
        var defau={
            "tab":"#tab1",
            "event":"click",
            "active":"active"
        }
        var settings=$.extend({},defau,options);
        $(this).find("li").bind(settings.event,function(){
            // alert(1)
            var idx=$(this).index();
            $(this).addClass(settings.active).siblings().removeClass(settings.active);
            $(settings.tab).find("p").eq(idx).show().siblings().hide();
        })
    }

})(jQuery);