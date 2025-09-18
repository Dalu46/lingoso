import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes/routes";
import "./style.css";
import "./theme/theme.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(routes);
app.mount("#app");
