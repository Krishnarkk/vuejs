import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LifeCycle from "./components/LifeCycle.vue";
import ReactiveStateManagement from "./components/ReactiveStateManagement.vue";
import Parent from "./components/ParentChildCommunication/Parent.vue";
import { createPinia } from "pinia";
import CounterStore from "./components/CounterStorePinia/CounterStore.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount("#app");
