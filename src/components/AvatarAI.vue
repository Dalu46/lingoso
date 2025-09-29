<script setup lang="ts">
import MicIcon from "@/assets/icons/MicIcon.vue";
import AvatarAIImage from "@/assets/images/avatar-img.png";
import GlassButton from "@/components/GlassButton.vue";
import { ref } from "vue";

const avatarName = ref("Angie"); // TODO: use avatar name
</script>

<template>
  <div :class="$style.avatarAI">
    <img :class="$style.avatarImg" :src="AvatarAIImage" alt="Avatar AI Image" />
    <div :class="$style.buttons">
      <GlassButton :class="$style.voiceBtn">
        <MicIcon />
      </GlassButton>
      <GlassButton :class="$style.btn">Chat with {{ avatarName }}</GlassButton>
    </div>
  </div>
</template>

<style module lang="scss">
.avatarAI {
  position: relative;
  height: 500px;
}

.avatarImg {
  width: 100%;
  height: auto;
  align-self: center;
  border-radius: 8px;
}

.buttons {
  display: flex;
  align-items: center;
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--spacing-lg);
  gap: var(--spacing-lg);
}

.voiceBtn {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  flex: none;
}
.btn {
  bottom: var(--spacing-xl);
  border-radius: 100px;
  width: 100%;
  height: 64px;
  font-weight: 600;
}
</style>
