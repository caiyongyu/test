;(function($){
    $.fn.color=function(options){
        var defau={
            "bg":"blue"
        }
        var settings=$.extend({},defau,options);
        $(this).css({
            "background":settings.bg
        })
        return this;
    }

})(jQuery);