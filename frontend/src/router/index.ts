import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  },
];

export const router = new VueRouter({
  routes
});
