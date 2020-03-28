var http=require('http');
var url=require('url');

var server=http.createServer((req,response)=>{
    response.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    const reqUrl=req.url;
    formVal=url.parse(reqUrl,true).query;
    console.log(formVal.uname,formVal.pwd);
    
    
    response.end("用户名："+formVal.uname+"  "+"密码："+formVal.pwd);
}).listen(8080);