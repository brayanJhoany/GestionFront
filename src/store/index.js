import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawers: {
      drawer: true,
      miniVarianteAdm: false,
    },
    numProfesores: 70,
    numObservaciones: 69,
    numCarreras: 7,
    numEstudiantes: 1234,
    config: {
      headers: { 'Content-Type': 'application/json' },
      baseURL: 'http://localhost',
    },
    rutaDinamica: 'http://127.0.0.1:8000/',
  },
  mutations: {},
  actions: {},
  modules: {},
});
