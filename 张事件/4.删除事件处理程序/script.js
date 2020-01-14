var box=document.getElementById("box");

// box.onclick=function(){
//     alert(1)
// }

// box.onclick=null;

function fns(){
    alert("同一个fn")
}

box.addEventListener("click",fns,false)

// box.removeEventListener("click",fns,false)


function removeEvent(dom,evt,fn){
    if(dom.removeEventListener){
        dom.removeEventListener(evt,fn,false);
    }else if(box.detachEvent){
        dom.detachEvent("on"+evt,fn);
    }else{
        dom["on"+evt]=null;
    }
    
}
removeEvent(box,"click",fns)