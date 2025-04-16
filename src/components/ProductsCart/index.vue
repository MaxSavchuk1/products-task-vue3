<script setup lang="ts">
import { formatPriceUSD } from '@/helpers/utils'

const cartStore = useCartStore()
const { products } = storeToRefs(useProductsStore())
const { cartProducts, totalPrice } = storeToRefs(cartStore)
const { clearCart } = cartStore
</script>

<template>
  <div class="list">
    <h2>Cart</h2>

    <template v-if="products.length && cartProducts.length">
      <div v-if="products.length" class="list-items">
        <item v-for="item in cartProducts" :key="item.productId" :item />
      </div>

      <div class="total-price">
        <span>Total:</span>
        <span>{{ formatPriceUSD(totalPrice) }}</span>
      </div>

      <base-button @click="clearCart">Clear cart</base-button>
    </template>

    <div v-else class="empty">Your cart is empty</div>
  </div>
</template>

<style lang="scss" scoped>
.total-price {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px 0;
}
</style>
