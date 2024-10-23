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
      // {
      //   path: "/atender-paciente/:id",
      //   name: "attend-patient",
      //   children: [
      {
        path: "valoracion",
        name: "medical-assesment",
        component: () =>
          import("../pages/Consultation/ValorationForm/ValorationFormPage.vue"),
      },
      {
        path: "/sugerencias-de-diagnostico",
        name: "suggestions",
        component: () =>
          import("../pages/Consultation/Suggestions/SuggestionsPage.vue"),
      },
      {
        path: "/informacion-sobre-guias-de-practica",
        name: "practice-guides-info",
        component: () => import("../pages/Consultation/GPC/GPCInfoPage.vue"),
      },
      // ],
      // },
    ],
  },
];
export { routes };
