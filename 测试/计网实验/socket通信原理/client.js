const net = require('net');

const socket = new net.Socket();

const port = 8000;

const hostname = '127.0.0.1';

// socket.setEncoding = 'UTF-8';
socket.setEncoding('binary');

socket.connect( port,hostname,function(){
  socket.write('hello myserver');
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
