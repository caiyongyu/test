;(function($){

    // $.extend({                 //扩展元素，全局
    //     "nav":function(){
    //         $("ul").find("li").hover(function(){
    //             $(this).hide(1000)
    //         },function(){

    //         })
    //     }
    // })

    $.fn.extend({
        "nav":function(){
            $(this).find("li").hover(function(){
                $(this).hide(1000)
            },function(){

            })
        }
    })

})(jQuery);