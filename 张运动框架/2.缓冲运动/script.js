var timer=null;
function animated(dom,target){
    
    clearInterval(timer);             //为什么不对         浏览器的错，没清空缓存？？
    
    timer=setInterval(function(){
        // if(target-dom.offsetLeft > 0){
        //     speed=Math.ceil((target-dom.offsetLeft)/10);
        //     // alert(speen)
        // }else{
        //     speed=Math.floor((target-dom.offsetLeft)/10);
        // }
        var speed=target-dom.offsetLeft;
        speed=speed>0?Math.ceil((target-dom.offsetLeft)/10):Math.floor((target-dom.offsetLeft)/10);

        if(dom.offsetLeft==target){
            clearInterval(timer);
        }else{
            dom.style.left=dom.offsetLeft+speed+"px";
        }
        
    },50)
    
}