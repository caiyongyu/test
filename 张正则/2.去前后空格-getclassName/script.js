var uls=document.getElementById("uls");

function getclassName(cName){
    var arr=[];
    var doms=document.getElementsByTagName("*");
    // alert(doms.length)
    var reg=new RegExp("\\b"+cName+"\\b");
    for(var i=0;i<doms.length;i++){
        if(reg.test(doms[i].className)){
            arr.push(doms[i]);
        }
    }
    return arr;
}

for(var i=0;i<getclassName("lis").length;i++){
    getclassName("lis")[i].style.background="red";
}


// alert(getclassName("lis").length)