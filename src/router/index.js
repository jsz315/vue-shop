import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import Member from '../page/member'
import Order from '../page/order'
import Mine from '../page/mine'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        }
    ]
})