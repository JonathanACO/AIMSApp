const routes = [
  {
    path: "/login",
    name: "login",
    meta: { requireAuth: false },
    component: () => import("../pages/Login/LoginPage.vue"),
  },
  {
    path: "/historial",
    name: "historial",
    component: () => import("../pages/HistorialConsultas/HistorialPage.vue"),
  },
  {
    path: "/pruebas",
    name: "pruebas",
    component: () => import("../pages/PruebasHistorial/HistorialPruebas.vue"),
  },
  {
    path: "/",
    name: "main-layout",
    meta: { requireAuth: true },
    component: () => import("../layouts/MainLayout.vue"),
  },
];
export { routes };
