var lis=document.getElementsByTagName("li");
var index=0;
var box=document.getElementById("box");

function fn(){
    for(var i=0;i<lis.length;i++){
        lis[i].style.display="none";
    }
    index++;
    if(index>4){
        index=0;
    }
    lis[index].style.display="block"
}

var timer=setInterval(fn,1000)

box.onmouseover=function(){
    clearInterval(timer);
}
box.onmouseout=function(){
    // setInterval(fn,1000)
}


// setInterval   定时器：间歇调用
// setTimeout    超时调用

