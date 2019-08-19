<template>
    <div>
        <button @click="$store.commit('add')">加一</button>
        <button @click="$store.commit('reduce')">减一</button>
        <h1>{{$store.state.count}}</h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>