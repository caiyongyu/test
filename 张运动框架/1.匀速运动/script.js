var timer=null;
function animated(dom,target){
    
    clearInterval(timer);                //为什么不对
    if(dom.offsetLeft<target){
        var speed=10;
    }else{
        var speed=-10;
    }
    timer=setInterval(function(){
        if(dom.offsetLeft==target){
            clearInterval(timer);
        }else{
            dom.style.left=dom.offsetLeft+speed+"px";
        }
        
    },50)
    
}