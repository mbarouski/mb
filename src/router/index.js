import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trailer from "../views/Trailer.vue";
import HabrArticles from "../views/HabrArticles.vue";

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
    path: "/habr-articles",
    name: "habr-articles",
    component: HabrArticles
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
  base: process.env.BASE_URL,
  routes
});

export default router;
