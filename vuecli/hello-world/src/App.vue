<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/connect">connect</router-link> |
      <router-link to="/mine">mine</router-link> |
      <router-link to="/aboutme">aboutme</router-link>
    </div>
    <div class="fadecontent">
        <transition name="fade">
           <router-view/>
        </transition>
    </div>
  </div>
</template>

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
