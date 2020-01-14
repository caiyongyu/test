function fns(num1,num2){
    return(num1+num2);
}


var dv2=document.getElementById("dv2");

dv2.addEventListener("click",function(){
    alert("Dom 2级")
},false)

dv2.addEventListener("click",function(){
    alert("Dom 2级 第二个")
},false)
