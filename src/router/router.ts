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
    {
      path: "/chat",
      name: "chat",
      component: () => import("@/pages/ChatPage.vue"),
    },
  ],
});

export default router;
