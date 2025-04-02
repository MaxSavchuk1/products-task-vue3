<script setup lang="ts">
type Props = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  styleType?: 'primary' | 'secondary'
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
    :class="[$style.button, $style[styleType]]"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
@use '@/styles/variables.scss' as *;

.button {
  color: white;
  font-size: 0.85rem;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  flex-shrink: 0;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.primary {
  background-color: $blue-500;
}

.secondary {
  background-color: $gray-400;
}
</style>
