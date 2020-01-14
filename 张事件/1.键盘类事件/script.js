var btn=document.getElementById("btn");
var oDiv=document.createElement("div");

btn.onclick=function(){
    
    oDiv.setAttribute("id","box");
    document.body.appendChild(oDiv)
}

document.onkeydown=function(e){
    // alert(e.keyCode)
    if(e.keyCode==46){
        document.body.removeChild(oDiv)
    }
}