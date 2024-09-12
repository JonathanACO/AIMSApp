const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/LoginPage.vue"),
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
      {
        path: "detalles-paciente/:id",
        name: "details-patient",
        component: () =>
          import("@/pages/DetallesPaciente/DetallesPacientePage.vue"),
      },
    ],
  },
];
export { routes };
