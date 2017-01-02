<template>
  <div id="entercomponent">
       我是入口啊
       <router-link to="/first">第一页</router-link>
       <router-link to="/second">第二页</router-link>
      <router-link to="/product">商品列表</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/dlist">列表</router-link>

        <list-data :list_head="list_head" :list="list"></list-data>
  </div>
</template>

<script>
import kk from '../js/index.js'
export default {
  data() {
    return {
        list : [],
        post: null,
        error: null,
        list_head :  ['用户名', '邮箱', '创建时间', '操作']
    }
  },
  created() {
    //组件创建完成后执行
    console.log(this.$haha);
    this.fetchData()
  },
  watch: {
     '$route': 'fetchData'
  },
  props : ['loading'],  //父组件通信
  methods : {
    fetchData () {
         console.log(kk.test+'ssbb')
         this.error = this.post = null;
         this.$http.get('http://slim_vue.com/test').then(({data}) => {
            this.list = JSON.parse(data);
            //this.list_head = 'sss';
	    
            this.$parent.loading = false
         }

         );


    }

  }

}
</script>

<style>
</style>