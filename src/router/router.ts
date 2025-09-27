import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login-signup",
      component: () => import("@/pages/LoginSignupPage.vue"),
    },
    {
      path: "/location-details",
      name: "location-details",
      component: () => import("@/pages/LocationDetailsPage.vue"),
    },
  ],
});

export default router;
