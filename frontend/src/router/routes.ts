const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/MainLayout.vue"),
  },
];
export { routes };
