import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trailer from "../views/Trailer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/trailer",
    name: "trailer",
    component: Trailer
  },
  {
    path: "/*",
    redirect: {
      name: "home"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/mb" || process.env.BASE_URL,
  routes
});

export default router;
