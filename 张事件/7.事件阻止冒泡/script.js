var dv1=document.getElementById("dv1");
var dv2=document.getElementById("dv2");

dv1.onclick=function(){
    alert("dv1");
}
dv2.onclick=function(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble=true;
    }
    
    alert("dv2");
}