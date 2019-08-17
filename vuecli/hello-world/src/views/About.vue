<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld :msg="str"/>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld"
export default {
  name:"about",
  data() {
    return {
      str:"hello"
    }
  },
  components:{
    HelloWorld:HelloWorld
  }
}
</script>
