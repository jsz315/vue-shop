<template>
    <div class="content">
        <div class="item" v-for="item in list" :key="item.id">
            <img :src="item.img" class="pic" />
            <div class="name">{{item.name}}</div>
            <div class="status">好评：{{item.score}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: Array
    },
    mounted() {
        console.log("goods mounted")
    },
}
</script>

<style lang="less" scoped>
.content{
    text-align: left;
    margin-left: 20px;
    .item{
        display: inline-block;
        width: 330px;
        margin-right: 40px;
        margin-top: 24px;
        &:nth-child(2n){
            margin-right: 0;
        }
        .pic{
            width: 100%;
            background: #f0f0f0;
            border-radius: 8px;
        }
    }
}
</style>