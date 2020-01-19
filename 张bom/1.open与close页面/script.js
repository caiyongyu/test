var btn=document.getElementById("btn");
var btn2=document.getElementById("btn2");
btn.onclick=function(){
    // alert(1)
    window.open("a.html","_blank")
    // window.close()          //好像在firefox会报错，脚本打开的页面不能关闭非脚本打开的页面
}
// btn2.onclick=function() {
//     // window.close()
//     alert(2)
// }
