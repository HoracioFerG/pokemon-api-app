const routes = [
  {
    path: "/",
    component: () => import("layouts/Index.vue"),
  },
  {
    path: "/gameIndex",
    name: "gameIndex",
    component: () => import("../pages/GameIndex.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    name: "errorPage",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
