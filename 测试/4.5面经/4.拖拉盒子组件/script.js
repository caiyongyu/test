var box=document.getElementById('box');

box.onmousedown=function(e){
    e=window.event||e;
    var x=e.clientX-box.offsetLeft;
    var y=e.clientY-box.offsetTop;
    document.onmousemove=function(e){
        box.style.left=e.clientX-x+"px";
        box.style.top=e.clientY-y+"px";
    }
}
box.onmouseup=function(){
    document.onmousemove=null;
}