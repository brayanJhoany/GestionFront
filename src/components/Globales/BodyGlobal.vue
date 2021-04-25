<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1"></v-col>
      <v-col cols="12" md="10">
        <v-row>
          <v-col
            class="mt-16"
            v-for="(card, i) in cards"
            :key="`card-${i}`"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="mx-auto " max-width="400" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <a @click="redireccion(card.nombre)">
                      {{ card.nombre }}
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar tile size="80" color="grey"
                  ><v-icon> {{ card.icono }}</v-icon>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="1"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      // curso: [{ id: '' }, { nombre: '' }, { seccion: '' }],
      cursoNombre: 'pedro',
      cards: [
        {
          nombre: 'Bitacora',
          icono: 'fas fa-school',
        },
        {
          nombre: 'Syllabus',
          icono: 'fas fa-school',
        },
        {
          nombre: 'Planificación',
          icono: 'fas fa-school',
        },
      ],
    };
  },
  props: { curso: Array },

  // beforeRouteEnter(to, from, next) {
  //   // aun no puedo usar al this
  //   console.log('beforeRouteEnter');
  //   // console.log("destoy actualizando la ruta");
  //   // this.curso.id = this.$route.params.id;
  //   // this.curso.nombre = this.$route.params.nombre.replace("-", " ");
  //   // this.curso.seccion = this.$route.params.seccion;
  //   // console.log(this.curso.nombre);
  //   return next((vm) => {
  //     console.log(from);
  //     console.log(to);
  //   });
  // },
  // beforeRouteUpdate(to, from) {
  //   console.log('beforeRouteUpdate');
  // },
  // beforeRouteLeave(to, from) {
  //   console.log('beforeRouteLeave');
  // },
  // created() {
  //   this.remplazarNombreCurso();
  // },
  methods: {
    redireccion(accion) {
      if (accion === 'Bitacora') {
        this.$router.push({
          name: 'Bitacora',
          params: {
            id: this.$route.params.id,
            nombre: this.$route.params.nombre,
            seccion: this.$route.params.seccion,
          },
        });
      }
      if (accion === 'Syllabus') {
        this.$router.push({
          name: 'Syllabus',
          params: {
            id: this.$route.params.id,
            nombre: this.$route.params.nombre,
            seccion: this.$route.params.seccion,
          },
        });
      }
      if (accion === 'Planificación') {
        this.$router.push({
          name: 'PlanDeClases',
          params: {
            id: this.$route.params.id,
            nombre: this.$route.params.nombre,
            seccion: this.$route.params.seccion,
          },
        });
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration-line: none;
}

a:hover {
  text-decoration: underline;
}
</style>
