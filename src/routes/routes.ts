import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login-signup",
      component: () => import("@/pages/LoginSignupPage.vue"),
    },
  ],
});

export default route;
