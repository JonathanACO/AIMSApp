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
        path: "detalles-paciente/:id",
        name: "patient-details",
        component: () => import("../pages/PatientDetail/PatientDetailPage.vue"),
      },
      {
        path: "paciente/:id/historial",
        name: "appointments-history",
        component: () =>
          import("../pages/AppoinmentsHistory/AppointmentsHistoryPage.vue"),
      },
      {
        path: "/guias-de-practica",
        name: "guias-de-practica",
        component: () => import("../pages/PracticeGuides/PracticeGuides.vue"),
      },
      // TODO: Add all these routes to the consultation path
      {
        path: "/sugerencias-de-diagnostico",
        name: "suggestions",
        component: () =>
          import("../pages/Consultation/Suggestions/SuggestionsPage.vue"),
      },
    ],
  },
];
export { routes };
