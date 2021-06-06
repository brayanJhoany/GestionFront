<template>
  <v-container fluid>
    <Volver />
    <v-row>
      <v-col cols="12" md="2"> </v-col>

      <v-col cols="12" md="8">
        <v-card class="mt-13" color="info">
          <v-row>
            <v-col cols="12">
              <v-card-title class="headline text--center" primary-title>
                <div>
                  <strong class="blue--text letra" ref="bitacora_strong"
                    >Plan de clases</strong
                  >
                </div>
                <v-spacer></v-spacer>
                <div style="text-align: right">
                  <v-btn
                    :small="$vuetify.breakpoint.lgAndDown ? true : false"
                    v-on="on"
                    fab
                    bottom
                    left
                    elevation="0"
                    color="info"
                  >
                  </v-btn>
                </div>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <section id="claseYconsultas">
          <v-row align="center" justify="center" class="mt-5">
            <v-col cols="6" md="2">
              <v-text-field label="Horario de clases"></v-text-field>
            </v-col>
            <v-col cols="6" md="2">
              <v-text-field label="Horario de consultas"></v-text-field>
            </v-col>
            <v-col cols="6" md="2">
              <v-btn color="primary" elevation="2">Guardar</v-btn>
            </v-col>
          </v-row>
        </section>
        <section id="actividades">
          <v-card class="mt-13" color="info">
            <v-card-title class="headline text--center" primary-title>
              <div>
                <strong class="blue--text" style="font-size: 90%"
                  >Actividades</strong
                >
              </div>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="
                        dialogAgregarActividad = true;
                        form_añadirActividadValido = false;
                      "
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir actividad</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-2 mt-4"
          >
          </v-data-table>
        </section>
      </v-col>
      <v-col cols="12" md="2"> </v-col>
    </v-row>
    <!--


    <v-row align="center" justify="center">
      <v-col cols="10" md="2">
        <v-text-field label="Fecha"></v-text-field>
      </v-col>
      <v-col cols="10" md="2">
        <v-text-field label="Saber/Tema"></v-text-field>
      </v-col>
      <v-col cols="10" md="2">
        <v-text-field label="Actividad"></v-text-field>
      </v-col>
      <v-col cols="10" md="2">
        <v-text-field label="Observación"></v-text-field>
      </v-col>
      <v-col cols="10" md="2">
        <v-btn color="accent">Añadir</v-btn>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-divider></v-divider>
      </v-col>
    </v-row>

    -->
  </v-container>
</template>

<script>
import Volver from "@/components/Globales/Volver.vue";

export default {
  components: {
    Volver,
  },

  Volvername: "PlanDeClases",
  data() {
    return {
      dialogAgregarActividad: false,
      form_añadirActividadValido: false,
      headers: [
        { text: "Fecha", align: "start", value: "name", sortable: false },
        { text: "Saber/Tema", value: "calories", sortable: false },
        { text: "Actividad", value: "fat", sortable: false },
        { text: "Observación", value: "carbs", sortable: false },
      ],
      desserts: [
        {
          name: "03/06/2021",
          calories: 159,
          fat: 6.0,
          carbs: 24,
        },
        {
          name: "10/06/2021",
          calories: 237,
          fat: 9.0,
          carbs: 37,
        },
        {
          name: "17/06/2021",
          calories: 262,
          fat: 16.0,
          carbs: 23,
        },
        {
          name: "24/06/2021",
          calories: 305,
          fat: 3.7,
          carbs: 67,
        },
        {
          name: "01/07/2021",
          calories: 356,
          fat: 16.0,
          carbs: 49,
        },
        {
          name: "08/07/2021",
          calories: 375,
          fat: 0.0,
          carbs: 94,
        },
        {
          name: "03/07/2021",
          calories: 392,
          fat: 0.2,
          carbs: 98,
        },
        {
          name: "03/07/2021",
          calories: 408,
          fat: 3.2,
          carbs: 87,
        },
        {
          name: "03/07/2021",
          calories: 452,
          fat: 25.0,
          carbs: 51,
        },
        {
          name: "03/06/2021",
          calories: 518,
          fat: 26.0,
          carbs: 65,
        },
      ],
    };
  },
};
</script>

<style scoped>
.difuminado {
  text-shadow: #555 2px 2px 3px;
}
.letra {
  font-size: 125%;
}

.borde {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-style: solid;
  border-color: color;
}
.DIV {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  padding: 10px;
}
</style>