<template>
  <div>
    <!-- <h1>{{ changeStr }}</h1> -->
    <!-- <h2 v-text="str"></h2> -->
    <!-- <input type="text" :value="changeStr"> -->
    <!-- <button @click="btnClick">这是个按钮</button> -->
    <!-- <div @mouseover="numMouseover">
      123
    </div> -->
    <!-- <h2 v-html="str"></h2> -->


    <!-- <input type="text" v-model="str">
    <h1>{{str}}</h1>
    <h2 v-once>{{str}}</h2> -->


  <!-- <h2 v-if="shopCar.length==1">11111</h2>
  <h2 v-if="shopCar.length==3">33333</h2>
  <h2 v-else>is Null</h2> -->

  <!-- <ul v-if="shopCar.length>0">
    <li v-for="(item,index) in shopCar" :key="item">{{item}}{{index}}</li>
  </ul>
  <h2 v-else>is null</h2>
  </div> -->



  <table v-if="this.list.length>0">
    <tbody>
      <tr>
        <th>编号</th>
        <th>商品名称</th>
        <th>单价</th>
        <th>商品数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="reduceCount(index)" :disabled="item.count==1">-</button>
          {{item.count}}
          <button @click="addCount(index)">+</button>
        </td>
        <td><button @click="Delete(index)">删除</button></td>
      </tr>
    </tbody>
    
    <h1>总价：{{showTotal}}</h1>
  </table>
  <h2 v-else>暂无数据。。。</h2>
  
  </div>
</template>

<script>

export default {
  // data() {
  //   return {
  //     // str:"<input type='text'>"
  //     // str: "abc"
  //     shopCar:['鞋','衣服','充电宝']
  //   }
  // },
  // computed: {
  //   changeStr() {
  //     return this.str.split("").reverse().join("");
  //     // str="123";
  //   }
  // },
  // methods: {
  //   btnClick() {
  //     this.str="123";
  //   },
  //   numMouseover() {
  //     alert(2);
  //   }
  // },

  data() {
    return {
      list:[]
    }
  },
  methods: {
    addCount(index) {
      this.list[index].count++;
    },
    reduceCount(index) {
      if(this.list[index].count==1) return;
      this.list[index].count--;
    },
    Delete(index){
      this.list.splice(index,1);
    }
  },
  computed: {
    showTotal(){
      let total=0;
      for(let i=0;i<this.list.length;i++){
        total+=this.list[i].price*this.list[i].count;
      }
      return total;
    }
  },

}
</script>

<style>
/* div{
  color: red;
} */
table{
  border: 1px solid #f5f5f5;
  border-spacing: 0;
  border-collapse: collapse;
}
th,td{
  border: 1px solid #f5f5f5;
  padding: 15px;
}
</style>