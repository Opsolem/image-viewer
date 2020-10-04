import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Image from "../views/Image.vue";
import Gallery from "../views/Gallery.vue";

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
  },
  {
    path: "/gallery/:seed",
    name: "gallery-image",
    component: Gallery
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  }
];

export const router = new VueRouter({
  routes
});
