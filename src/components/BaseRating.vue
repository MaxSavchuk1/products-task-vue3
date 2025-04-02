<script setup lang="ts">
import { uniqueId } from 'lodash-es'

defineProps<{ rating: number }>()
</script>

<template>
  <div class="rating">
    <div v-for="i in 5" :key="uniqueId(`${i}`)">
      <i :class="[rating < i - 0.5 ? 'unrated' : 'rated', 'ri-star-fill']"></i>
    </div>
    <span>{{ rating }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.rating {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 110px;
  padding: 2px;

  span {
    display: inline-block;
    margin-left: 2px;
    font-size: 0.75rem;
    line-height: normal;
  }
}

.rated {
  color: $orange-300;
}

.unrated {
  color: $gray-300;
}
</style>
