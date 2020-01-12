var oA=document.getElementsByTagName('a');
var divs=document.getElementById('dv1');

for(var i=0;i<oA.length;i++){
    oA[i].onclick=function(){
        this.parentNode.style.display='none';
        // alert(this.parentNode)
    }
}

alert(divs.firstChild.nodeValue)
