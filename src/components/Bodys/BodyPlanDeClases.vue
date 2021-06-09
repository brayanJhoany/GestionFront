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
            <v-col class="mb-6">
              <strong>Añadir horario de consulta</strong>
            </v-col>
            <v-col >
              <v-select
                :items="dias"
                label="Día"
                solo
              ></v-select>
            </v-col>
            
            <v-col>
              <v-menu
                ref="menu4"
                v-model="menu4"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time4"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time4"
                    label="Hora Inicio"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu4"
                  v-model="time4"
                  full-width
                  @click:minute="$refs.menu4.save(time4)"
                ></v-time-picker>
              </v-menu>


            </v-col>
            <v-col>


              <v-menu
                ref="menu5"
                v-model="menu5"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time5"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time5"
                    label="Hora Fin"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu5"
                  v-model="time5"
                  full-width
                  @click:minute="$refs.menu5.save(time5)"
                ></v-time-picker>
              </v-menu>


            </v-col>
            <v-col class="mb-6">
              <v-btn color="primary" elevation="2">Añadir</v-btn>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center" justify="center" class="mt-5">
            <v-col class="mb-6">
              <strong>Añadir horario de clases</strong>
            </v-col>
            <v-col >
              <v-select
                :items="dias"
                label="Día"
                solo
              ></v-select>
            </v-col>

            <v-col>
              <v-menu
                ref="menu6"
                v-model="menu6"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time6"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time6"
                    label="Hora Inicio"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu6"
                  v-model="time6"
                  full-width
                  @click:minute="$refs.menu6.save(time6)"
                ></v-time-picker>
              </v-menu>


            </v-col>
            <v-col>


              <v-menu
                ref="menu7"
                v-model="menu7"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time7"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time7"
                    label="Hora Fin"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu7"
                  v-model="time7"
                  full-width
                  @click:minute="$refs.menu7.save(time7)"
                ></v-time-picker>
              </v-menu>


            </v-col>
            <v-col class="mb-6">
              <v-btn color="primary" elevation="2">Añadir</v-btn>
            </v-col>
          </v-row>
          
          <v-divider></v-divider>

          <v-row class="mt-6">
            <v-col justify="center" align="center">
              <strong>Horario Consulta</strong>
            </v-col>
            <v-col justify="center" align="center">
              <strong>Horario Clases</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-data-table
                :headers="headers_horario_consulta"
                :items="body_horario_consulta"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>              
            </v-col>
            <v-col>
              <v-data-table
                :headers="headers_horario_clase"
                :items="body_horario_clase"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
            </v-col>
          </v-row>
        </section>

        <v-divider class="mt-10"></v-divider>

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
          <div class="mb-6"></div>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card color="success" class="mb-1">
              <v-card-title class="headline text--center" primary-title>
                <div class="v-markdown">
                  <h5 class="white--text difuminado">
                    Semana: {{ item.semana }} - {{ item.fecha }}
                  </h5>
                </div>
                <v-spacer></v-spacer>
                <div style="text-align: right">
                  <v-tooltip bottom color="primary">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        color="white"
                        fab
                        small
                        depressed
                        class="mr-2 py-2"
                        @click="editarActividad(item)"
                      >
                        <v-icon color="primary"> fas fa-edit </v-icon>
                      </v-btn>
                    </template>
                    <span><strong>Editar</strong></span>
                  </v-tooltip>
                  <v-tooltip bottom color="primary">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        color="white"
                        fab
                        small
                        depressed
                        class="mr-2 py-2"
                        @click="eliminarActividad(item)"
                      >
                        <v-icon color="warning"> fas fa-trash-alt </v-icon>
                      </v-btn>
                    </template>
                    <span><strong>Eliminar</strong></span>
                  </v-tooltip>
                </div>
              </v-card-title>
              <v-container style="background-color: white; padding: 5px">
                <v-row style="margin: 0; padding: 0">
                  <v-col md="12" lg="4" style="margin: 0; padding: 0">
                    <h5 class="mt-2 mb-1 ml-3">Actividad</h5>
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ item.actividad }}
                    </div>
                  </v-col>
                  <v-col md="12" lg="4" style="margin: 0; padding: 0">
                    <h5 class="mt-2 mb-1 ml-3">Saber/Tema</h5>
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ item.proposito }}
                    </div>
                  </v-col>
                  <v-col md="12" lg="4" style="margin: 0; padding: 0">
                    <h5 class="mt-2 mb-1 ml-3">Observación</h5>
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ item.observacion }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <!--<v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-2 mt-4"
          >
          </v-data-table>-->
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
    <v-dialog v-model="dialogAgregarActividad" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Agregar actividad</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_añadirActividad"
            style="margin: 0; padding: 0"
            v-model="form_añadirActividadValido"
            lazy-validation
          >
            <v-select ref="semana" :items="semanas" label="Semana"></v-select>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field v-model="fechaAddObs" readonly v-on="on">
                </v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="fechaAddObs"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
            <v-textarea
              color="secondary"
              label="Actividad"
              :rules="[
                (v) => !!v || 'La actividad es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La actividad contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              color="secondary"
              label="Saber/Tema"
              :rules="[
                (v) => !!v || 'El saber/tema es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'El saber/tema contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              color="secondary"
              label="Observación"
              :rules="[
                (v) => !!v || 'La observación es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La observación contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <div class="pb-1" style="text-align: right">
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="warning"
                @click="dialogAgregarActividad = false"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :disabled="!form_añadirObservacionValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click=""
              >
                <h4 class="white--text">Agregar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEditarActividad" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Editar actividad</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_añadirActividad"
            style="margin: 0; padding: 0"
            v-model="form_editarActividadValido"
            lazy-validation
          >
            <v-select ref="semana" :items="semanas" label="Semana"></v-select>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field v-model="fechaAddObs" readonly v-on="on">
                </v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="fechaAddObs"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
            <v-textarea
              color="secondary"
              label="Actividad"
              :rules="[
                (v) => !!v || 'La descripción es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La descripción contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              color="secondary"
              label="Saber/Tema"
              :rules="[
                (v) => !!v || 'La descripción es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La descripción contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              color="secondary"
              label="Observación"
              :rules="[
                (v) => !!v || 'La descripción es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La descripción contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <div class="pb-1" style="text-align: right">
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="warning"
                @click="dialogEditarActividad = false"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :disabled="!form_añadirObservacionValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click=""
              >
                <h4 class="white--text">Agregar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEliminarActividad" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500px">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Eliminar actividad</h5>
        </v-card-title>

        <v-card-title
          class="text-justify"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'font-size: 90%;'
              : 'font-size: 100%;'
          "
          >Esta seguro que desea eliminar la actividad?</v-card-title
        >
        <div class="px-5 mt-5 pb-4" style="text-align: right">
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="warning"
            @click="dialogEliminarActividad = false"
          >
            <h4 class="white--text">Cancelar</h4>
          </v-btn>
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="secondary"
            class="ml-2"
            @click=""
          >
            <h4 class="white--text">Eliminar</h4>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
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
      items: [
        {
          id: 1,
          semana: "1",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 2,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 3,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 4,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 5,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 6,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 7,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 8,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 9,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
        {
          id: 10,
          semana: "2",
          fecha: "05/06/2021",
          proposito: "aprender java",
          actividad: "esta es una actividad bla bla bla",
          observacion: "esta es una observacion bla bla bla",
        },
      ],

      dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
      
      headers_horario_consulta: [
        {text: "Dia", align: "start", value: "dia", sortable: false},
        {text: "Inicio", value: "hora_inicio", sortable: false},
        {text: "Término", value: "hora_termino", sortable: false},
      ],

      headers_horario_clase: [
        {text: "Dia", align: "start", value: "dia", sortable: false},
        {text: "Inicio", value: "hora_inicio", sortable: false},
        {text: "Término", value: "hora_termino", sortable: false},
      ],

      body_horario_consulta: [
        {dia: "Martes", hora_inicio: "9:40", hora_termino: "12:00"},
        {dia: "Viernes", hora_inicio: "10:50", hora_termino: "11:50"},
      ],

      body_horario_clase: [
        {dia: "Lunes", hora_inicio: "", hora_termino: ""},
        {dia: "Miercoles", hora_inicio: "", hora_termino: ""},
        {dia: "Viernes", hora_inicio: "", hora_termino: ""},
      ],

      dialogAgregarActividad: false,
      form_añadirActividadValido: false,
      dialogEditarActividad: false,
      form_editarActividadValido: false,
      dialogEliminarActividad: false,
      activePicker: null,
      date: null,
      fechaAddObs: new Date().toISOString().substr(0, 10),
      fechaUpObs: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      menu4: false,
      menu5: false,
      menu6: false,
      menu7: false,
      time4: null,
      time5: null,
      time6: null,
      time7: null,
      landscape: false,

      semanas: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
      ],

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

  methods: {
    editarActividad(item) {
      this.dialogEditarActividad = true;
    },
    eliminarActividad(item) {
      this.dialogEliminarActividad = true;
    },
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
  padding: 10px;
}
</style>