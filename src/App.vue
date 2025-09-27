<script setup lang="ts"></script>

<template>
  <div :class="$style.app">
    <RouterView />
  </div>
</template>

<style module lang="scss">
.app {
  height: 100vh;
  width: 100dvw;
  max-width: 450px;
  overflow-y: scroll;

  @media screen and (min-width: 450px) {
    box-shadow: 0px 0 80px rgba(0, 0, 0, 0.1);
  }
}
</style>
