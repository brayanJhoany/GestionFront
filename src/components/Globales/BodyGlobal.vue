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
            <v-card class="mx-auto " max-width="400" :color="card.color" outlined>
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
            <v-card
                class="mx-auto"
                max-width="344"
                @click="redireccion(card.nombre)"
            >
                <v-img
                src="@/assets/bt.png"
                height="100%"
                
                >
                </v-img>
                <v-card-title class="accent" >
                    <div style="color: white;">
                        <strong>{{ card.nombre }}</strong> 
                    </div>
                </v-card-title>
    
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
          icono: 'fas fa-clipboard',
          color: '#9FA8DA'
        },
        {
          nombre: 'Syllabus',
          icono: 'fas fa-book-open',
          color: '#EF5350'
        },
        {
          nombre: 'Planificación',
          icono: 'fas fa-calendar-alt',
          color: '#4CAF50'
        },
      ],
    };
  },
  props: { curso: Array },
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
