<template>
    <div>
        底部
        {{xxxx}}
        <button @click="btn">按钮</button>
    </div>
</template>
<script>
export default {
    props: ['xxxx'],
    data() {
        return {
            str:"这是底部数据"
        }
    },
    methods: {
        btn() {
            this.$emit("changeStr",this.str);
        }
    },
}
</script>