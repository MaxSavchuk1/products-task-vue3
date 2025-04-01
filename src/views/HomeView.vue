<script setup lang="ts">
import { useProductsStore } from '@/stores/products'

const { products } = storeToRefs(useProductsStore())

onMounted(() => {
  useProductsStore().fetchProducts()
})
</script>

<template>
  <div class="welcome-banner">
    <span>Vue 3 example project with TypeScript</span>
  </div>
</template>
