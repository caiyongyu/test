var imgs=document.getElementById("imgs");
var index=-1;

function fn(value){
    index++;
    if(index>4){
        index=0;
    }
    imgs.src="images/"+value+"-"+index+".png"
}

document.onkeydown=function(e){
    // alert(e.keyCode)
    switch(e.keyCode){
        case 37:
            // alert("左");
            imgs.style.left=imgs.offsetLeft-10+"px";
            fn("left");
            break;
        case 38:
            // alert("上");
            imgs.style.top=imgs.offsetTop-10+"px";
            fn("up");
            break;
        case 39:
            
            imgs.style.left=imgs.offsetLeft+10+"px";
            fn("right");
            break;
        case 40:
            imgs.style.top=imgs.offsetTop+10+"px";
            fn("down");
            break;
    }
}