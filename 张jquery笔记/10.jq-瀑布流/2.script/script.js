$(function(){
    pai()
})

function pai(){
    var width=$(document).width();
    var oBoxWidth=$(".box").outerWidth();
    // console.log(width);
    
    var num=Math.floor(width/oBoxWidth);
    $("#main").width(num*oBoxWidth);

    var arr=[];
    for(var i=0;i<$(".box").length;i++){
        if(i<num){
            arr.push($(".box").eq(i).outerHeight());
            // console.log(arr);
            
        }else{
            var minH=Math.min.apply(null,arr);
            var idx=$.inArray(minH,arr);
            $(".box").eq(i).css({
                "position":"absolute",
                "left":idx*oBoxWidth,
                "top":minH
            })
            arr[idx]+=$(".box").eq(i).outerHeight()
        }
    }
}