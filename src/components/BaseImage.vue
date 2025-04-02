<script setup lang="ts">
type Props = {
  height?: string
  width?: string
  src: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  height: '200px',
  width: '200px',
  alt: ''
})

const loading = ref(true)

const imageLoaded = () => {
  loading.value = false
}
</script>

<template>
  <div class="image-container">
    <div v-if="loading" :style="{ height, width }" class="skeleton"></div>

    <div v-show="!loading" :style="{ height, width }">
      <img @load="imageLoaded()" :src :alt height="100%" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  display: flex;
  flex-shrink: 0;

  img {
    object-fit: contain;
  }
}
</style>
