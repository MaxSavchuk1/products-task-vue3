<script setup lang="ts"></script>

<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: $blue-100;
  color: $blue-500;
  border: 1px solid $blue-500;
  font-size: 0.75rem;
  line-height: normal;
  width: fit-content;
}
</style>
