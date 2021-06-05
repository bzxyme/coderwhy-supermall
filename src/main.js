import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

//第三方事务总线
import mitt from "mitt";

// 挂载为全局组件
app.config.globalProperties.$bus = new mitt();

app.use(router).mount("#app");
