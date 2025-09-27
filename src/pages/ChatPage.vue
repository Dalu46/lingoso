<script setup lang="ts">
import AvatarAI from "@/components/AvatarAI.vue";
import TranscriptionBox from "@/components/TranscriptionBox.vue";
import Button from "primevue/button";
import { ref } from "vue";

const avatarName = ref("Angie");
</script>

<template>
  <div :class="$style.chatPage">
    <p :class="$style.introHeader">
      Meet
      <span :class="$style.avatarName">{{ avatarName }},</span>
      your AI buddy.
    </p>
    <Button :class="$style.changeBtn">change</Button>
    <p :class="$style.introText">
      Angie can translate for you, teach you basic language, and answer any
      question you have.
    </p>
    <AvatarAI :class="$style.avatarAI" />
    <TranscriptionBox />
  </div>
</template>

<style module lang="scss">
.chatPage {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-lg);
}

.introHeader {
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);

  .avatarName {
    font-weight: 700;
  }
}

.changeBtn {
  align-self: flex-start;
  border: none;
  margin-bottom: var(--spacing-md);
  background: none;
  color: var(--primary);
  font-weight: 600;
  font-weight: normal;
  font-style: italic;

  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
    outline: none;
  }
}

.introText {
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
}

.avatarAI {
  margin-bottom: var(--spacing-lg);
}
</style>
