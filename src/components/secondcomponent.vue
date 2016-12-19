<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> start vue</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "yanxs",
      articles: [],
    }
  },
    props : ['loading'],  //父组件通信
     created() {
       //this.$parent.loading = true
      }

}
</script>

<style>
</style>