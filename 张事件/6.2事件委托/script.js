var uls=document.getElementById("uls");
var lis=document.getElementsByTagName("li");
var btn=document.getElementById("btn");


btn.onclick=function(){
    var temLi=document.createElement("li");
    uls.appendChild(temLi);
}



uls.onclick=function(e){
    // alert("ul")
    var tar=e.srcElement||e.target;
    tar.style.background="blue"
}

//新添加的li，事件不生效。要用事件委托
// for(var i=0;i<lis.length;i++){
//     lis[i].onclick=function(){
//         this.style.background="red";
//     }
// }


