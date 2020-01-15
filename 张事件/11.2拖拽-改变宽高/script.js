var dv1=document.getElementById("dv1");
var dv2=document.getElementById("dv2");


dv2.onmousedown=function(e){
    var e=window.event||e;
    var w=dv1.offsetWidth;
    var h=dv1.offsetHeight;
    var x=e.clientX;
    var y=e.clientY;
    document.onmousemove=function(e){
        var e=window.event||e;

        dv1.style.width=w+(e.clientX-x)+"px";
        dv1.style.height=h+(e.clientY-y)+"px";
    }
}
dv2.onmouseup=function(){
    document.onmousemove=null;
}