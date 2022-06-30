import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueGtag from "vue-gtag";

// const app = createApp(App);

// app.use(VueGtag, {
//   property: {
//     id: "G-LRDVBJCQQD"
//   }
// });
createApp(App).use(router).use(VueGtag, {
  config: { id: "G-LRDVBJCQQD" }
}).mount("#app");
// createApp(App).use(router).mount("#app");
