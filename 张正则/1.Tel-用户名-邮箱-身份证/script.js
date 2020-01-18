var tel=document.getElementById("tel");
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var IdCar=document.getElementById("IdCar");


//验证手机号
tel.onblur=function(){
    var regTel=/^1[3-8]\d{9}$/;
    if(regTel.test(this.value)){
        tel.nextElementSibling.innerHTML="电话号码正确";
    }else{
        tel.nextElementSibling.innerHTML="电话号码输入有误";
    }
}

//验证用户名
userName.onblur=function(){
    var regUserName=/^\w{6,12}$/;
    if(regUserName.test(this.value)){
        userName.nextElementSibling.innerHTML="用户名正确";
    }
    else{
        userName.nextElementSibling.innerHTML="用户名输入有误"
    }
}

//验证邮箱
userEmail.onblur=function(){
    var regEmail=/^\w+@\w{1,5}.[0-9a-zA-Z]{2,5}$/;
    if(regEmail.test(this.value)){
        userEmail.nextElementSibling.innerHTML="邮箱正确";
    }else{
        userEmail.nextElementSibling.innerHTML="邮箱输入有误";
    }
}

//验证身份证
IdCar.onblur=function(){
    var regIdCar=/^\d{17}[\dX]$/;
    if(regIdCar.test(this.value)){
        IdCar.nextElementSibling.innerHTML="证件正确";
    }else{
        IdCar.nextElementSibling.innerHTML="证件输入有误";
    }
}