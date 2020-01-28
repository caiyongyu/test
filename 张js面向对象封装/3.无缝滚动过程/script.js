var box1=document.getElementById("box1");

box1.style.overflow="hidden";
var uls=box1.getElementsByTagName("ul")[0];
var lis=uls.getElementsByTagName("li");
var li_num=parseInt(getAttr(lis[0],"width"));
// alert(li_num)
var li_length=lis.length;
uls.style.width=li_num*li_length+"px";
var index=0;

setInterval(function(){
    index--;
    uls.style.marginLeft=index+"px";
    if(-index>=li_num){
        uls.appendChild(uls.firstElementChild);
        index=0;
        uls.style.marginLeft="0px";
    }
},50);



function getAttr(dom,attr){
    if(dom.currentStyle){
        return dom.currentStyle(attr);
    }else{
        return getComputedStyle(dom,null)[attr]
    }
}