const net = require('net');

const socket = new net.Socket();

const port = 8000;

const hostname = '127.0.0.1';

// socket.setEncoding = 'UTF-8';
socket.setEncoding('binary');
var flag=1;
socket.connect( port,hostname,function(){
  // socket.write('hello myserver');
  
  
  
  if(this.flag==1){
    this.Crr='[{"pro1":"N1","pro2":5,"pro3":"A"},{"pro1":"N2","pro2":4,"pro3":"G"},{"pro1":"N3","pro2":8,"pro3":"B"},{"pro1":"N6","pro2":4,"pro3":"E"},{"pro1":"N8","pro2":3,"pro3":"F"}]';
    this.flag=2;
  }
  else{       //设计多路由，路由D
    this.Crr='[{"pro1":"N1","pro2":5,"pro3":"F"},{"pro1":"N2","pro2":4,"pro3":"A"},{"pro1":"N3","pro2":8,"pro3":"B"},{"pro1":"N6","pro2":4,"pro3":"C"},{"pro1":"N8","pro2":3,"pro3":"B"}]';
  }
  socket.write(this.Crr);
  var that=this;
  this.timer=setInterval(function(){
    socket.write(that.Crr);
    
  },1500)
});

socket.on( 'data', function ( msg ) {

  var newCrr=JSON.parse(this.Crr);
  // console.log( JSON.parse(msg) );
  var receiveBrr=JSON.parse(msg);
  this.pri=true;
  for(var i=0;i<receiveBrr.length;i++){     //遍历接收到的Brr，将值+1，并将下一跳全部置为B
    receiveBrr[i]['pro2']++;
    if(receiveBrr[i]['pro2']>16){     //不可达，清除定时器
      this.pri=false;
      clearInterval(this.timer);
    }
    else if(receiveBrr[i]['pro2']==16){       //临界了，还需向服务端发送最后一次
      newCrr[i]=receiveBrr[i];
      
    }
    receiveBrr[i]['pro3']='B';
  }
  // console.log(this.Crr);
  
  
        for(var i=0;i<receiveBrr.length;i++){
          for(var j=0;j<newCrr.length;j++){
            if(receiveBrr[i]['pro1']==newCrr[j]['pro1']){     //遍历接收到的数组，匹配property1相等的对
              if(receiveBrr[i]['pro3']==newCrr[j]['pro3']||receiveBrr[i]['pro2']<newCrr[j]['pro2']){    //下一跳相等更新，值小于原路由表更新
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


//Interview summary for Miss Tian
// js闭包
// 闭包是指有权访问其他函数内部变量的函数
// 常见的闭包是在一个函数中创建另一个函数
// 闭包的特点是可以引用外层函数的参数，变量，不会被ie的gc主动回收内存
// 闭包可以读取函数内部变量，也可以让这些变量始终保持在内存中

//面试题：
// function fun(n,o){
//   console.log(o);
//   return {
//     fun: function(m){
//       return fun(m,n);
//     }
//   };
// }

// var a = fun(0);  // ?
// a.fun(1);        // ?        
// a.fun(2);        // ?
// a.fun(3);        // ?

// var b = fun(0).fun(1).fun(2).fun(3);  // ?

// var c = fun(0).fun(1);  // ?
// c.fun(2);        // ?
// c.fun(3);        // ?



// js原型和原型链
// js原型是一个容易混淆的概念。接下来我从三个属性来讲解js的原型以及原型链。

// __proto__:
// 对象所特有的属性，指向创建该对象构造函数的原型，它是由一个对象指向另一个对象。当我们访问一个对象的某个属性时，首先会在该对象实例上寻找该属性，如果没有找到则会去该对象__proto__所指向的对象上寻找，依次类推直到到达顶端的null。以上不断通过__proto__属性来连接对象直到顶端的null值形成的一条链表就成为原型链。

// prototype:
// 函数所特有的属性，指向函数的原型对象。它是由一个函数指向一个对象，当然函数本身也是一个特有的对象。该属性的作用是创建一个特定类型的所有实例可继承的公共属性和公共方法，任何函数在创建的同时也会默认创建一个prototype属性。原型链的终点是Object.prototype?null。

// constructor:
// 对象所特有的属性，指向对象的构造函数。它是由一个对象指向一个函数。constructor的终点是Function，所有的对象和函数都是由Function构造而来。

// let Foo = function(){}
// let f1 = new Foo()