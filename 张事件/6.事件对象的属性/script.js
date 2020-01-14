var box=document.getElementById("box");

box.onclick=function(e){
    var tar=e.srcElement||e.target;
    alert(e.target);
}