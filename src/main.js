import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, message, Layout, menu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.globalProperties.$message = message;
app
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(menu)
  .mount("#app");
// console.log('江婉君(fairy) -->', 'app', app.config);
