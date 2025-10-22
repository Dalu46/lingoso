<script setup lang="ts">
import AvatarAI from "@/components/AvatarAI.vue";
import ChatAIBox from "@/components/ChatAIBox.vue";
import Button from "primevue/button";
import { ref } from "vue";

const avatarName = ref("Angie");

// Track which component is visible
const showAvatar = ref(true);

const toggleComponent = () => {
  showAvatar.value = !showAvatar.value;
  console.log(showAvatar.value)
};
</script>

<template>
  <div :class="$style.chatPage">
    <p :class="$style.introHeader">
      Meet
      <span :class="$style.avatarName">{{ avatarName }},</span>
      your AI buddy.
    </p>

    <p :class="$style.introText">
      Angie can translate for you, teach you basic language, and answer any
      question you have.
    </p>

    <!-- Conditionally render either AvatarAI or ChatAIBox -->
    {{ showAvatar }}
    <AvatarAI v-if="showAvatar" :class="$style.avatarAI" :onToggle="toggleComponent" />
    <ChatAIBox v-else :onToggle="toggleComponent" />

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

