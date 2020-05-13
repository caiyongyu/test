var oUl=document.getElementById('uls');
var lis=oUl.getElementsByTagName('li');
var divs=document.getElementsByTagName('div');

oUl.onmousemove=function(e){
    var e=window.event||e;
    var tar=e.target||e.srcElement;
    // console.log(tar);
    for(var i=0;i<divs.length;i++){
        lis[i].className="";
        divs[i].style.display="none";
    }
    tar.className="active";
    divs[tar.title].style.display="block";
    // divs
}