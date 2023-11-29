import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LiginView.vue";
import Layout from "../layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    meta: {
      icon: "HomeTwoTone",
    },
    children: [
      {
        path: "/home",
        name: "主页",
        component: HomeView,
      },
      {
        path: "/about",
        name: "关于",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        children: [
          {
            path: "/about1",
            name: "关于1",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/AboutView1.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
