import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import pgNotFound from "../components/pgNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: AboutView,
    // beforeRouteLeave(){
    //   return { name: "home" }
    // }
    // beforeRouteLeave(to, from) {
    //   // called when the route that renders this component is about to be navigated away from.
    //   // As with `beforeRouteUpdate`, it has access to `this` component instance.
    // return { name: "home" }
    // },
  },
  {
    path: "/helloWorld",
    name: "helloWorld",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/HelloWorld.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: pgNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
