import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trailer from "../views/Trailer.vue";
import MyArticles from "../views/MyArticles.vue";
import SideProjects from "../views/SideProjects.vue";
import Projects from "../views/Projects.vue";
import Technologies from "../views/Technologies.vue";

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
    path: "/my-articles",
    name: "my-articles",
    component: MyArticles
  },
  {
    path: "/side-projects",
    name: "side-projects",
    component: SideProjects
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/technologies",
    name: "technologies",
    component: Technologies
  },
  {
    path: "/*",
    redirect: {
      name: "home"
    }
  }
];

function getRouterBaseUrl() {
  switch (process.env.NODE_ENV) {
    case "development":
    case "production":
    default:
      return "/";
  }
}

const router = new VueRouter({
  mode: "history",
  base: getRouterBaseUrl(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
