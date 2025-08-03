import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MinimalLayout from "@/layouts/MinimalLayout.vue";
import NotFoundView from "../views/NotFound.vue";
import { useUserStore } from "@/stores/user.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-in",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "sign-in",
          component: () => import("../views/SignIn.vue"),
        },
      ],
    },
    {
      path: "/sign-up",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "sign-up",
          component: () => import("../views/SignUp.vue"),
        },
      ],
    },
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
    {
      path: "/examples",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "examples",
          component: () => import("../views/Examples.vue"),
        },
      ],
    },
    {
      path: "/not-found",
      component: MinimalLayout,
      children: [
        { path: "", name: "not-found", component: NotFoundView }, // Correct
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

router.beforeEach((to, from, next) => {
  const auth = useUserStore();

  const publicPages = ["/sign-in", "/sign-up", "/examples", "/"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !auth.isAuthenticated) {
    return next("/sign-in");
  }

  if (
    (to.path === "/sign-in" || to.path === "/sign-up") &&
    auth.isAuthenticated
  ) {
    return next("/");
  }

  next();
});

export default router;
