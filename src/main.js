import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import loading from "./components/loading.vue";

Vue.config.productionTip = false;
Vue.component("loading", loading);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
