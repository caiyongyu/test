<template>
  <div>
    <header>购物车</header>
    <div class="container"></div>
    <footer class="shopcar-footer">
      <div class="footer-left">总价格：2323元</div>
      <div class="footer-right">立即支付</div>
    </footer>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
header{
  display: fixed;
  top: 0;
  left: 0;
  background: #fff;
  /* background: red; */
  text-align: center;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #444;
  z-index: 999;
}
.shopcar-footer{
  display: fixed;
  background: red;
  /* bottom: 0; */
  left: 0;
  bottom: 0;
  height: 50px;
  z-index: 998;
}
</style>