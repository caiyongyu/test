//1  页面一加载就要出效果   2window.onscroll也要出效果
var main=document.getElementById("main");
window.onload=function(){               //是window，非document
    // alert(1)
    var oBox=this.getCName("box");
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