var http=require('http');
var querystring=require('querystring');
var mysql=require('mysql');

var server=http.createServer((req,response)=>{
    // response.write('11111');
    var postVal="";
    req.on("data",(chunk)=>{
        postVal+=chunk;
    })
    req.on("end",()=>{
        console.log(req.url);           //默认就有   /favicon.ico
        
        if(req.url!='/favicon.ico'){
            var result=querystring.parse(postVal);
        var name=result.uname;
        var password=result.pwd;
        // console.log(name,password);
        const connection=mysql.createConnection({
            host:"localhost",
            user:'root',
            password:'123456',
            database:'demo2'
        })
        connection.connect();
        connection.query("insert into user(uname,pwd) value(?,?)",[name,password],(err,results,fileds)=>{
            // console.log(results);
            if(err) throw err;
            if(results.length>0){
                response.write('login success!');
            }
            response.end();
        })
        connection.end();
        }
        
        
    })
    
});
server.listen(8080)