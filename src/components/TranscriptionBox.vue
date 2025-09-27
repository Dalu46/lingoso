<script setup lang="ts">
import { ref } from "vue";

const currentSpeaker = ref("You"); // You or Avatar Name
</script>

<template>
  <div :class="$style.transcriptionBox">
    <h4 :class="$style.header">{{ currentSpeaker }}</h4>
    <!-- use translation API here... -->
    <p :class="$style.transcriptionText">
      I’m at a store and it looks like they sell snacks but I can’t figure out
      the amount. Help me translate to the seller and ask what it is made of...
    </p>
  </div>
</template>

<style module lang="scss">
.transcriptionBox {
  font-style: italic;
}
.header {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary);
}

.transcriptionText {
  font-size: 0.875rem;
  color: var(--text-light);
}
</style>
