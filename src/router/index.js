import Vue from 'vue';
import VueRouter from 'vue-router';
import Administrador from '../views/Administrador.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "Administrador" */ '@/views/Administrador.vue'),
    children: [
      {
        path: '/curso/:id/:nombre/seccion/:seccion',
        name: 'Curso',
        component: () => import(/* webpackChunkName: "cursos" */ '@/components/Globales/BodyGlobal.vue'),
      },
      {
        path: '/curso/:id/:nombre/seccion/:seccion/bitacora',
        name: 'Bitacora',
        component: () => import(/* webpackChunkName: "cursos" */ '@/components/Bodys/BodyBitacora.vue'),
      },
      {
        path: '/curso/:id/:nombre/seccion/:seccion/syllabus',
        name: 'Syllabus',
        component: () => import(/* webpackChunkName: "cursos" */ '@/components/Bodys/BodySyllabus.vue'),
      },
      {
        path: '/curso/:id/:nombre/seccion/:seccion/plan-de-clases',
        name: 'PlanDeClases',
        component: () => import(/* webpackChunkName: "cursos" */ '@/components/Bodys/BodyPlanDeClases.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
