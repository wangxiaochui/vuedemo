/**
 * Created by Administrator on 2016/12/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import dlist from './modules/dList'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products,
        dlist
    }
})