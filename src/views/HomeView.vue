<script setup lang="ts"></script>

<template>
  <div class="page-container my-shop">
    <products-list />
    <products-cart />
  </div>
</template>

<style lang="scss" scoped>
.my-shop {
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
}
</style>
