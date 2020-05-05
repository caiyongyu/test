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
  socket.write('[{"pro1":"N1","pro2":5,"pro3":"A"},{"pro1":"N2","pro2":4,"pro3":"G"},{"pro1":"N3","pro2":8,"pro3":"B"},{"pro1":"N6","pro2":4,"pro3":"E"},{"pro1":"N8","pro2":3,"pro3":"F"}]');
});

socket.on( 'data', function ( msg ) {
  console.log( msg );
});

socket.on( 'error', function ( error ) {
  console.log( 'error' + error );
});

socket.on('close',function(){
  console.log('服务器端下线了');
});
