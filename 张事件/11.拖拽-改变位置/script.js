var box=document.getElementById("box");

box.onmousedown=function(e){
    var e=window.event||e;
    var x=e.clientX-box.offsetLeft;
    var y=e.clientY-box.offsetTop;
    // alert(1)
    document.onmousemove=function(e){
        box.style.left=e.clientX-x+"px";
        box.style.top=e.clientY-y+"px";
        // alert(2)
    }
}
box.onmouseup=function(){
    document.onmousemove=null;
}