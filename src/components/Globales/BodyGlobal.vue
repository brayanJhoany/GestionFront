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
            <v-card
              class="mx-auto"
              max-width="344"
              @click="redireccion(card.nombre)"
            >
              <v-img
                v-if="card.nombre == 'Bitácora'"
                src="@/assets/btc1.png"
                height="50%"
              >
              </v-img>
              <v-img
                v-if="card.nombre == 'Syllabus'"
                src="@/assets/syl.png"
                height="100%"
              >
              </v-img>
              <v-img
                v-if="card.nombre == 'Plan de clases'"
                src="@/assets/btc.png"
                height="100%"
              >
              </v-img>
              <v-card-title class="accent">
                <div style="color: white">
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
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      // curso: [{ id: '' }, { nombre: '' }, { seccion: '' }],
      cursoNombre: "pedro",
      cards: [
        {
          nombre: "Bitácora",
          icono: "clipboard-solid.svg",
        },
        {
          nombre: "Syllabus",
          icono: "clipboard-solid.svg",
        },
        {
          nombre: "Plan de clases",
          icono: "clipboard-solid.svg",
        },
      ],
    };
  },
  props: { curso: Array },
  methods: {
    /**
     * Método encargado de redireccionar a la diferentes vistas de cada curso asociado
     */
    redireccion(accion) {
      if (accion === "Bitácora") {
        this.$router.push({
          name: "Bitacora",
          params: {
            id: this.$route.params.id,
            nombre: this.$route.params.nombre,
            seccion: this.$route.params.seccion,
          },
        });
      }
      if (accion === "Syllabus") {
        this.$router.push({
          name: "Syllabus",
          params: {
            id: this.$route.params.id,
            nombre: this.$route.params.nombre,
            seccion: this.$route.params.seccion,
          },
        });
      }
      if (accion === "Plan de clases") {
        this.$router.push({
          name: "PlanDeClases",
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
