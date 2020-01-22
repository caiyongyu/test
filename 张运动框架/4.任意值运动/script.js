var timer=null;
function animated(dom,target,attr){
    
    clearInterval(dom.timer);             //多物体运动： 运行的是自己的定时器，清除的也是自己的定时器
    
    dom.timer=setInterval(function(){
        
        if(attr=="opacity"){
            var objAttr=parseFloat(getAttr(dom,attr))*100;      //转成IE，但为什么通通*100，    哦哦哦，因为传的是opacity，而不是filter
        }else{
            var objAttr=parseFloat(getAttr(dom,attr))
        }
        
        var speed=(target-objAttr)/10;
        // alert(speed)
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(objAttr==target){
            clearInterval(dom.timer);
        }else{
            if(attr=="opacity"){
                dom.style.filter="alpha(opacity:"+objAttr+speed+")";
                dom.style[attr]=(objAttr+speed)/100;
            }else{
                dom.style[attr]=objAttr+speed+"px";
            }
           
        }
        
    },50)
    
}


function getAttr(dom,attr){
    if(dom.currentStyle){
        return dom.currentStyle[attr];
    }else{
        return getComputedStyle(dom,null)[attr];
    }
}