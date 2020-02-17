$(function(){
    pai();
    var obj={
        arr:[
            "images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/4.jpg",
            "images/5.jpg",
        ]
    }
    $(window).scroll(function(){
        // console.log(1);
        if(pan()){
            $.each(obj.arr,function(idx,val){
                var oDiv=$("<div class='box'></div>");
                var oPic=$("<div class='pic'></div>");
                var oImg=$("<img src="+obj.arr[idx]+">");
                $("#main").append(oDiv);
                $(oDiv).append(oPic);
                $(oPic).append(oImg);
            })
        }
        
        

        pai();
    })

    function pan(){
        var oBoxH=$(".box").last().outerHeight()/2;
        var oBoxT=$(".box").last().offset().top;
        var height=$(window).height();
        var sTop=$(document).scrollTop();
        // console.log(sTop);
        if((oBoxH+oBoxT)<=height+sTop){
            return true;
        }else{
            return false;
        }
        
    }
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