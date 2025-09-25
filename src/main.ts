import router from "@/router/router";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "./theme/theme.css";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "base, primevue",
      },
    },
  },
});
app.use(router);
app.mount("#app");
