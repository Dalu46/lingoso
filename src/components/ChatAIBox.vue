<script setup lang="ts">
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { ref } from "vue";
import OpenAI from "openai";

// ⚠️ Testing only — do NOT use in production
const openai = new OpenAI({
  apiKey: "",
});

const request = ref("");
const response = ref("");
const loading = ref(false);

const logRequest = async () => {
  console.log("User request:", request.value);

  if (!request.value.trim()) return;

  loading.value = true;
  response.value = "";

  try {
    const completion = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: request.value,
    });

    response.value = completion.output_text;
    console.log(response.value);
  } catch (error) {
    console.error("OpenAI error:", error);
    response.value = "⚠️ Failed to get response from OpenAI.";
  } finally {
    loading.value = false;
  }
};

const props = defineProps({
  onToggle: Function,
});

function handleClick() {
  props.onToggle(); // Calls the parent's toggleComponent
}
</script>

<template>
  <Button :class="$style.changeBtn" @click="handleClick"> Go back </Button>

  <form :class="$style.chatAIBox" @submit.prevent="logRequest">
    <div :class="$style.labelAndButton">
      <label :class="$style.label"> Why are you traveling? </label>
      <Button :class="$style.speakInsteadBtn" type="button"
        >Speak Instead</Button
      >
    </div>

    <Textarea
      :class="$style.input"
      v-model="request"
      rows="5"
      cols="30"
      placeholder="Type your answer..."
    />

    <Button
      label="Submit"
      class="mt-2"
      type="submit"
      :loading="loading"
      :disabled="loading"
    />

    <div v-if="response" class="mt-3">
      <strong>AI Response:</strong>
      <p>{{ response }}</p>
    </div>
  </form>

  <div :class="$style.transcriptionBox">
    <h4 :class="$style.header">{{ currentSpeaker }}</h4>
    <!-- use translation API here... -->
    <p :class="$style.transcriptionText">
      {{ response.value }}
    </p>
  </div>
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

  .changeBtn {
    color: green;
    text-decoration: underline;
    background-color: white;
    text-align: start;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 6px;
  }

  button {
    padding: 5px;
    margin-top: 5px;
  }

  .transcriptionBox {
    font-style: italic;
    margin-top: 10px;
  }
  .header {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
    color: var(--primary);
  }

  .transcriptionText {
    font-size: 0.875rem;
    color: var(--text-light);
  }

  .speakInsteadBtn {
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

</style>
