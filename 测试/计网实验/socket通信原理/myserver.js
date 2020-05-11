const net = require( 'net' );
const port = 8000;
const hostname = '127.0.0.1';

// 定义两个变量， 一个用来计数，一个用来保存客户端
let clients = {};
let clientName = 0;
let temp=0;


// 创建服务器
const server = new net.createServer(function(socket){
    // socket.write('Hello client!\n');
    socket.name = ++temp; 
    clients[socket.name] = socket;
    socket.on('data',function(data){
        console.log(`client${socket.name} send:` + data);
        // message=data;
        var message=data.toString();
        socket.write(message.toUpperCase());            //toLowerCase()
        // socket.write(typeof data);          //object
       });
    
});

server.on('connection', (client) => {
  client.name = ++clientName; // 给每一个client起个名
  clients[client.name] = client; // 将client保存在clients

//   client.on('data', function (msg) { //接收client发来的信息
//     console.log(`客户端${client.name}发来一个信息：${msg}`);
//     this.message=`${msg}`;
//   });

  
  client.on('error', function (e) { //监听客户端异常
    console.log('client error' + e);
    client.end();
  });

  client.on( 'close', function () {
    delete clients[client.name];
    console.log(`客户端${ client.name }下线了`);
  });

});

server.listen( port,hostname,function () {
  console.log(`服务器运行在：http://${hostname}:${port}`);
});
