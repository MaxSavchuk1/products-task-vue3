<script setup lang="ts">
const route = useRoute()
const { isLoading } = storeToRefs(useLoaderStore())

const target = ref(null)
const targetIsVisible = ref(true)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting
})
</script>

<template>
  <div id="scroll-plug" ref="target"></div>

  <component :is="route.meta.layoutComponent">
    <slot />
  </component>

  <teleport to="body">
    <!-- loader -->
    <div v-if="isLoading" class="loader-wrapper">
      <div class="loader"></div>
    </div>

    <!-- scroll to top button -->
    <transition name="slide">
      <div
        v-if="!isLoading && !targetIsVisible"
        class="scroll-to-top-button"
        @click="scrollToTop"
      >
        <i class="ri-arrow-up-line"></i>
      </div>
    </transition>
  </teleport>
</template>
