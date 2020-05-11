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
    function compare(property){
      return function(value1,value2){
          var num1=Number(value1[property].charAt(1));
          var num2=Number(value2[property].charAt(1));
          return num1-num2;
      }
  }
    socket.on('data',function(data){
        // console.log(`client${socket.name} send:` + data);
        var Crr=JSON.parse(data);

        var flag=1;
        if(flag==1){

          var BrrString='[{"pro1":"N1","pro2":11,"pro3":"A"},{"pro1":"N2","pro2":12,"pro3":"C"},{"pro1":"N6","pro2":11,"pro3":"F"},{"pro1":"N8","pro2":4,"pro3":"E"}]';
          flag=0;
        }
        var Brr=JSON.parse(BrrString);

        for(var i=0;i<Crr.length;i++){
          Crr[i]['pro2']++;
          if(Crr[i]['pro2']>16){
            Brr[i]=Crr[i];
            Brr[i]['pro2']=16;
          }
          else if(Crr[i]['pro2']==16){
            Brr[i]=Crr[i];
          }
          Crr[i]['pro3']='C';
        }
        // console.log(Crr);
        
        for(var i=0;i<Crr.length;i++){
          for(var j=0;j<Brr.length;j++){
            if(Crr[i]['pro1']==Brr[j]['pro1']){
              if(Crr[i]['pro3']==Brr[j]['pro3']||Crr[i]['pro2']<Brr[j]['pro2']){
                Brr[j]=Crr[i];
              }
              break;
            }
          }
          if(j==Brr.length){
            Brr.push(Crr[i]);
          }
        }
        Brr.sort(compare('pro1'));
        console.log(Brr);
        console.log('');
        var toCStr=JSON.stringify(Brr);
        // console.log(toCStr);
        BrrString=toCStr;
        socket.write(toCStr);          //object
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
