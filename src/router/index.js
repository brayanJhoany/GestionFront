import Vue from "vue";
import VueRouter from "vue-router";
import Administrador from "../views/Administrador.vue";
Vue.use(VueRouter);

const routes = [

  {
    //Enrutamiento de la vista del administrador
    path: "/",
    name: "Administrador",
    component: () =>
      import(
        /* webpackChunkName: "Administrador" */ "@/views/Administrador.vue"
      ),
    // meta: {
    //   requiresAuth: true,
    // },
    children: [
   
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
