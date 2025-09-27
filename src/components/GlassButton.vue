<script setup lang="ts">
defineProps<{
  /* Disable Button */
  disabled?: boolean;
}>();
</script>

<template>
  <button :class="$style.glassButton" :disabled="disabled">
    <slot name="icon" />
    <slot />
  </button>
</template>

<style module lang="scss">
.glassButton {
  padding: var(--spacing-sm);
  text-align: center;
  border: 0.7px solid white;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease, color 0.3s ease;
  &:hover {
    backdrop-filter: blur(7px);
  }
  &:focus {
    outline: 1px solid white;
  }
}
</style>
