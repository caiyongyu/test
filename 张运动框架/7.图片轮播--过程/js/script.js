// var left=document.getElementById("left");
// var right=document.getElementById("right");

// left.onclick=function(){
//     al
// }

//用另一种

var btn=document.getElementById("btn");
var oSpan=btn.getElementsByTagName("span");
var uls=document.getElementById("uls");

for(var i=0;i<oSpan.length;i++){
    oSpan[i].index=i;
    oSpan[i].onclick=function(){
        if(this.index==0){
            // alert(1)
            animated(uls,{
                "marginLeft": -520
            },function(){
                uls.appendChild(uls.firstElementChild);
                uls.style.marginLeft=0;
            })
            
        }else{
            // alert(2)
            uls.style.marginLeft="-520px";
            uls.insertBefore(uls.lastElementChild,uls.firstElementChild);
            animated(uls,{
                "marginLeft":0
            })
        }
    }
}