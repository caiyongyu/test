var http=require('http');
var querystring=require('querystring');

var server=http.createServer((req,response)=>{
   let postVal="";
   req.on("data",(chunk)=>{         //每次发送的数据
       postVal+=chunk;
   })
   req.on("end",()=>{               //数据发送完成
    // console.log(req.url);
    
       console.log(querystring.parse(postVal));
       response.end();
   })
});
server.listen(8080)