import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// main.ts or wherever you instantiate i18n
import { createI18nInstance } from "@/plugins/i18n";
export const i18n = createI18nInstance();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
