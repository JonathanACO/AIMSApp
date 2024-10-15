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
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "patients-list",
        component: () => import("@/pages/Home/PatientsList.vue"),
      },
      {
        path: "detalles-paciente/:property",
        name: "patient-details",
        component: () =>
          import("@/pages/DetallesPaciente/DetallesPacientePage.vue"),
      },
      {
        path: "/guias-de-practica",
        name: "guias-de-practica",
        component: () => import("../pages/PracticeGuides/PracticeGuides.vue"),
      },
    ],
  },
];
export { routes };
