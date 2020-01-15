var min=document.getElementById("min");
var max=document.getElementById("max");
var b=document.getElementsByTagName("b")[0];
var bigImg=document.getElementById("bigImg");

min.onmousemove=function(e){
    // alert(min.offsetWidth/2)
    max.style.display="block";
    b.style.display="block";
    var scroll=document.documentElement||document.body;
    var x=e.clientX+scroll.scrollLeft-min.offsetLeft-b.offsetWidth/2;
    var y=e.clientY+scroll.scrollTop-min.offsetTop-b.offsetHeight/2;
    if(x<0){
        x=0;
    }else if(x>min.offsetWidth-b.offsetWidth){
        x=min.offsetWidth-b.offsetWidth;
    }
    if(y<0){
        y=0;
    }else if(y>min.offsetHeight-b.offsetHeight){
        y=min.offsetHeight-b.offsetHeight;
    }
    b.style.left=x+"px";
    b.style.top=y+"px";

    bigImg.style.left=-2*x+"px";
    bigImg.style.top=-2*y+"px";
    
}

min.onmouseout=function(){
    max.style.display="none";
    b.style.display="none";
}