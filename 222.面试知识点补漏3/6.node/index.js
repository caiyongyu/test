console.log('test nodejs');
var aa=11;
var bb=22;
global.cc=33;
function fn(){
    console.log('fn function!');
    
}

module.exports.aa=aa;
module.exports.fn=fn;