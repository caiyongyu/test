var xmlhttp;
//创建XMLHttpRequest请求
if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}else{
    //ie6 ie5
    xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
}
//向服务器发送请求
xmlhttp.open('GET','www.baidu.com',true);
xmlhttp.send();

xmlhttp.open('POST','www.baidu.com',true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('form=1&a=2')

//服务器响应
xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState=4&&xmlhttp.status==200){
        console.log(xmlhttp.responseText);
        
    }
}