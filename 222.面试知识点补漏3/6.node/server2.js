var http=require('http');
var url=require('url');

var server=http.createServer((req,response)=>{
    const reqUrl=req.url;
    console.log(reqUrl);
    
    // console.log(url.parse(reqUrl,true).query.name);
    
    response.end();
}).listen(8080);