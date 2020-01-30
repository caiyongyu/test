//功能： 优化程序的性能     事件委托也是享元模式

// function Iphone(name,screen,date,color){
//     this.name=name;
//     this.screen=screen;
//     this.date=date;
//     this.color=color;
// }

// var arrIphone=[];
// for(var i=0;i<10000;i++){
//     arrIphone.push(new Iphone("iphone 7s","5.0","2019-9-9","红色"));
// }

// console.log(arrIphone);

function Iphone(name,screen,date){
    this.name=name;
    this.screen=screen;
    this.date=date;
}

var Factory=(function(){
    var iphones={};
    return {
        geta:function(name,screen,date){
            var key=name+screen+date;
            if(!iphones[key]){
                iphones[key]=new Iphone(name,screen,date);
            }
            return iphones[key];
        }
    }
})();

var brrIphone=[];
function Iphones(name,screen,date,color){
    this.weight=Factory.geta(name,screen,date);
    this.color=color;
}

for(var i=0;i<10000;i++){
    brrIphone.push(new Iphones("iphone 9s","4.8","2020-1-1","银色"));
}
console.log(brrIphone);



