var timer=null;
function animated(dom,target){
    
    clearInterval(dom.timer);             //多物体运动： 运行的是自己的定时器，清除的也是自己的定时器
    
    dom.timer=setInterval(function(){
        // if(target-dom.offsetLeft > 0){
        //     speed=Math.ceil((target-dom.offsetLeft)/10);
        //     // alert(speen)
        // }else{
        //     speed=Math.floor((target-dom.offsetLeft)/10);
        // }
        var speed=target-dom.offsetWidth;
        speed=speed>0?Math.ceil((target-dom.offsetWidth)/10):Math.floor((target-dom.offsetWidth)/10);

        if(dom.offsetWidth==target){
            clearInterval(timer);
        }else{
            dom.style.width=dom.offsetWidth+speed+"px";
        }
        
    },50)
    
}