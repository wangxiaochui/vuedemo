import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
import secondcomponent from '../components/secondcomponent.vue'
import entercomponent from '../components/entercomponent.vue'
import listcomponent from '../components/listcomponent.vue'
import barItem from '../components/barItem.vue'
import listDemo from '../components/listDemo.vue'
import cardDemo from '../components/cardDemo.vue'
import diyDemo from '../components/diyDemo.vue'
import product from '../components/productList.vue'
import cart from '../components/cart.vue'
import dlist from '../components/dList.vue'
import learn from '../components/learn.vue'
import form from '../components/form.vue'
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
   // history: false,
    hashbang: true,
    base: __dirname,
    routes: [
        {
            path: '/',
            component: entercomponent,
            children : [
                { path: 'data', component: listcomponent},
            ]
        },
        {
            path: '/index',
            component: entercomponent
        },
        {
            path: '/add',
            component: form
        },
        {
            path: '/list',
            component: listDemo
        },
        {
            path: '/message',
            component: secondcomponent
        },
        {
            path: '/card',
            component: cardDemo
        },
        {
            path: '/diy',
            component: diyDemo
        },
        {
            path: '/product',
            component: product
        },
        {
            path: '/cart',
            component: cart
        },
        {
            path: '/dlist',
            component: dlist
        },
        {
            path: '/learn',
            component: learn
        }
    ]
});

//注册全局组件
Vue.component('list-data',listcomponent);
Vue.component('bar-item', barItem)
Vue.component('cart', cart)

//路由前处理
router.beforeEach((to, from , next)=>{
    next()
});

module.exports = router