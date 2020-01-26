var uls=document.getElementById("uls");
var lis=uls.getElementsByTagName("li");
var oDivs=document.getElementsByTagName("div");

for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
        // alert(1)
        for(var j=0;j<oDivs.length;j++){
            oDivs[j].style.display="none";
            lis[j].className="";
        }
        oDivs[this.index].style.display="block";
        lis[this.index].className="active"
    }
}