var oDiv=document.getElementById("box");
var oDiv2=document.getElementById("box2");
var dv3=document.getElementById("dv3");
var scroll=document.getElementById("scroll");
var btn=document.getElementById("btn");

setInterval(function(){
    // oDiv.style.width=parseInt(getAttr(oDiv,"width"))-4+"px";
},50)

function getAttr(dom,value){
    if(dom.currentStyle){
        return dom.currentStyle[value];
    }else{
        return getComputedStyle(dom,null)[value];
    }
}
// alert(getAttr(oDiv,"width"))

// alert(oDiv2.offsetLeft);
// alert(dv3.offsetTop)

btn.onclick=function(){
    alert(scroll.scrollLeft)
}
