import Vue from "vue";
import VueAnalytics from "vue-analytics";

if (process.env.NODE_ENV !== "development") {
  Vue.use(VueAnalytics, {
    id: "UA-155274185-1"
  });
}
