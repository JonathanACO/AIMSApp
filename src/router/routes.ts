const routes = [
  {
    path: "/login",
    name: "login",
    meta: { requireAuth: false },
    component: () => import("../pages/Login/LoginPage.vue"),
  },
  {
    path: "/",
    name: "main-layout",
    meta: { requireAuth: true },
    component: () => import("../layouts/MainLayout.vue"),
  },
];
export { routes };
