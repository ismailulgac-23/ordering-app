import "vue3-toastify/dist/index.css";
import "@/assets/styles/app.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue3Toastify from "vue3-toastify";
import * as Vue3Spinner from "vue3-spinner";

import HtmlToDocument from "@/plugins/html-to-document.js";

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Spinner)
  .use(HtmlToDocument)
  .use(Vue3Toastify)
  .mount("#app");
