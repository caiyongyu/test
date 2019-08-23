<template>
  <div id="app">
    <Navgation :activeObj="initActive"></Navgation>
    <router-view @changeActive="thisActive"/>
  </div>
</template>

<script>
import Navgation from "@/components/Navagation.vue"
export default {
  data() {
    return {
      initActive:{
        title:"电影",
        navName:"movie"
      }
    }
  },
  methods:{
    thisActive(obj) {
    this.initActive=obj;
  }
  },
  components:{
    Navgation
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
</style>
