<template>
  <div id="app">
    <div id="nav">
      <div>
        <button @click="backhome">返回首页</button>
        <button @click="btntest2">test2</button>
        <button @click="back">返回</button>
        <button @click="forward">向前</button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/connect">connect</router-link> |
      <router-link to="/mine">mine</router-link> |
      <router-link to="/aboutme">aboutme</router-link> |
      <router-link to="/test3">test3</router-link>
    </div>
    <div class="fadecontent">
        <transition name="fade">
           <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    btntest2(){
      this.$router.push("/connect/gotest2/xiaod/10")
    },
    backhome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fadecontent {
  position: relative;
}

.fade-enter {
  transform: translateX(-100%);
}

.fade-enter-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 1s ease; 
}

.fade-enter-to {
  transform: translateX(0);
}

.fade-leave {
  transform: translateX(0);
}

.fade-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 1s ease;
}

.fade-leave-to {
  transform: translateX(100%);
}
</style>
