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
  {
    path: "/guias-de-practica",
    name: "guias-de-practica",
    meta: { requireAuth: false },
    component: () => import("../pages/PracticeGuides/PracticeGuides.vue"),
  },
];
export { routes };
