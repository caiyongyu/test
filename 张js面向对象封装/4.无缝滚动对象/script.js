// var box1=document.getElementById("box1");

// box1.style.overflow="hidden";
// var uls=box1.getElementsByTagName("ul")[0];
// var lis=uls.getElementsByTagName("li");
// var li_num=parseInt(getAttr(lis[0],"width"));

// var li_length=lis.length;
// uls.style.width=li_num*li_length+"px";
// var index=0;

// setInterval(function(){
//     index--;
//     uls.style.marginLeft=index+"px";
//     if(-index>=li_num){
//         uls.appendChild(uls.firstElementChild);
//         index=0;
//         uls.style.marginLeft="0px";
//     }
// },50);



// function getAttr(dom,attr){
//     if(dom.currentStyle){
//         return dom.currentStyle(attr);
//     }else{
//         return getComputedStyle(dom,null)[attr]
//     }
// }




function Scroll(options){
    this.box=document.getElementById(options.el);

    this.box.style.overflow="hidden";
    this.uls=this.box.getElementsByTagName("ul")[0];
    this.lis=this.uls.getElementsByTagName("li");
    // options.direction="x";               //不行
    this.dire=options.direction?options.direction:"x";
    // console.log(typeof this.dire);
    
    
    this.speed=options.speed;
    this.index=0;

    this.init();
}
Scroll.prototype={
    init:function(){
        if(this.dire=="x"){
            this.change("width","marginLeft")

            
        }else if(this.dire=="y"){
            this.change("height","marginTop")

        }
        
    },
    change:function(attr1,attr2){
        this.li_num=parseInt(this.getAttr(this.lis[0],attr1));

            this.li_length=this.lis.length;
            this.uls.style[attr1]=this.li_num*this.li_length+"px";
            var that=this;

            setInterval(function(){             //内部都指向that
                that.index--;
                that.uls.style[attr2]=that.index+"px";
                if(-that.index>=that.li_num){
                    that.uls.appendChild(that.uls.firstElementChild);
                    that.index=0;
                    that.uls.style.marginLeft="0px";
                }
            },this.speed);
    },
    getAttr:function(dom,attr){
        if(dom.currentStyle){
            return dom.currentStyle[attr];
        }else{
            return getComputedStyle(dom,null)[attr]
        }
    }
}

new Scroll({
    el:"box1",
    // direction:"x",
    speed:50
})

new Scroll({
    el:"box2",
    direction:"y",
    speed:40
})