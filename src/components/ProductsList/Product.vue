<script setup lang="ts">
import { formatPriceUSD } from '@/helpers/utils'
import type { Product } from '@/helpers/types'

const { product } = defineProps<{ product: Product }>()

const { isInCart, addToCart } = useCartStore()

const buttonLabel = computed(() => {
  return isInCart(product.id) ? 'In Cart' : 'Add To Cart'
})
const isAvailable = computed(() => product.stock > 0)
const totalInStock = computed(() =>
  product.stock > 99 ? '99+' : product.stock
)

const clickHandler = () => {
  if (!isInCart(product.id)) {
    addToCart(product.id, product.price)
  }
}
</script>

<template>
  <div class="product">
    <base-image :src="product.thumbnail" height="120px" width="120px" />

    <div class="product-info">
      <div>
        <a href="#">{{ product.title }}</a>
        <p>{{ product.description }}</p>
      </div>
      <div>
        <div class="product-info--tags">
          <base-tag v-for="tag in product.tags" :key="product.title + tag">
            {{ tag }}
          </base-tag>
        </div>
        <base-rating :rating="product.rating" />
      </div>
    </div>

    <div>
      <div class="product-stock">
        In Stock: <span>{{ totalInStock }}</span>
      </div>

      <div :class="[!isAvailable && 'not-available', 'product-price']">
        <span>{{ formatPriceUSD(product.price) }}</span>
      </div>
    </div>

    <base-button
      v-if="isAvailable"
      :style-type="isInCart(product.id) ? 'secondary' : 'primary'"
      @click="clickHandler"
    >
      <template #icon>
        <i
          :class="[
            isInCart(product.id) ? 'ri-check-line' : 'ri-shopping-cart-line'
          ]"
        ></i>
      </template>
      {{ buttonLabel }}
    </base-button>
    <base-button v-else disabled style-type="info"> Out Of Stock </base-button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.product {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  flex-wrap: wrap;
  // width: fit-content;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.02);
  }

  & > button {
    margin-left: auto;
  }
}

.product-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & > div:first-child {
    max-width: 260px;
    width: 100%;
    flex-shrink: 0;

    a {
      @include line-clamp(1);
      color: inherit;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      @include line-clamp(2);
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      line-height: normal;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
  }

  &--tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
}

.product-stock {
  width: 90px;
  font-size: 0.9rem;
  margin-bottom: 8px;

  span {
    font-size: initial;
    font-weight: 600;
  }
}

.product-price {
  font-size: 1.4rem;
  font-weight: 600;
  width: 106px;
}

.not-available {
  color: $gray-400;
}
</style>
