var ols=document.getElementById('uls');
// var imgs=document.getElementsByTagName('img').getAttributeNode("src");

var pro=document.getElementById("mytest").getAttributeNode("id");
// alert(ols.childNodes.length);

for(var i=0;i<ols.childNodes.length;i++){
    if(ols.childNodes[i].nodeName=="LI"){
        ols.childNodes[i].style.background="red";
    }

}

// for(var i=0;i<ols.childNodes.length;i++){
//     if(ols.childNodes[i].nodeType==1){
//         ols.childNodes[i].style.background="red";
//     }

// }
// alert(ols.childNodes[11].nodeType)
// alert(imgs.nodeType);
// alert(pro.nodeType)
// console.log(ols.firstChild.nodeValue)
// alert(pro.nodeValue)
alert(ols.childNodes[1].nodeValue)

