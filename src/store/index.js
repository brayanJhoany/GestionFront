import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawers: {
      drawer: true,
      miniVarianteAdm: false
    },
    usuario: null,
    config: {
      headers: { "Content-Type": "application/json" },
      baseURL: "http://localhost"
    },
    rutaDinamica: "http://127.0.0.1:8000/"
  },
  getters: {
    usuario: state => {
      return {
        id: 1,
        nombre: "Brayan Escobar",
        email: "brayan.escobar@live.com",
        created_at: null,
        updated_at: null
      };
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
