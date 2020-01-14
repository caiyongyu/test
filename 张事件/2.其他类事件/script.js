
window.onload=function(){


    var box=document.getElementById("box");

    box.style.background="red";

}

var txt=document.getElementById("txt");

txt.onfocus=function(){
    txt.style.background="red";
}

txt.onblur=function(){
    txt.style.background="blue";
}

window.onresize=function(){
    alert(1)
}

window.onscroll=function(){
    alert("滚动了")
}

var city=document.getElementById("city");
city.onchange=function(){
    alert("值改变了")
}


