<template>
    <div>
        <h2>Your goods list</h2>
        <ul>
            <li v-for="p in products">
                {{ p.title }} - {{ p.price}}
                <br>
                <button
                        :disabled="!p.inventory"
                        @click="addToCart(p)">
                    Add to cart
                </button>
            </li>
        </ul>
        <cart></cart>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts',
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
