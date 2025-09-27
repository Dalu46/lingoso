<script setup lang="ts">
import GoogleLogo from "@/assets/images/google-icon.svg";
import LogoName from "@/components/LogoName.vue";
import Button from "primevue/button";
import { ref } from "vue";
import { useRouter } from "vue-router";

const isAuthLoading = ref(false);
const router = useRouter();

const navigateToDetails = () => {
  router.push("/location-details");
};
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
      @click="navigateToDetails"
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
  height: 100%;
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
  background: var(--bg);
  color: var(--text-light);
  font-weight: 400;
  border: 1px solid var(--border-light);
  box-shadow: 0 8px 12px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);

  border-radius: var(--radius-md);
  height: 50px;
  width: 250px;
}
</style>
