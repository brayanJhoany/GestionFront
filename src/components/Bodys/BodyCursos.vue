<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1"></v-col>
      <v-col cols="12" md="10">
        <v-card class="mt-13" color="info">
          <v-row>
            <v-col cols="12">
              <v-card-title class="headline text--center" primary-title>
                <div>
                  <strong class="blue--text">Mis Cursos</strong>
                </div>
                <v-spacer></v-spacer>
                <div style="text-align: right"></div>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="mt-12">
          <v-col
            v-for="(card, i) in cursos"
            :key="`card-${i}`"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="mx-auto" max-width="400" outlined @click="redireccion(card)">
              <v-card-title class="accent">
                <div style="color: white"></div>
              </v-card-title>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <a @click="redireccion(card)">
                      {{ card.nombre }}
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      cursos: [],
      cursosAux: [],
    };
  },

  beforeMount() {
    this.obtenerCursos();
  },
  methods: {
    redireccion(curso) {
      this.$router.push({
        name: "Curso",
        params: {
          id: curso.id,
          nombre: curso.nombre,
          seccion: curso.seccion,
        },
      });
    },
    obtenerCursos() {
      this.cursosAux = [];
      const url = `${this.$store.state.rutaDinamica}profesor/1/cursos`;
      axios
        .get(url)
        .then((result) => {
          const response = result.data;
          if (result.data.error === false) {
            for (let index = 0; index < response.cursos.length; index++) {
              const cursoAux = response.cursos[index];
              const curso = {
                id: cursoAux.id,
                nombre: cursoAux.nombre,
                seccion: cursoAux.seccion,
              };
              this.cursosAux[index] = curso;
            }

            this.cursos = this.cursosAux;
            console.log("holas");
          }
        })
        .catch((error) => {
          console.log(error);
          // if (error.message == 'Network Error') {
          //   this.alertError = true;
          //   this.cargando = false;
          //   this.textoError = 'Error al cargar los datos, inténtelo más tarde'
          // } else {
          //   if (error.response.data.success == false) {
          //     switch (error.response.data.code) {
          //       case 101:
          //           //console.log(error.response.data.code +' '+ error.response.data.message);
          //           //console.log(error.response.data);
          //           this.alertError = true;
          //           this.cargando = false;
          //           this.textoError = error.response.data.message;
          //           break;
          //       default:
          //           this.alertError = true;
          //           this.cargando = false;
          //           this.textoError = error.response.data.message;
          //           break;
          //     }
          //   }
          // }
        });
    },
  },
};
</script>

<style scoped>
.difuminado {
  text-shadow: #000000 2px 2px 3px;
}
.letra {
  font-size: 125%;
}
.activacion {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>