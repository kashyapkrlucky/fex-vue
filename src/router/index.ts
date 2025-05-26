import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MinimalLayout from "@/layouts/MinimalLayout.vue";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ExampleView from "@/views/ExampleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [{ path: "", component: HomeView }],
    },
    {
      path: "/sign-in",
      component: AuthLayout,
      children: [{ path: "", component: SignInView }],
    },
    {
      path: "/examples",
      component: AuthLayout,
      children: [{ path: "", component: ExampleView }],
    },
    {
      path: "/about",
      component: DefaultLayout,
      children: [
        { path: "", component: () => import("../views/AboutView.vue") },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: MinimalLayout,
      children: [
        { path: "", component: NotFoundView }, // Correct
      ],
    },
  ],
});

export default router;
