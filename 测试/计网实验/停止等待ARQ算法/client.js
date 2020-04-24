const net = require('net');

const socket = new net.Socket();

const port = 8000;

const hostname = '127.0.0.1';

// socket.setEncoding = 'UTF-8';
socket.setEncoding('binary');

var toServer=['0','1','2','3','4','5','6','7','8'];
for(var j=9;j<100;j++){
  toServer.push(j+"");
}

var i=1;
var oldTime;
var lyout=500;
socket.connect( port,hostname,function(){
  
  
  socket.write(toServer[0]);
  oldTime=Date.now();
    setInterval(function(){
      socket.write(toServer[i]);
      // console.log(lyout);
      
      i++;
    },lyout)
  

    
});



socket.on( 'data', function ( msg ) {
  // console.log(msg);
  var newDate=Date.now();
  if(msg=='NO'&&newDate-oldTime>500){      //没有返回ACK，并且超时  则超时重传
    i--;
    lyout=2000;
    // oldTime=newDate;
    console.log('id:'+i+' 计时器内未收到ACK')
}
  
  else if(msg.indexOf('ACK')!=-1){        //接收到确认信息ACK
    // console.log(msg);
    
    if(msg.indexOf('or')!=-1){          //确认信息ACK丢失或延迟
      console.log(msg+' data数据重发');
    }else
    {
      
      // console.log(newDate-oldTime);
      console.log(msg);               //计时器内接收到了ACK
     
    }
    oldTime=newDate;
    lyout=500;
  } 
});

socket.on( 'error', function ( error ) {
  console.log( 'error' + error );
});

socket.on('close',function(){
  console.log('服务器端下线了');
});
