<template>
  <div id="app">
    <!-- {{this.$store.state.cityName}} -->
    {{cityName}}
    {{datas}}
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  // computed: mapState(["cityName"])
  computed: {
    ...mapState(['cityName']),
    datas() {
      return "李四";
    },
    ...mapMutations(['changeStr'])
  },
  methods: {
    btn() {
      this.changeStr();
      // window.console.log(this.changeStr)
    }
  },
}
</script>
