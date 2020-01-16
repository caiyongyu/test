var uls=document.getElementById("uls");
var cite=document.getElementsByTagName("cite")[0];
var dv1=document.getElementById("box");
var lis=document.getElementsByTagName("li");

var index=-1;

dv1.onclick=function(){
    uls.style.display="block";

    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(e){
            // alert(this.innerHTML)
            var e=window.event||e;
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble=true;
            }
            cite.innerHTML=this.innerHTML;
            uls.style.display="none";
        }
        lis[i].onmouseover=function(){
            window.bg=this.style.background;
            this.style.background="#ccc"
        }
        lis[i].onmouseout=function(){
            for(var j=0;j<lis.length;j++){
                lis[j].style.background=bg;
            }
        }
    }
}


document.onkeydown=function(e){
    var e=window.event||e;
    switch(e.keyCode){
        case 38:
            // alert("上");

            index--;
            for(var j=0;j<lis.length;j++){
                lis[j].style.background="#fff";
            }
            if(index<0){
                index=lis.length-1;
            }
            lis[index].style.background="#ccc";
            break;
        case 40:
            // alert("下");
            index++;
            for(var j=0;j<lis.length;j++){
                lis[j].style.background="#fff";
            }
            if(index>lis.length-1){
                index=0;
            }
            lis[index].style.background="#ccc";
            
            break;
        case 13:
            // alert("回车");
            cite.innerHTML=lis[index].innerHTML;
            // index=-1;
            uls.style.display="none";
            for(var j=0;j<lis.length;j++){
                lis[j].style.background="#fff";
            }
            index=-1;
            break;
    }
}

// dv1.onmouseout=function(){
//     uls.style.display="none";
// }