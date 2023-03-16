import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposView from "../views/ReposView.vue";
import RepoView from "../views/RepoView.vue";
import ErrorView from "../views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/repos",
    name: "Repos",
    component: ReposView,
    1: () => import("../views/ReposView.vue"),
  },
  {
    path: "/repo/:name",
    name: "Repo",
    component: RepoView,
    2: () => import("../views/RepoView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: ErrorView,
    3: () => import("../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
