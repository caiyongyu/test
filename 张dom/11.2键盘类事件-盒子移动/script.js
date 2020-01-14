var box=document.getElementById("box");

document.onkeydown=function(e){
    // 
    switch(e.keyCode){
        case 37:
            // alert("左");
            box.style.left=box.offsetLeft-10+"px";
           break;
        case 38:
            // alert("上");
            box.style.top=box.offsetTop-10+"px";
            break;
        case 39:
            // alert("右");
            box.style.left=box.offsetLeft+10+"px";
            break;
        case 40:
            // alert("下");
            box.style.top=box.offsetTop+10+"px";
            break;
}
}