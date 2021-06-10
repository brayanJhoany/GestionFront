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
              <v-text-field
                v-model="plan.horarioClases"
                label="Horario de clases"
              ></v-text-field>
            </v-col>
            <v-col cols="6" md="2">
              <v-text-field
                v-model="plan.horarioConsultas"
                label="Horario de consultas"
              ></v-text-field>
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
          <div class="mb-6"></div>
          <v-col
            v-for="(detalle, i) in detallesPlan"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card color="success" class="mb-1">
              <v-card-title class="headline text--center" primary-title>
                <div class="v-markdown">
                  <h5 class="white--text difuminado">
                    Semana: {{ detalle.semana }} - {{ detalle.fecha }}
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
                        @click="cargarDatosEditar(detalle)"
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
                        @click="cargarIDeliminarActividad(detalle)"
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
                      {{ detalle.actividad }}
                    </div>
                  </v-col>
                  <v-col md="12" lg="4" style="margin: 0; padding: 0">
                    <h5 class="mt-2 mb-1 ml-3">Saber/Tema</h5>
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ detalle.saber_tema }}
                    </div>
                  </v-col>
                  <v-col md="12" lg="4" style="margin: 0; padding: 0">
                    <h5 class="mt-2 mb-1 ml-3">Observación</h5>
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ detalle.observacion }}
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
            <v-select
              v-model="semana_selec"
              ref="semana"
              :items="semanas"
              label="Semana"
            ></v-select>
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
              v-model="detalle.actividad"
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
              v-model="detalle.saber_tema"
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
              v-model="detalle.observacion"
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
                @click="resetFormularioAgregar"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :disabled="!form_añadirActividadValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click="agregarActividad"
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
            <v-select
              v-model="detalleEditar.semana"
              ref="semana"
              :items="semanas"
              label="Semana"
            ></v-select>
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
              v-model="detalleEditar.actividad"
              color="secondary"
              label="Actividad"
              :rules="[
                (v) => !!v || 'La actividad es requerida.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La descripción contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              v-model="detalleEditar.saber_tema"
              color="secondary"
              label="Saber/Tema"
              :rules="[
                (v) => !!v || 'El tema/saber es requerido.',
                (v) =>
                  /^[a-zA-Z0-9,-.¿?:;/¡!\u00f1\u00d1 ]+$/.test(v) ||
                  'La descripción contiene caracteres no permitidos.',
              ]"
            ></v-textarea>
            <v-textarea
              v-model="detalleEditar.observacion"
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
                :disabled="!form_editarActividadValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click="editarActividad"
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
            @click="eliminarActividad()"
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
import axios from "axios";

export default {
  components: {
    Volver,
  },

  Volvername: "PlanDeClases",
  data() {
    return {
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
      landscape: false,
      semana_selec: "",
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

      //se utilizan para almacenar las actividades o detalles del plan de clases obtenidos desde la bd
      detallesPlan: [],
      auxDetallesPlan: [],

      //almacena los datos del plan de clases con el que estamos trabajando
      plan: {
        id: "",
        horarioClases: "",
        horarioConsultas: "",
      },

      //almacena los datos de la nueva actividad que vamos a agregar al plan de clases
      detalle: {
        semana: "",
        fecha: "",
        actividad: "",
        saber_tema: "",
        observacion: "",
      },

      idEliminarActividad: "",

      detalleEditar: {
        id: "",
        semana: "",
        fecha: "",
        actividad: "",
        saber_tema: "",
        observacion: "",
      },
    };
  },

  computed: {
    target() {
      return "#hola";
    },
    options() {
      return {
        duration: 300,
        offset: 23,
        easing: "linear",
      };
    },
    getUserValido() {
      return this.$store.getters.usuario;
    },
  },

  beforeMount() {
    this.obtenerPlanClases();
  },
  save(date) {
    this.$refs.menu.save(date);
  },

  methods: {
    obtenerPlanClases() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      const url_plan =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/plan-de-clases";
      this.cargando = true;

      this.detallesPlan = [];
      this.auxDetallesPlan = [];
      this.plan = {
        id: "",
        horarioClases: "",
        horarioConsultas: "",
      };

      //La primera consulta es para obtener los datos del plan de clases.
      axios
        .get(url_plan)
        .then((result) => {
          const response = result.data;
          console.log(response);
          if (response.error === false) {
            const auxPlan = {
              id: response.PlanDeClase[0].id,
              horarioClases: response.PlanDeClase[0].horarioDeClases,
              horarioConsultas: response.PlanDeClase[0].horarioDeConsultas,
            };

            this.plan.id = auxPlan.id;
            this.plan.horarioClases = auxPlan.horarioClases;
            this.plan.horarioConsultas = auxPlan.horarioConsultas;

            //en la api de rutas esta como "plan-de-clase" en vez de "plan-de-clases".
            const url_detalle =
              this.$store.state.rutaDinamica +
              "profesor/" +
              usuario.id +
              "/curso/" +
              cursoId +
              "/plan-de-clase/" +
              auxPlan.id +
              "/detalles";

            //la segunda consulta es para obtener la lista de actividades dentro del plan de clases.
            axios.get(url_detalle).then((result) => {
              const response = result.data;
              if (response.error === false) {
                const lista_detalles = response.DetallePlanDeClase;

                for (let index = 0; index < lista_detalles.length; index += 1) {
                  const auxDetalle = response.DetallePlanDeClase[index];

                  const detalle = {
                    id: auxDetalle.id,
                    fecha: auxDetalle.fecha,
                    semana: auxDetalle.semana,
                    saber_tema: auxDetalle.saber_tema,
                    actividad: auxDetalle.actividad,
                    observacion: auxDetalle.observacion,
                  };

                  this.auxDetallesPlan[index] = detalle;
                }
                this.cargando = false;
                this.detallesPlan = this.auxDetallesPlan;
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    agregarActividad() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      var idPlan = this.plan.id;
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/plan-de-clases/" +
        idPlan +
        "/detalle";

      const request = {
        fecha: this.fechaAddObs,
        semana: this.semana_selec,
        saber_tema: this.detalle.saber_tema,
        actividad: this.detalle.actividad,
        observacion: this.detalle.observacion,
      };

      axios
        .post(url, request, this.$store.state.config)
        .then((result) => {
          this.resetFormularioAgregar();
          const response = result.data;
          this.obtenerPlanClases();
        })
        .catch((error) => {});
    },

    resetFormularioAgregar() {
      this.dialogAgregarActividad = false;
      this.$refs.form_añadirActividad.resetValidation();
      this.detalle.actividad = "";
      this.detalle.saber_tema = "";
      this.detalle.observacion = "";
      this.fechaAddObs = new Date().toISOString().substr(0, 10);
      this.semana_selec = "";
    },

    resetFormularioEditar() {
      this.dialogEditarActividad = false;
      this.$refs.form_editarActividad.resetValidation();
      this.detalleEditar.id = "";
      this.detalleEditar.actividad = "";
      this.detalleEditar.saber_tema = "";
      this.detalleEditar.observacion = "";
      this.detalleEditar.fecha = "";
      this.fechaAddObs = new Date().toISOString().substr(0, 10);
    },

    cargarDatosEditar(detalle) {
      this.detalleEditar.id = detalle.id;
      this.detalleEditar.fecha = detalle.fecha;
      this.detalleEditar.semana = detalle.semana;
      this.detalleEditar.actividad = detalle.actividad;
      this.detalleEditar.saber_tema = detalle.saber_tema;
      this.detalleEditar.observacion = detalle.observacion;
      this.dialogEditarActividad = true;
    },

    editarActividad() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      var idPlan = this.plan.id;
      var idDetalle = this.detalleEditar.id;

      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/plan-de-clases/" +
        idPlan +
        "/detalle/" +
        idDetalle;

      const request = {
        fecha: this.fechaAddObs,
        semana: this.detalleEditar.semana,
        saber_tema: this.detalleEditar.saber_tema,
        actividad: this.detalleEditar.actividad,
        observacion: this.detalleEditar.observacion,
      };

      axios
        .put(url, request, this.$store.state.config)
        .then((result) => {
          this.resetFormularioEditar();
          this.obtenerPlanClases();
        })
        .catch((error) => {});
    },

    cargarIDeliminarActividad(detalle) {
      this.dialogEliminarActividad = true;
      this.idEliminarActividad = detalle.id;
    },

    eliminarActividad() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      var idPlan = this.plan.id;
      var idDetalle = this.idEliminarActividad;

      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/plan-de-clases/" +
        idPlan +
        "/detalle/" +
        idDetalle;

      axios
        .delete(url, this.$store.state.config)
        .then((result) => {
          this.dialogEliminarActividad = false;
          this.obtenerPlanClases();
        })
        .catch((error) => {});
    },

    click() {
      console.log("Se realizo un click en el boton");
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