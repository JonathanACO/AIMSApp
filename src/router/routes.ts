const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login/LoginPage.vue"),
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
    ],
  },
];
export { routes };
