<script setup lang="ts">
const { products } = storeToRefs(useProductsStore())

onMounted(() => {
  useProductsStore().fetchProducts()
})
</script>

<template>
  <div class="list">
    <h2>Products</h2>

    <div v-if="products.length" class="list-items">
      <product
        v-for="product in products"
        :key="product.sku"
        :product="product"
      />
    </div>

    <div v-else class="empty">No products found</div>
  </div>
</template>

<style lang="scss" scoped></style>
