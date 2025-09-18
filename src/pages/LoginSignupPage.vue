<script setup lang="ts">
import GoogleLogo from "@/assets/images/google-icon.svg";
import LogoName from "@/components/LogoName.vue";
import Button from "primevue/button";
import { ref } from "vue";

const isAuthLoading = ref(false);
</script>

<template>
  <div :class="$style.loginWrap">
    <LogoName :class="$style.logo" />
    <p :class="$style.description">AI that speaks for you, where you travel.</p>
    <h3 :class="$style.loginDescription">Sign into your account</h3>
    <Button
      label="Continue with Google"
      :class="$style.btn"
      :loading="isAuthLoading"
      @click="() => (isAuthLoading = true)"
    >
      <template v-if="!isAuthLoading" #icon>
        <img
          :src="GoogleLogo"
          alt="Google"
          style="width: 1.5em; height: 1.5em"
        />
      </template>
    </Button>
  </div>
</template>

<style module lang="scss">
.loginWrap {
  background: var(--bg);
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100dvw;
  max-width: 450px;

  @media screen and (min-width: 450px) {
    border: 1px solid var(--border-light);
  }
}

.logo {
  margin-bottom: var(--spacing-md);
}

.description {
  margin-bottom: var(--spacing-4xl);
}

.loginDescription {
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
}

.btn {
  border: 1px solid var(--border-light) !important;
  box-shadow: 0 8px 12px -5px rgba(0, 0, 0, 0.1) !important;
  display: flex !important;
  align-items: center !important;
  gap: var(--spacing-md) !important;

  border-radius: var(--radius-md) !important;
  height: 50px !important;
  width: 250px !important;
}
</style>
