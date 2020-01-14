var box=document.getElementById("box");

// box.attachEvent("onclick",function(){
//     alert("IE事件处理程序");
// })


function fns(dom,evn,han){
    if(dom.addEventListener){
        dom.addEventListener(evn,han,false);
    }else if(dom.attachEvent){
        dom.attachEvent("on"+evn,han);
    }else{
        dom["on"+evn]=han;
    }
    
}

fns(box,"click",function(){
    alert("兼容1")
})

fns(box,"click",function(){
    alert("兼容1 第二个")
})
