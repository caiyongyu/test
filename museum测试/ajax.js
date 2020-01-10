function ajax(options){
    var xhr=null;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject('Microsoft.XMLHTTP');
    }

    var params=forms(options.data);

    if(options.type=="GET"){
        xhr.open(options.type,options.url+'?'+params,options.async);
        xhr.send(null);
    }else if(options.type=='POST'){
        xhr.open(options.type,options.url,options.async);
        // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(options.data));
    }

    
    // console.log(params);

    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            options.success(xhr.responseText)
            
        }
    }
    
    

    function forms(data){
        var arr=[];
        for(var i in data){
            // console.log(data[i]);
            
            arr.push(i+'='+data[i]);
        }
        return arr.join('&');
        
    }
    
}