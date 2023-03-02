import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/views/home/index.vue"),
  },
  {
    path: "/detail/:uuid",
    name: "Detail",
    component: () => import("@/components/views/detail/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
