<template>
    <div>
        <button @click="addHandle">加一</button>
        <button @click="reduceHandle">减一</button>
        <h1>{{count}}</h1>
    </div>
</template>
<script>
export default {
    methods: {
        addHandle(){
            this.$store.commit('add')
        },
        reduceHandle(){
            this.$store.commit('reduce')
        }
    },
    computed: {
        count(){
            return this.$store.state.count+10
        }
    }
}
</script>
<style scoped>
    
</style>