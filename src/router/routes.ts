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
        path: "valoracion",
        name: "medical-assesment",
        component: () =>
          import("../pages/ValorationForm/ValorationFormPage.vue"),
      },
    ],
  },
];
export { routes };
