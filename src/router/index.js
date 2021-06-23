import Vue from "vue";
import VueRouter from "vue-router";

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
        path: "/",
        redirect: "/cursos"
      },
      {
        path: "/curso/:id/:nombre/seccion/:seccion",
        name: "Curso",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Globales/BodyGlobal.vue"
          )
      },
      {
        path: "/curso/:id/:nombre/seccion/:seccion/bitacora",
        name: "Bitacora",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Bodys/BodyBitacora.vue"
          )
      },
      {
        path: "/curso/:id/:nombre/seccion/:seccion/syllabus",
        name: "Syllabus",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Bodys/BodySyllabus.vue"
          )
      },
      {
        path: "/curso/:id/:nombre/seccion/:seccion/plan-de-clases",
        name: "PlanDeClases",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Bodys/BodyPlanDeClases.vue"
          )
      },
      {
        path: "/cursos",
        name: "Cursos",
        component: () =>
          import(
            /* webpackChunkName: "cursos" */ "@/components/Bodys/BodyCursos.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
