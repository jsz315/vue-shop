<template>

    <div class="search">
        <mt-search
            v-model="keyword"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
        <div class="nav">
            <div class="nav-item">包子</div>
            <div class="nav-item">小龙虾</div>
            <div class="nav-item">炒粉</div>
            <div class="nav-item">粥</div>
            <div class="nav-item">奶茶</div>
        </div>
        <div class="box">
            <div class="box-item">
                <img class="pic" src="../assets/logo.png"/>
                <div class="tip">美食</div>
            </div>
            <div class="box-item">
                <img class="pic" src="../assets/logo.png"/>
                <div class="tip">甜点</div>
            </div>
            <div class="box-item">
                <img class="pic" src="../assets/logo.png"/>
                <div class="tip">超市</div>
            </div>
            <div class="box-item">
                <img class="pic" src="../assets/logo.png"/>
                <div class="tip">鲜花</div>
            </div>
            <div class="box-item">
                <img class="pic" src="../assets/logo.png"/>
                <div class="tip">海鲜</div>
            </div>
        </div>

        <div class="title">食不可挡</div>
        <div class="food">
            <div class="food-item">
                <img class="pic" src="../assets//logo.png"/>
                <div class="tip">海鲜</div>
                <div class="price">¥1.5 <span class="old">¥1.8</span></div>
            </div>
            <div class="food-item">
                <img class="pic" src="../assets//logo.png"/>
                <div class="tip">海鲜</div>
                <div class="price">¥1.5 <span class="old">¥1.8</span></div>
            </div>
            <div class="food-item">
                <img class="pic" src="../assets//logo.png"/>
                <div class="tip">海鲜</div>
                <div class="price">¥1.5 <span class="old">¥1.8</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);

export default {
    data: function(){
        return {
            keyword: '',
        }
    }
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