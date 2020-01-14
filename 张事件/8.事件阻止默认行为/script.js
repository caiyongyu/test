var oA=document.getElementsByTagName("a")[0];

oA.onclick=function(e){
    e.preventDefault();
    // alert(1)
}

var btn=document.getElementById("btn");

btn.oncontextmenu=function(e){
    e.preventDefault();
    alert("右击");
}

document.oncontextmenu=function(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue=false;
    }
    
    
}