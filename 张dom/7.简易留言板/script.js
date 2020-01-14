var btn=document.getElementById("btn");
var ouls=document.getElementById("uls");


btn.onclick=function(){
    var input=document.getElementsByTagName("input")[0];
    var temLis=ouls.getElementsByTagName("li");
    var oAs=ouls.getElementsByTagName("a");
    // alert(1)
    var lis=document.createElement("li");
    ouls.insertBefore(lis,temLis[0]);



    

    // alert(input.value)
    lis.innerHTML=input.value+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href='javascript:;'>删除</a>";

        for(var i=0;i<oAs.length;i++){
           
            oAs[i].onclick=function(){
                // alert(oAs[0].parentNode)
                // alert(2)
                ouls.removeChild(this.parentNode);
            }
            
        }
        // alert(2)
}