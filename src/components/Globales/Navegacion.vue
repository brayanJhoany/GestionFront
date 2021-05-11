<template>
  <v-navigation-drawer
    app
    left
    v-model="drawers.drawer"
    :mini-variant="drawers.miniVarianteAdm"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    color="#054A91"
    mini-variant-width="80"
  >
    <v-tooltip left color="primary" :disabled="!drawers.miniVarianteAdm">
      <template v-slot:activator="{ on }">
        <v-list-item class="px-2 py-2 difuminado" active-class="activacion" v-on="on">
          <!--<v-list-item-avatar>
            <v-img src="@/assets/Globales/estudiante.jpg"></v-img>
          </v-list-item-avatar>-->
          <v-list-item-title class="white--text letra pl-2 center"
            ><strong>Mis cursos</strong></v-list-item-title
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
            <v-list-item-title class="white--text truncate letra">
              <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span
                  v-bind="attrs"
                  v-on="on"
                ><strong>{{ curso.nombre }} - {{curso.seccion}}</strong></span>
              </template>
              <span>{{ curso.nombre }} - {{curso.seccion}}</span>
            </v-tooltip>
              <!-- <strong>{{ curso.nombre }}</strong> -->
            </v-list-item-title >
          </v-list-item>
        </template>
        <span><strong>Usuario</strong></span>
      </v-tooltip>
    </v-list>
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
    ...mapState(['drawers'])
  },
  icons: {
    iconfont: ['mdiSvg', 'mdi', 'mdiSvg', 'md', 'fa', 'fa4', 'faSvg'],
  },
  created() {
    this.obtenerCursos();
  },
  methods: {
    obtenerCursos() {
      var usuario = this.$store.getters.usuario;
      this.cursosAux = [];
      const url = this.$store.state.rutaDinamica +"profesor/"+usuario.id+"/cursos";
      axios.get(url)
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
