var container=document.getElementById('container');
var left=document.getElementsByClassName('left')[0];
var right=document.getElementsByClassName('right')[0];
var uls=document.getElementById('uls');
var lis=uls.getElementsByTagName('li');
var ols=document.getElementById('ols');
var olis=ols.getElementsByTagName('li');
var index=0;
container.onmousemove=function name() {
    left.style.display='block';
    right.style.display='block';
    // alert(1);
}
container.onmouseout=function() {
    left.style.display='none';
    right.style.display='none';
}

right.onclick=function() {
    for(var i=0;i<lis.length;i++){
        lis[i].style.display='none';
        olis[i].className='';
    }
    index++;
    if(index>lis.length-1){
        index=0;
    }
    lis[index].style.display='block';

    olis[index].className='bg';
}
left.onclick=function() {
    for(var i=0;i<lis.length;i++){
        lis[i].style.display='none';
        olis[i].className='';
    }
    index--;
    if(index<0){
        index=lis.length-1;
    }
    lis[index].style.display='block';

    olis[index].className='bg';
}