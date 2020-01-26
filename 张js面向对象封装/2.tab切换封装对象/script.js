
function Fn(options){
    this.uls=document.getElementById(options.parentId);
    this.lis=this.uls.getElementsByTagName(options.parentEle);
    this.box=document.getElementById(options.childId);
    this.oDivs=this.box.getElementsByTagName(options.childEle);
    this.Event=options.events;
    this.init(this.Event);
}

Fn.prototype={
    init:function(e){
        for(var i=0;i<this.lis.length;i++){
            // console.log(this);
            
            this.lis[i].index=i;
            var that=this;
            this.lis[i][e]=function(){
                // console.log(this);
                
                that.change(this.index);                //为何此处的this指向li节点？？？
                // console.log(this);
                
            }
        }
    },
    change:function(i){
        for(var j=0;j<this.oDivs.length;j++){
            this.oDivs[j].style.display="none";
            this.lis[j].className="";
        }

        this.oDivs[i].style.display="block";
        this.lis[i].className="active"
    }
}

// new Fn({

//     parentId:"uls",
//     parentEle:"li",

//     childId:"box",
//     childEle:"div",

//     events:"onmouseover"
// })

new Fn({

    parentId:"btn",
    parentEle:"button",

    childId:"box2",
    childEle:"div",

    events:"onclick"
})

//用处：  1 页面中多次用到        2 要求函数封装
//1 生成构造函数      2传递的实参中，按触发节点不同，展示节点不同，方法不同等   3 原型中的方法按功能点划分   
//注意点： this.       this.index 