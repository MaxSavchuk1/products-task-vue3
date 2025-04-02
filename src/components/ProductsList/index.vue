<script setup lang="ts">
const { products } = storeToRefs(useProductsStore())

onMounted(() => {
  useProductsStore().fetchProducts()
})
</script>

<template>
  <div class="products-list">
    <product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.products-list {
  border: 1px solid $gray-300;
  border-radius: 8px;

  & > * + * {
    border-top: 1px solid $gray-300;
  }
}
</style>
