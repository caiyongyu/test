var http=require('http');

var server=http.createServer((req,response)=>{
    response.write('11111');
    response.end();
});
server.listen(8080)