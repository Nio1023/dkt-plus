import { createApp } from "vue";
import App from "./App.vue";
import DktPlus from "@dkt-plus/dkt-plus";

const app = createApp(App);
app.use(DktPlus);
app.mount("#app");
