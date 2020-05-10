import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from "vue-analytics";
//import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: "UA-156522420-4",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
