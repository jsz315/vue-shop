<template>
    <mt-tabbar class="mine-tabbar" v-model="selected">
        <mt-tab-item id="tab1">
            <router-link to="/home">
                <div class="mint-tab-item-icon"><img slot="icon" src="../assets/logo.png"></div>  
                <div class="mint-tab-item-label">首页</div>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <router-link to="/member">
                <div class="mint-tab-item-icon"><img slot="icon" src="../assets/logo.png"></div>  
                <div class="mint-tab-item-label">会员</div>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <router-link to="/order">
                <div class="mint-tab-item-icon"><img slot="icon" src="../assets/logo.png"></div>  
                <div class="mint-tab-item-label">订单</div>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <router-link to="/mine">
                <div class="mint-tab-item-icon"><img slot="icon" src="../assets/logo.png"></div>  
                <div class="mint-tab-item-label">我的</div>
            </router-link>
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
    data: function(){
        return {
            selected: 'tab1'
        }
    }
}
</script>

<style>
.mine-tabbar.mint-tabbar{
    position: fixed;
}
</style>