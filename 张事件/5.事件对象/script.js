var btn=document.getElementById("btn");

// btn.onclick=function(){
//     // alert(e);
//     alert(arguments[0])
// }

//跨浏览器
btn.onclick=function fns(e){
    var tem=window.event||e;
    
    alert(tem);
}

// fns();           //错的