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
    children: [
      {
        path: "historial",
        name: "historial",
        meta: { requireAuth: true },
        component: () =>
          import("../pages/AppoinmentsHistory/AppointmentsHistoryPage.vue"),
      },
    ],
  },
];
export { routes };
