<script setup lang="ts">
import type { Product } from '@/helpers/types'

const { product } = defineProps<{ product: Product }>()

const { isInCart, addToCart, removeFromCart } = useCartStore()

const buttonLabel = computed(() => {
  return isInCart(product.id) ? 'Remove From Cart' : 'Add To Cart'
})

const clickHandler = () => {
  if (isInCart(product.id)) {
    removeFromCart(product.id)
  } else {
    addToCart(product.id)
  }
}
</script>

<template>
  <div class="product">
    <base-image :src="product.thumbnail" height="120px" width="120px" />

    <div class="product-info">
      <div>
        <a class="line-clamp-1" href="#">{{ product.title }}</a>
        <p class="line-clamp-2">{{ product.description }}</p>
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

    <base-button @click="clickHandler">{{ buttonLabel }}</base-button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;

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
  gap: 10px;

  & > div:first-child {
    max-width: 280px;
    width: 100%;
    flex-shrink: 0;

    a {
      text-decoration: none;
      color: inherit;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 8px;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      line-height: normal;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 150px;
    width: 100%;
  }

  &--tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
}
</style>
