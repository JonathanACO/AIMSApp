import { createRouter, createWebHistory } from "@ionic/vue-router";
import { routes } from "./routes";
import { useAuthStore } from "@/stores/useAuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, _from, next) => {
  const token = useAuthStore().token;
  const toRouteName = to.name?.toString();

  if (to.meta.requireAuth && !token) {
    if (toRouteName !== "login") {
      return next({ name: "login" });
    }
  }
  next();
});

export default router;
