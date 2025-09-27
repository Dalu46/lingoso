<script setup lang="ts">
import UserImg from "@/assets/images/user-img.jpeg";
import LogoName from "@/components/LogoName.vue";
import { ref } from "vue";

// update with username from Google Sign-in
const username = ref("narudesigns");

defineProps<{
  /** Determine if logo name should be shown */
  showLogoName?: boolean;
}>();
</script>

<template>
  <div :class="$style.headerMenu">
    <LogoName v-if="showLogoName" />
    <div v-else>
      <p :class="$style.userName">
        <span :class="$style.atSign">@</span>
        <span :class="$style.username">{{ username }}</span>
      </p>
    </div>
    <!-- Move to separe UserAvatar.vue file -->
    <img :class="$style.userImg" :src="UserImg" alt="User Avatar Image" />
  </div>
</template>

<style module lang="scss">
.headerMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--foreground);
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.userName {
  font-weight: 700;
  font-size: 1.125rem;
}
.atSign {
  color: var(--text-dark);
}
.username {
  color: var(--text-light);
}

.userImg {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
