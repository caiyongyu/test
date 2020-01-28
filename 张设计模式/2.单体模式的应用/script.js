var btn=document.getElementById("btn");

var createEle=(function(){
    var oDiv;
    return function(){
        if(!oDiv){
            oDiv=document.createElement("div");
            oDiv.innerHTML="我是一个盒子";
            oDiv.style.display="none";
            document.body.appendChild(oDiv);
        }
        return oDiv;
    }



    // return function(){
    //     oDiv=document.createElement("div");
    //     oDiv.innerHTML="我是一个盒子";
    //     document.body.appendChild(oDiv);
    // }
}())

btn.onclick=function(){
    // alert(1)
    var rDiv=createEle();
    rDiv.style.display="block";
}