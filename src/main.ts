import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line
import * as bootstrap from "bootstrap"; //
import "./assets/app.scss";

createApp(App).use(router).use(bootstrap).mount("#app");
