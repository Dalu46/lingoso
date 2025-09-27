<script setup lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div :class="$style.app">
    <HeaderMenu v-if="route.path !== '/'" :class="$style.headerMenu" />
    <RouterView />
  </div>
</template>

<style module lang="scss">
.app {
  height: 100vh;
  width: 100dvw;
  max-width: 450px;
  overflow-y: scroll;
  background: var(--bg);

  @media screen and (min-width: 450px) {
    box-shadow: 0px 0 80px rgba(0, 0, 0, 0.1);
  }
}

.headerMenu {
  margin-bottom: var(--spacing-sm);
}
</style>
