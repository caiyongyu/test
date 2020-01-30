//更简单的操作dom
;(function(){

    var jquery=function(){
        return "This is my jquery!";
    }
    window.jquery=window.$=jquery;
})();

console.log(jquery());
