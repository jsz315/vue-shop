<template>
    <mt-loadmore :cancelable="false" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <Search></Search>
        <h1>home</h1>
        <div class="word">{{num}}</div>
        <NavContent ref="nav" :nearList="nearList" :findList="findList"></NavContent>
    </mt-loadmore>
</template>

<script>
import Vue from 'vue'
import Search from '../../components/Search'
import NavContent from '../../components/NavContent'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

export default {
    components: {
        Search, NavContent
    },
    data: function(){
        return {
            value: '',
            allLoaded: false,
            num: Math.floor(Math.random() * 100),
            nearList: [],
            findList: [],
            loading: false,
            hasLoad: false
        }
    },
    async created() {
        this.nearList = await this.$httpGet("/api/goods");
        this.findList = await this.$httpGet("/api/goods");
    },
    mounted(){
        console.log("mounted home");
        this.addScrollListen();
    },
    activated() {
        console.log("activated home");
    },
    deactivated() {
        console.log("deactivated home")
    },
    beforeRouteEnter (to, from, next) {
        console.log("beforeRouteEnter home")
        next();
    },
    methods: {
        loadTop(){
            console.log("loadTop");
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom(){
            console.log("loadBottom");
            // this.allLoaded = true;
            this.$refs.loadmore.onBottomLoaded();
        },
        async scrollhandle() {
            var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop //变量windowHeight是可视区的高度
            var windowHeight =
            document.documentElement.clientHeight || document.body.clientHeight //变量scrollHeight是滚动条的总高度
            var scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight //滚动条到底部的条件
            if (scrollTop + windowHeight >= scrollHeight) {
                console.log('已经触底. loading = ' + this.loading)
                if(this.loading){
                    this.hasLoad = true;
                    return
                }
                this.loading = true;
                console.log("loading...")
                if(this.$refs.nav.selected == 1){
                    let nearList = await this.$httpGet("/api/goods");
                    console.log(nearList);
                    this.nearList = this.nearList.concat(nearList);
                }
                else{
                    let findList = await this.$httpGet("/api/goods");
                    console.log(findList);
                    this.findList = this.findList.concat(findList);
                }
                setTimeout(() => {
                    this.loading = false;
                    console.log("reset")
                    if(this.hasLoad){
                        this.hasLoad = false;
                        console.log("auto load");
                        this.scrollhandle();
                    }
                }, 200);
                console.log("loaded!")
            }
        },
        addScrollListen() {
            window.addEventListener('scroll', this.scrollhandle)
        }
    }
}
</script>

<style lang="less">
@color: #f0f0f0;
.page{
    background: @color;
}
.word{
    font-size: 24px;
    width: 750px;
    height: 90px;
    line-height: 90px;
    background: #ff0099;
}
</style>