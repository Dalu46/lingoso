<script setup lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue";
import LogoNameVue from "@/components/LogoName.vue";
import { countries } from "@/data/countries";
import { LocationDetails } from "@/types/LocationDetails";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";
import { computed, ref } from "vue";

const username = ref("narudesigns");
const allCountries = computed(() =>
  countries.map((country) => ({
    name: country.name,
    code: country.code,
    flagUrl: findFlagUrlByIso2Code(country.code),
  }))
);
const formData = ref<LocationDetails>({
  nationality: "",
  travelLocation: "",
  travelReason: "",
  language: "",
});

const logFormData = () => {
  const formattedFormData = {
    ...formData.value,
    nationality: formData.value.nationality?.name,
    travelLocation: formData.value.travelLocation?.name,
  };
  console.log("Form submitted", formattedFormData);
};
</script>

<template>
  <div :class="$style.wrap">
    <HeaderMenu :class="$style.headerMenu" />
    <div :class="$style.content">
      <div :class="$style.welcome">
        <LogoNameVue />
        <div :class="$style.greetingText">
          Welcome <span :class="$style.username">{{ username }}</span
          >!
        </div>
        <p :class="$style.welcomeNote">
          The following information enables your AI assistant to give you
          localized assistance based on your current location.
        </p>
      </div>

      <form
        :class="$style.travelDetailsForm"
        @submit.prevent="() => logFormData()"
      >
        <label :class="$style.label" for="country">Where are you from?</label>
        <Select
          v-model="formData.nationality"
          :class="$style.input"
          :options="allCountries"
          optionLabel="name"
          placeholder="Select a Country"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" :class="$style.optionValue">
              <img
                :alt="slotProps.value.name"
                :src="
                  allCountries.find(
                    (country) => country.code === slotProps.value.code
                  )?.flagUrl
                "
                :width="18"
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="{ option, selected }">
            <div
              :class="[$style.option, { [$style.optionSelected]: selected }]"
            >
              <img :alt="option.name" :src="option.flagUrl" :width="18" />
              <div>{{ option.name }}</div>
            </div>
          </template>
        </Select>
        <label :class="$style.label" for="country"
          >Where are you traveling to?</label
        >
        <Select
          v-model="formData.travelLocation"
          :class="$style.input"
          :options="allCountries"
          optionLabel="name"
          placeholder="Select a City"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" :class="$style.optionValue">
              <img
                :alt="slotProps.value.name"
                :src="
                  allCountries.find(
                    (country) => country.code === slotProps.value.code
                  )?.flagUrl
                "
                :width="18"
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="{ option, selected }">
            <div
              :class="[$style.option, { [$style.optionSelected]: selected }]"
            >
              <img :alt="option.name" :src="option.flagUrl" :width="18" />
              {{ option.name }}
            </div>
          </template>
        </Select>
        <label :class="$style.label" for="country">
          What language do you speak?
        </label>
        <InputText
          :class="$style.input"
          type="text"
          v-model="formData.language"
        />
        <label :class="$style.label" for="country">
          Why are you traveling?
        </label>
        <Textarea
          :class="$style.input"
          v-model="formData.travelReason"
          rows="3"
          cols="30"
        />
        <Button :class="$style.btn" type="submit" label="Start my journey!" />
      </form>
    </div>
  </div>
</template>

<style module lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
}

.content {
  padding: 0 var(--spacing-lg);
}

.travelDetailsForm {
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-xl);
}

.headerMenu {
  margin-bottom: var(--spacing-lg);
}

.welcome {
  text-align: center;
}
.greetingText {
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
}
.username {
  font-weight: 700;
}
.welcomeNote {
  color: var(--text-light);
}

.label {
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}
.input {
  &:not(:last-child) {
    margin-bottom: var(--spacing-lg);
  }
  border: 1px solid var(--border-light);
  padding: var(--spacing-md);
  line-height: normal;

  &:hover,
  &:focus {
    border-color: var(--border-dark);
  }
}

.option {
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
.optionValue {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  line-height: normal;
}
.optionSelected {
  background: var(--primary);
  color: var(--text-light);
  width: 100%;
}

.btn {
  background: var(--primary);
  color: var(--bg);
  padding: var(--spacing-md);
  font-weight: 600;
  border: none;
  margin-bottom: var(--spacing-3xl);
}
</style>
