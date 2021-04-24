import Vue from "vue";
import VueRouter from "vue-router";
import Administrador from "../views/Administrador.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Administrador",
    component: () =>
      import(
        /* webpackChunkName: "Administrador" */ "@/views/Administrador.vue"
      ),
    children: [
      {
        path: "/curso/:id/:nombre/seccion/:seccion",
        name: "Curso",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Globales/BodyGlobal.vue"
          ),
        children: [],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
