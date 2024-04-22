import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/Main/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
  ],
});

export default router;
