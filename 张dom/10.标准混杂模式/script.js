// alert(document.documentElement.clientWidth);                    //1366
// alert(document.documentElement.clientHeight);

// alert(document.body.clientWidth)                                //1350  有左右margin: 8px
// alert(document.body.clientHeight)

// 标准模式和混杂模式
var btn=document.getElementById("btn");
btn.onclick=function(){
    // alert(document.body.scrollTop);
    var top=document.body.scrollTop||document.documentElement.scrollTop;        //正常是chrome识别混杂模式--body，firefox和IE识别标准模式--documentEement.可现在都只识别标准模式？？
    alert(top)
}