<script setup lang="ts">
import type { CartItem } from '@/helpers/types'
import { formatPriceUSD } from '@/helpers/utils'

const { item } = defineProps<{ item: CartItem }>()
const { findProductById } = useProductsStore()
const { removeFromCart, increaseAmount, decreaseAmount } = useCartStore()

const currentProduct = computed(() => findProductById(item.productId))
</script>

<template>
  <div class="cart-item">
    <div class="cart-item--info">
      <base-image :src="currentProduct.thumbnail" height="90px" width="90px" />
      <div>
        <a href="#">{{ currentProduct.title }}</a>
        <span>{{ formatPriceUSD(currentProduct.price) }}</span>
      </div>
    </div>

    <div class="cart-item--actions">
      <base-button @click="decreaseAmount(item.productId)">
        <i class="ri-subtract-line"></i>
      </base-button>

      <span>{{ item.amount }}</span>

      <base-button @click="increaseAmount(item.productId)">
        <i class="ri-add-line"></i>
      </base-button>

      <base-button @click="removeFromCart(item.productId)">
        <i class="ri-delete-bin-line"></i>
      </base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.cart-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 220px;

  &--info {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      @include line-clamp(1);
      color: inherit;
      font-weight: 600;
      margin-bottom: 10px;
    }

    span {
      font-weight: 600;
      font-size: 1.3rem;
    }
  }

  &--actions {
    display: flex;
    align-items: center;
    gap: 10px;

    .base-button {
      min-width: fit-content !important;
      padding: 6px !important;

      &:last-child {
        margin-left: auto;
      }
    }
  }
}
</style>
