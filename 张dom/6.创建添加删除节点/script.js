var oDiv=document.createElement("div");                 //创建元素节点
// document.body.appendChild(oDiv);                     //添加节点    追加

// var oDivs=document.getElementById("dv1");
// var text=document.createTextNode("hello");              //创建文本节点
// oDivs.appendChild(text);


var uls=document.getElementById("uls");
var lis=document.getElementsByTagName("li");
// var aa=uls.getElementsByTagName("div");
uls.insertBefore(oDiv,lis[1]);                              //添加节点   头插
var temDiv=uls.getElementsByTagName("div");
var text=document.createTextNode("临时创建的div");              //临时创建的div不能添加文本节点
oDiv.appendChild(text);

lis[3].style.background="red";
// uls.removeChild(lis[1]);                                    //删除节点

