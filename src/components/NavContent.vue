<template>

    <div class="nav-content">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">附近商家</mt-tab-item>
            <mt-tab-item id="2">发现好菜</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <Goods :list="nearList"></Goods>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <Goods :list="findList"></Goods>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import Vue from 'vue';
import { Navbar, TabItem } from 'mint-ui';
import Goods from './Goods';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
    data: function(){
        return {
            selected: '1',
        }
    },
    props: {
        nearList: Array,
        findList: Array
    },
    components: {Goods},
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>

<style lang="less">
.search{
    .mint-search{
        height: auto;
    }
}
.nav{
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    .nav-item{
        font-size: 18px;
        color: #666;
        flex: 1;
        border-right: solid 1px #f00;/*no*/
        &:last-child{
            border: none;
        }
    }
}
.box{
    width: 700px;
    background: #ffffff;
    border-radius: 8px;
    margin: 10px auto;
    display: flex;
    padding: 20px 10px;
    justify-content: space-around;
    .box-item{
        .pic{
            width: 120px;
            height: 120px;
            background: #999;
            border-radius: 20px;
            overflow: hidden;
        }
    }
}
.title{
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    padding: 10px 20px;
}
.food{
    width: 700px;
    background: #ffffff;
    margin: 10px auto;
    display: flex;
    padding: 20px 10px;
    justify-content: space-around;
    .food-item{
        text-align: left;
        .pic{
            width: 218px;
            height: 180px;
            background: #999;
            border-radius: 20px;
            overflow: hidden;
        }
        .tip{
            font-size: 16px;
        }
        .price{
            color: #448800;
        }
    }
}
</style>