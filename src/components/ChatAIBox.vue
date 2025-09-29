<script setup lang="ts">
import Textarea from "primevue/textarea";
import { ref } from "vue";

const request = ref("");

const logRequest = () => {
  console.log("User request:", request.value);
};
</script>

<template>
  <form :class="$style.chatAIBox" @submit.prevent="logRequest">
    <div :class="$style.labelAndButton">
      <label :class="$style.label"> Why are you traveling? </label>
      <Button :class="$style.speakInsteadBtn">Speak Instead</Button>
    </div>
    <Textarea :class="$style.input" v-model="request" rows="5" cols="30" />
  </form>
</template>

<style module lang="scss">
.label {
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.labelAndButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.speakInsteadBtn {
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
</style>
