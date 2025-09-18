<script setup lang="ts">
import { ref } from "vue";

const logoName = ref("Lingo");
const logoSuffix = ref("so");
</script>

<template>
  <div :class="$style.logo">
    <span>{{ logoName }}</span>
    <span :class="$style.logoSuffix">{{ logoSuffix }}</span>
  </div>
</template>

<style module>
.logo {
  font-size: 2rem;
  color: var(--text-dark);
  text-transform: uppercase;
  font-weight: 400;
}
.logoSuffix {
  color: var(--primary);
  font-weight: 900;
}
</style>
