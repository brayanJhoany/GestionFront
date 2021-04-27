<template>
  <v-navigation-drawer
    app
    right
    v-model="drawers.drawer"
    :mini-variant="drawers.miniVarianteAdm"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    src="@/assets/Globales/drawer.jpg"
    mini-variant-width="80"
  >
    <v-tooltip left color="primary" :disabled="!drawers.miniVarianteAdm">
      <template v-slot:activator="{ on }">
        <v-list-item class="px-2 py-1 difuminado" active-class="activacion" v-on="on">
          <v-list-item-avatar>
            <v-img src="@/assets/Globales/estudiante.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="white--text letra pl-2"
            ><strong>Cursos</strong></v-list-item-title
          >
        </v-list-item>
      </template>
    </v-tooltip>
    <v-divider></v-divider>

    <v-list style=" margine-right: 0; margine-left:0;" v-for="curso in cursos" :key="curso.id">
      <v-tooltip left color="primary" :disabled="!drawers.miniVarianteAdm">
        <template v-slot:activator="{ on }">
          <v-list-item
            v-on="on"
            :to="{
              name: 'Curso',
              params: { id: curso.id, nombre: curso.nombre, seccion: curso.seccion, curso: curso },
            }"
            class="difuminado"
            active-class="activacion"
          >
            <v-list-item-icon>
              <v-icon color="white">fas fa-users</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text truncate letra">
              <strong>{{ curso.nombre }}</strong></v-list-item-title
            >
          </v-list-item>
        </template>
        <span><strong>Usuario</strong></span>
      </v-tooltip>
    </v-list>

    <!-- <template v-slot:append>
      <v-list-item
        v-if="$vuetify.breakpoint.smAndDown ? false : true"
        class=" difuminado align-self-end"
        style="background-color: #FF6B6B"
        @click="unLogin"
      >
        <v-list-item-icon>
          <v-icon color="white" style="font-size: 125%"
            >fas fa-power-off</v-icon
          >
        </v-list-item-icon>
        <v-list-item-title class="white--text letra"
          ><strong>Cerrar sesion</strong></v-list-item-title
        >
      </v-list-item>
    </template> -->
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  name: 'Navegacion',
  data() {
    return {
      drawer: true,
      on: '',
      cursos: [],
      cursosAux: [],
    };
  },
  computed: {
    ...mapState(['drawers']),
  },
  icons: {
    iconfont: ['mdiSvg', 'mdi', 'mdiSvg', 'md', 'fa', 'fa4', 'faSvg'],
  },
  beforeMount() {
    this.obtenerCursos();
  },
  methods: {
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
          }
        })
        .catch((error) => {
          // console.log(error);
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
