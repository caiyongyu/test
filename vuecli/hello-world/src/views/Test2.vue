<template>
    <div>
        <h1>this is test2 page1</h1>
        <h1>年龄：{{$route.params.username}}</h1>
        <h1>姓名：{{$route.params.userage}}</h1>
        <div>
            <button @click="isShow=!isShow">click</button>
        </div>
        <transition name="fade">
            <div v-show="isShow">hello world</div>
        </transition>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow:true
        }
    },
}
</script>
<style scoped>
    .fade-enter {
        opacity: 0;
    }
    
    .fade-enter-active {
        transition: all 1s ease;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-leave-to {
        opacity: 0;
    }
</style>