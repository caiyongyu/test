<template>
  <div id="app">
    <Navgation></Navgation>
    <router-view/>
  </div>
</template>

<script>
import Navgation from "@/components/Navagation.vue"
export default {
  components:{
    Navgation
  }
}
</script>

<style>

</style>
