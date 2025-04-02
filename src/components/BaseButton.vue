<script setup lang="ts">
type Props = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  styleType?: 'primary' | 'secondary' | 'info'
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  styleType: 'primary'
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['base-button', $style[styleType]]"
  >
    <div v-if="$slots.icon"><slot name="icon" /></div>
    <slot />
  </button>
</template>

<style lang="scss" module>
@use '@/styles/variables.scss' as *;

.primary {
  background-color: $blue-500;
}

.secondary {
  background-color: $blue-300;
}

.info {
  background-color: $gray-500;
}
</style>
