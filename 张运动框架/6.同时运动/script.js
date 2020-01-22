var timer=null;
function animated(dom,obj,fn){
    
    clearInterval(dom.timer);             //多物体运动： 运行的是自己的定时器，清除的也是自己的定时器
    
    dom.timer=setInterval(function(){
        // alert(obj.length)
        var bool=true;
        for(var k in obj){          //单纯的object   是没有length的
            
            

            if(k=="opacity"){
                var objAttr=parseFloat(getAttr(dom,k))*100;      //转成IE，但为什么通通*100，    哦哦哦，因为传的是opacity，而不是filter
            }else{
                var objAttr=parseFloat(getAttr(dom,k))
            }
            
            var speed=(obj[k]-objAttr)/10;
            // alert(speed)
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
    
            if(objAttr!=obj[k]){
                bool=false;
            }
                if(k=="opacity"){
                    dom.style.filter="alpha(opacity:"+objAttr+speed+")";
                    dom.style[k]=(objAttr+speed)/100;
                }else{
                    dom.style[k]=objAttr+speed+"px";
                }
               
            


        }

        

        if(bool){                //if(objAttr!=obj[k]){bool=false}
                clearInterval(dom.timer);
                if(fn){
                    fn.call(dom);               //本身就有执行fn()
                    // fn();
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