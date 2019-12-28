<template>
  <div class="box">
    <header>购物车</header>

    <div class="shop-list" v-for="(item,index) in shopList" :key="index">
      <div class="container">
      <div class="container-people">
        <img src="./assets/img/banner3.png" alt="">
        <span>{{item.pName}}</span>
      </div>
      <div class="container-content">
        <div class="goods_img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="goods-right">
          <div class="goods_title">{{item.title}}</div>
          <div class="goods_des">
            <div>{{item.shopDes1}}</div>
            <div>{{item.shopDes2}}</div>
          </div>
          <div class="goods_price">￥{{item.price}}元/件</div>
        </div>
        
        
      </div>
      <div class="container-count">
        <span class="count_des">购买数量</span>
        <div class="count_btn">
          <span class="count_dsc">-</span>
          <span>1</span>
          <span class="count_add">+</span>
        </div>
      </div>
    </div>

    </div>
    

    
    <footer class="shopcar-footer">
      <div class="footer-left">实际付款：￥232.00免运费</div>
      <div class="footer-right">
        立即支付
        </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      shopList:[
        {
          id: 1,
          pName:'商家1号',
          imgUrl:'banner3.png',
          title:'二等分无人氛围让人烦豆腐乳非个人风格',
          shopDes1:'颜色：黑亮',
          shopDes2: '产品：智能手机',
          price: '9986'
        },
        {
          id: 2,
          pName:'商家2号',
          imgUrl:'banner3.png',
          title:'二等分无人氛围让人烦豆腐乳非个人风格',
          shopDes1:'颜色：黑亮',
          shopDes2: '产品：智能手机',
          price: '9986'
        },
        {
          id: 3,
          pName:'商家3号',
          imgUrl:'banner3.png',
          title:'二等分无人氛围让人烦豆腐乳非个人风格',
          shopDes1:'颜色：黑亮',
          shopDes2: '产品：智能手机',
          price: '9986'
        },
      ]
    }
  },
}
</script>

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
.container{
  width: 100%;
  /* height: 150px; */
  /* background: red; */
  padding: 50px 0;
  /* border-bottom: 1px solid #ccc; */
}
.box>.container+.container{
  border-top: 1px solid #ccc;
}
.container:nth-last-child(){
  border-bottom: none;
}
.container-people{
  height: 40px;
  line-height: 40px;
  width: 100%;
}
.container-people>img{
  height: 15px;
  width: 15px;
  padding: 0 20px;
}
.container-content{
  padding: 10px;
  background: #ccc;
  display: flex;
  /* height: 100px; */
  align-items: center;
}
.container-content .goods-right{
  margin-left: 10px;
  font-size: 14px;
}
.goods_img img{
  height: 80px;
  width: 80px;
}
.container-count{
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.goods_des{
  color: #888;
}
.count_des{
  padding-left: 15px;
}
.count_btn span{
  padding: 0 20px;
}
.count_btn{
  padding-right: 10px;
}
.count_btn .count_dsc,.count_add{
  background: #ccc;
  /* width: 15px;
  height: 18px; */
}
</style>