const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/LoginPage.vue"),
  },
  {
    path: "/historial",
    name: "historial",
    component: () => import("../pages/HistorialConsultas/HistorialPage.vue"),
  },
  {
    path: "/",
    name: "main-layout",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../pages/Home/HomePage.vue"),
      },
    ],
  },
];
export { routes };
