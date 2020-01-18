var str="https://jingxuan.tmall.com/sem/tmsearch?keyword=卫衣女&refpid=mm_10011550_0_0";

function fn(c){

    var reg=new RegExp(c+"=([^&]+)");

    reg.test(str);

    return RegExp.$1;
}

alert(fn("keyword"))