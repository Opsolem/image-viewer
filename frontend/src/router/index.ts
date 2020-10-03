import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Image from "../views/Image.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/images/:id",
    name: "images-item",
    component: Image
  }
];

export const router = new VueRouter({
  routes
});
