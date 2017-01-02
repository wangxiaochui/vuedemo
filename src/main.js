import Vue from 'vue'
//import ElementUI from 'element-ui'
//  import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import App from './App.vue'

import store from './vuex/store'

import router from './js/router'

//开启debug模式
Vue.config.debug = true;

//Vue.use(ElementUI)
Vue.use(Vuex);

//var haha = 'test';
const app = new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')