<template>
  <div>
    <header>购物车</header>
    <div class="container"></div>
    <footer class="shopcar-footer">
      <div class="footer-left">实际付款：￥232.00免运费</div>
      <div class="footer-right">
        立即支付
        </div>
    </footer>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
   /* background: red; */
  text-align: center;
  font-size: 20px;
  height: 50px;
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  z-index: 999;
}
footer{
  /* display: fixed; */
  background: #fff;
  position: fixed;
  margin-top: 100px;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 998;
  border-top: 1px solid #ccc;
}
footer .footer-left{
  flex: 1;
  text-align: right;
  padding-right: 10px;
} 
footer .footer-right{
  text-align: center;
  width: 150px;
  height: 50px;
  background: red;
}
</style>