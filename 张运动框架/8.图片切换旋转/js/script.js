var lis=document.getElementsByTagName("li");

var btn=document.getElementById("btn");
var oSpan=btn.getElementsByTagName("span");
var date=new Date();
// alert(1)
// console.log(parseInt(getAttr(lis[1],"zIndex")));
for(var i=0;i<oSpan.length;i++){
    oSpan[i].index=i;
    
    oSpan[i].onclick=function(){
        if(new Date()-date>2000){
            fn(this.index);
            date=new Date();
        }
        
    }
}


function fn(idx){
    var arrW=[],arrH=[],arrL=[],arrT=[],arrZ=[],arrO=[];
    for(var i=0;i<lis.length;i++){
        
    
        arrW.push(parseInt(getAttr(lis[i],"width"))) ;
        arrH.push(parseInt(getAttr(lis[i],"height"))) ;
        arrL.push(parseInt(getAttr(lis[i],"left"))) ;
        arrT.push(parseInt(getAttr(lis[i],"top"))) ;
        arrZ.push(parseInt(getAttr(lis[i],"zIndex")));
        // console.log(parseInt(getAttr(lis[0],"zIndex")));
        // console.log(arrZ[0]);
        
        
        arrO.push(parseFloat(getAttr(lis[i].getElementsByTagName("img")[0],"opacity")));
    
        
    }

            for(var j=0;j<lis.length;j++){
                // console.log(arrZ[i]);
                if(idx==1){
                    var index=j-1;
        
                    if(index<0){
                        index=9;
                    }
                }else{
                    var index=j+1;
        
                    if(index>9){
                        index=0;
                    }

                }
                
            
                lis[j].style.zIndex=arrZ[index];
                animated(lis[j].getElementsByTagName("img")[0],{
                    "opacity":arrO[index]*100,
                })
                animated(lis[j],{
                    "width":arrW[index],
                    "height":arrH[index],
                    "left":arrL[index],
                    "top":arrT[index]
                   
                    
                })
            }

        
    

}







function getAttr(dom,attr){
    if(dom.currentStyle){
        return dom.currentStyle[attr];
    }else{
        return getComputedStyle(dom,null)[attr];
    }
}