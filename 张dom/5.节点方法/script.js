var imgs=document.getElementById("imgs");

// imgs.getAttribute("src");
// imgs.setAttribute("src","**.jpg");
// imgs.removeAttribute("src");

function fns(min,max){
    var str=null;
    str=Math.random()*(max-min)+min;
    return str;
}

imgs.setAttribute("style","position:absolute;width:"+fns(50,400)+"px;left:"+fns(100,1200)+"px;top:"+fns(100,300)+"px;")