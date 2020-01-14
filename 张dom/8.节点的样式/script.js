var oDivs=document.getElementsByTagName("div")[0];

// alert(getComputedStyle(oDivs,null).height)
// alert(oDivs.style.width);


function fns(dom,value){

    if(dom.currentStyle){
        return dom.currenTStyle[value];
    }else{
        return getComputedStyle(dom,null)[value];
    }

}


alert(fns(oDivs,"height"));



