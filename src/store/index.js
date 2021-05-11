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
      if (
        state.usuario == null &&
        localStorage.getItem("usuario") == undefined
      ) {
        //de momento tenemos el id del usuario estatico
        let id = 1;
        const url = state.rutaDinamica + "profesor/" + id;
        axios
          .get(url)
          .then(result => {
            const response = result.data;
            if ((response.error = false)) {
              state.usuario = response.usuario;
              localStorage.setItem("usuario", JSON.stringify(state.usuario));
              return state.usuario;
            }
            return null;
            //   localStorage.usuario = usuario;
          })
          .catch(error => {
            return null;
          });
      } else {
        state.usuario = JSON.parse(localStorage.getItem("usuario"));
        return state.usuario;
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
