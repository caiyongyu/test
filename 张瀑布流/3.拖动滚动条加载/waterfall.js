//1  页面一加载就要出效果   2window.onscroll也要出效果

window.onload=function(){               //是window，非document
    waterfall("main","box");


    window.onscroll=function(){

        var ImgUrlObj={
            arr:[
                {"src":"0.jpg"},
                {"src":"1.jpg"},
                {"src":"2.jpg"},
                {"src":"3.jpg"},
                {"src":"4.jpg"},
                {"src":"5.jpg"},
                {"src":"6.jpg"}
            ]
        }

        
            if(IsscrollTop()){
                for(var j=0;j<ImgUrlObj.arr.length;j++){
                    var main=document.getElementById("main");
                    var oDiv=document.createElement("div");
                    oDiv.className="box";
                    var oPic=document.createElement("div");
                    oPic.className="pic";
                    var oImg=document.createElement("img");
                    oImg.src="images/"+ImgUrlObj.arr[j].src+"";
                    main.appendChild(oDiv);
                    oDiv.appendChild(oPic);
                    oPic.appendChild(oImg);
            }
        }
        
        


        waterfall("main","box");            //之前理解有误，此为第二次调用---重新排版函数
    }
}

function IsscrollTop(){
    var oBox=this.getCName("box");
    var body=document.documentElement||document.body;
    var sTop=body.scrollTop;
    var cHeight=body.clientHeight;
    for(var i=0;i<oBox.length;i++){
        if(oBox[oBox.length-1].offsetHeight/2+oBox[oBox.length-1].offsetTop < sTop+cHeight){
            return true;
        }else{
            return false;
        }
       
    }
    
}

function waterfall(MAIN,BOX){
    // alert(1)
    var main=document.getElementById(MAIN);
    var oBox=this.getCName(BOX);
    var oBoxWidth=oBox[0].offsetWidth;
    // alert(oBox.length)
    var Width=document.documentElement.clientWidth||document.body.clientWidth;
    // var oMainWidth=main.style.width;
    // alert(oMainWidth)
    var num=Math.floor(Width/oBox[0].offsetWidth);
    // alert(num)
    main.style.width=(num*oBoxWidth)+"px";
    var hrr=[];
    for(var i=0;i<oBox.length;i++){
        if(i<num){
            hrr.push(oBox[i].offsetHeight);
        }else{
            var minHeight=Math.min.apply(null,hrr);
            var index=fMinindex(hrr,minHeight);
            // alert(index);
            oBox[i].style.position="absolute";
            oBox[i].style.left=index*oBoxWidth+"px";
            oBox[i].style.top=minHeight+"px";
            hrr[index]+=oBox[i].offsetHeight;
        }
    }
}

function getCName(cName){

    var doms=document.getElementsByTagName("*");
    // alert(doms.length)
    var reg=new RegExp("\\b"+cName+"\\b");
    var arr=[];
    for(var i=0;i<doms.length;i++){
        if(reg.test(doms[i].className)){
            arr.push(doms[i]);
        }
    }
    return arr;
}

function fMinindex(hrr,minHeight){
    for(var i=0;i<hrr.length;i++){
        if(hrr[i]==minHeight){
            return i;
        }
    }
}