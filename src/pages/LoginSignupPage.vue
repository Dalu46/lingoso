<script setup lang="ts">
import { ref } from "vue";

const logoName = ref("Lingo");
const logoSuffix = ref("so");
</script>

<template>
  <div :class="$style.logo">
    <p :class="$style.logoName">{{ logoName }}</p>
    <p :class="$style.logoSuffix">{{ logoSuffix }}</p>
  </div>
</template>

<style style module>
.logo {
  font-size: 2rem;
  color: #131313;
  text-transform: uppercase;
  display: flex;
}
.logoSuffix {
  color: #00b984;
  font-weight: 900;
}
</style>
