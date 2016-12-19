import Vue from 'vue'
//import ElementUI from 'element-ui'
//  import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import store from './vuex/store'

//开启debug模式
Vue.config.debug = true;

//Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment (state) {
//             state.count++
//         }
//     }
// })


const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
import secondcomponent from './components/secondcomponent.vue'
import entercomponent from './components/entercomponent.vue'
import listcomponent from './components/listcomponent.vue'
import barItem from './components/barItem.vue'
import listDemo from './components/listDemo.vue'
import cardDemo from './components/cardDemo.vue'
import diyDemo from './components/diyDemo.vue'
import product from './components/productList.vue'
import cart from './components/cart.vue'
import dlist from './components/dList.vue'
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


const app = new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')