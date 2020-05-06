const net = require('net');

const socket = new net.Socket();

const port = 8000;

const hostname = '127.0.0.1';

// socket.setEncoding = 'UTF-8';
socket.setEncoding('binary');

socket.connect( port,hostname,function(){
  // socket.write('hello myserver');
  // var arr=[
  //   {
  //     'pro1':'N1',
  //     'pro2':5,
  //     'pro3':'A'
  //   },
  //   {
  //     'pro1':'N2',
  //     'pro2':4,
  //     'pro3':'G'
  //   },
  //   {
  //     'pro1':'N3',
  //     'pro2':8,
  //     'pro3':'B'
  //   },
  //   {
  //     'pro1':'N6',
  //     'pro2':4,
  //     'pro3':'E'
  //   },
  //   {
  //     'pro1':'N8',
  //     'pro2':3,
  //     'pro3':'F'
  //   }
  // ]
  this.Crr='[{"pro1":"N1","pro2":5,"pro3":"A"},{"pro1":"N2","pro2":4,"pro3":"G"},{"pro1":"N3","pro2":8,"pro3":"B"},{"pro1":"N6","pro2":4,"pro3":"E"},{"pro1":"N8","pro2":3,"pro3":"F"}]';
  socket.write(this.Crr);
  var that=this;
  this.timer=setInterval(function(){
    socket.write(that.Crr);
    
  },3000)
});

socket.on( 'data', function ( msg ) {

  var newCrr=JSON.parse(this.Crr);
  // console.log( JSON.parse(msg) );
  var receiveBrr=JSON.parse(msg);
  this.pri=true;
  for(var i=0;i<receiveBrr.length;i++){
    receiveBrr[i]['pro2']++;
    if(receiveBrr[i]['pro2']>16){
      this.pri=false;
      clearInterval(this.timer);
    }
    else if(receiveBrr[i]['pro2']==16){
      newCrr[i]=receiveBrr[i];
      
    }
    receiveBrr[i]['pro3']='B';
  }
  // console.log(this.Crr);
  
  
        for(var i=0;i<receiveBrr.length;i++){
          for(var j=0;j<newCrr.length;j++){
            if(receiveBrr[i]['pro1']==newCrr[j]['pro1']){
              if(receiveBrr[i]['pro3']==newCrr[j]['pro3']||receiveBrr[i]['pro2']<newCrr[j]['pro2']){
                newCrr[j]=receiveBrr[i];
              }
              break;
            }
          }
          if(j==newCrr.length){
            newCrr.push(receiveBrr[i]);
          }
        }
        // newCrr.sort(compare('pro1'));
        if(this.pri){
          console.log(newCrr);
          console.log('');
        }
        
        this.Crr=JSON.stringify(newCrr);
});

socket.on( 'error', function ( error ) {
  console.log( 'error' + error );
});

socket.on('close',function(){
  console.log('服务器端下线了');
});
