<template>
    <div id='learn'>
        <button @click="show = !show">
        Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>
<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<script>
    export default{
      data() {
        return {
          show: true
        }
      }
    }
</script>
