;
self.onmessage=function(event){
    var data=event.data;
    var ans=fibo(data);
    this.postMessage(ans);
}
function fibo(n){
    return n<2?n:arguments.callee(n-1)+arguments.callee(n-2);
}