<template>     
    <div>
        <!-- 兄弟之间的传值 -->
        AA
        <button @click="btn">按钮兄弟</button>
    </div>
</template>
<script>
import bus from './Link';
export default {
    data() {
        return {
            str: '兄弟传值数据'
        }
    },
    methods: {
        btn() {
            bus.$emit('btnChange',this.str);
        }
    },
}
</script>