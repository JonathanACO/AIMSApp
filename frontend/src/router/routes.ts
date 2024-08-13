const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/",
    name: "main-layout",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../pages/Home.vue"),
      },
    ],
  },
];
export { routes };
