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
                    >Bitácora</strong
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
                          dialogAgregarObservacion = true;
              
                        "
                      >
                        <v-icon color="white">fas fa-plus</v-icon>
                      </v-btn>
                    </template>
                    <span><strong>Añadir observación</strong></span>
                  </v-tooltip>
                </div>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>

        <v-row>
          <v-col>
            <v-alert
              v-model="show_alerta"
              transition="scale-transition"
              v-bind:color="alertColor"
              v-bind:type="alertType"
              style="width: 100%; margin-top: 20px"
              >{{ alert_mensaje }}</v-alert
            >
            <!-- eug. -->
          </v-col>
        </v-row>

        <h3 class="white--text">/</h3>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(observacion, i) in observaciones"
            :key="i"
            :ref="'obs-' + i"
            color="success"
            large
          >
            <v-card color="success">
              <v-card-title class="headline text--center" primary-title>
                <div class="v-markdown">
                  <h5 class="white--text difuminado">
                    {{ observacion.titulo }}
                  </h5>
                </div>
              </v-card-title>
              <v-container style="background-color: white">
                <v-row style="margin: 0; padding: 0">
                  <v-col cols="12" style="margin: 0; padding: 0">
                    <h5>Fecha : {{ observacion.fecha }}</h5>
                  </v-col>
                </v-row>
                <h5 class="mt-4 mb-1">Descripción</h5>
                <div
                  class="DIV mb-2"
                  style="height: 100px; overflow: auto; font-size: 90%"
                >
                  {{ observacion.descripcion }}
                </div>

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
                        @click="cargarDatosModificarObservacion(observacion)"
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
                        @click="cargarDatosEliminarObservacion(observacion)"
                      >
                        <v-icon color="warning"> fas fa-trash-alt </v-icon>
                      </v-btn>
                    </template>
                    <span><strong>Eliminar</strong></span>
                  </v-tooltip>
                </div>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" md="2"> </v-col>
    </v-row>

    <!-- modal boton plus agregar observación -->
    <v-dialog v-model="dialogAgregarObservacion" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Agregar observación</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_añadirObservacion"
            style="margin: 0; padding: 0"
            lazy-validation
          >
            <v-text-field
              v-model="observacion.titulo"
              label="Título"
              color="secondary"
              :rules="[
                (v) => !!v || 'El título es requerido',
                (v) =>
                  /^[a-zA-Z0-9\u00f1\u00d1 ]+$/.test(v) ||
                  'El título solo puede contener letras, espacios o números.',
              ]"
            ></v-text-field>
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
              v-model="observacion.descripcion"
              color="secondary"
              label="Descripción"
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
                @click="resetAgregarObservacion"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click="agregarObservacion"
              >
                <h4 class="white--text">Agregar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      transition="scroll-y-reverse-transition"
      v-model="dialogEliminarObservacion"
      persistent
      max-width="500px"
    >
      <v-card class="mx-auto" max-width="500px">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Eliminar Observación</h5>
        </v-card-title>

        <v-card-title
          class="text-justify"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'font-size: 90%;'
              : 'font-size: 100%;'
          "
          >Esta seguro que desea eliminar la observación</v-card-title
        >
        <div class="px-5 mt-5 pb-4" style="text-align: right">
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="warning"
            @click="resetEliminarObservacion"
          >
            <h4 class="white--text">Cancelar</h4>
          </v-btn>
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="secondary"
            class="ml-2"
            @click="EliminarObservacion"
          >
            <h4 class="white--text">Eliminar</h4>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogModificarObservacion" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Modificar observación</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_actualizarObservacion"
            style="margin: 0; padding: 0"
            lazy-validation
          >
            <v-text-field
              v-model="modificarObservacion.titulo"
              label="Título"
              color="secondary"
              :rules="[
                (v) => !!v || 'El título es requerido',
                (v) =>
                  /^[a-zA-Z0-9\u00f1\u00d1 ]+$/.test(v) ||
                  'El título solo puede contener letras, espacios o números.',
              ]"
            ></v-text-field>
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field v-model="fechaUpObs" readonly v-on="on">
                </v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="fechaUpObs"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>

            <v-textarea
              v-model="modificarObservacion.descripcion"
              color="secondary"
              label="Descripción"
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
                @click="resetModificarObservacion"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click="updateObservacion"
              >
                <h4 class="white--text">Guardar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import axios from "axios";
import Volver from "@/components/Globales/Volver.vue";

export default {
  components: {
    Volver,
  },
  data() {
    return {
      //dialog
      dialogAgregarObservacion: false,
      dialogModificarObservacion: false,
      dialogEliminarObservacion: false,
      //alertas
      show_alerta: false, // eug. para el v-alert (mostrar/ocultar)
      alertColor: "green", // eug. green -> para success, red -> para error
      alertType: "success", // eug. ejemplo 'success', 'error', ...
      alert_mensaje: "Mensaje de la alerta", // eug.

      mostrar: false,
      cargando: false,
      observaciones: [],
      auxObservaciones: [],
      activePicker: null,
      date: null,
      fechaAddObs: new Date().toISOString().substr(0, 10),
      fechaUpObs: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      landscape: false,
      observacion: {
        titulo: "",
        descripcion: "",
      },
      eliminarObservacion: {
        titulo: "",
        descripcion: "",
      },
      modificarObservacion: {
        titulo: "",
        descripcion: "",
      },
        //Reglas de validacion
        rules: [
          (value) => !!value || "Requerido",
          (value) =>
            value <= new Date().getFullYear() ||
            "El año no puede ser mayor al actual",
          (value) => value >= 1981 || "El año no puede ser menor a 1981",
        ],
      reglas_Nombre: [
        (value) => !!value || "Requerido",
        (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/.test(v) || "Nombre no Válido.",
        (v) =>
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{3,40}$/.test(v) ||
          "Largo del Nombre no Válido",
      ],
      reglas_Descripcion: [
        (value) => !!value || "Requerido",
        (v) => /^\s.{1,500}$/.test(v) || "Largo del Nombre no Válido",
      ],
    };
  },
  computed: {
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  /**
   * Metodos llamados antes de cargar la pagina web.
   */
  beforeMount() {
    this.obtenerObservaciones();
  },

  methods: {
    /**
     * Resetea las reglas de validacion del formulario 
     * añadir observación
     */
    resetAddObservation() {
      this.$refs.form_añadirObservacion.resetValidation();
    },
    /**
     * Resetea las reglas de validacion del formulario 
     * actualizar observación
     */
    resetUpdateObservation() {
      this.$refs.form_actualizarObservacion.resetValidation();
    },
    /**
     * Registra la fecha de la organizacion
     */
    save(date) {
      this.$refs.menu.save(date);
    },
    /**
     * Obtenemos todas las observaciones registradas en la base de datos,
     * para esto llamamos a la API.
     */
    obtenerObservaciones() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/bitacora/1/observaciones";
      this.cargando = true;
      this.seriesaux = [0, 0, 0, 0];

      this.observaciones = [];
      this.auxObservaciones = [];

      axios
        .get(url)
        .then((result) => {
          const response = result.data;
          if (response.error === false) {
            const obs = response.observaciones;
            for (let index = 0; index < obs.length; index += 1) {
              const element = response.observaciones[index];

              this.chartOptions = {
                chart: { type: "donut" },
                animations: {
                  enabled: true,
                  easing: "easeinout",
                  speed: 800,
                  animateGradually: { enabled: true, delay: 150 },
                  dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                  },
                },
                colors: ["#4ECDC4", "#FF6B6B", "#1A535C", "#2196F3"],
                labels: ["Positiva", "Negativa", "Informativa", "Otro"],
              };

              const observacion = {
                id: element.id,
                titulo: element.titulo,
                descripcion: element.descripcion,
                fecha: element.fechaCreacion,
                selector: `#${element.id}${element.titulo}`,
                idselector: element.id + element.titulo,
              };
              this.auxObservaciones[index] = observacion;
            }
            this.cargando = false;
            this.observaciones = this.auxObservaciones;
          }
        })
        .catch((error) => {
          console.log("error");
        });
    },
    /**
     * resetea la añerta
     */
    resetAgregarObservacion() {
      this.my_custom_alert(
        true,
        "blue",
        "info",
        "¡La acción fue anulada!",
        1500
      );
      this.resetAddObservation();
      this.dialogAgregarObservacion = false;
      this.observacion.titulo = "";
      this.observacion.descripcion = "";
      this.fechaAddObs = new Date().toISOString().substr(0, 10);
    },
    /**
     * Agrega una nueva observación, para esto hacemos una llamada
     * a la API
     */
    agregarObservacion() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      const url =  this.$store.state.rutaDinamica + "profesor/" + usuario.id + "/curso/" + cursoId + "/bitacora/1/observacion";
      const request = {
        titulo: this.observacion.titulo,
        descripcion: this.observacion.descripcion,
        fecha: this.fechaAddObs,
      };
      axios
        .post(url, request, this.$store.state.config)
        .then((result) => {
          this.resetAgregarObservacion();
          const response = result.data;
          const observacion = {
            id: response.id,
            titulo: response.titulo,
            descripcion: response.descripcion,
            fecha: response.fechaCreacion,
            selector: `#${response.id}${response.titulo}`,
            idselector: response.id + response.titulo,
          };
          this.observaciones.push(observacion);
          this.my_custom_alert(
            true,
            "green",
            "success",
            "¡Observación creada exitosamente!",
            2500
          );
        })
        .catch((error) => {
          this.my_custom_alert(
            true,
            "red",
            "error",
            "¡Error al crear la observación!",
            2500
          );
        });
    },
    /**
     * Reseteamos las variables utilizadas para eliminar una 
     * observación
     */
    resetEliminarObservacion() {
      this.dialogEliminarObservacion = false;
      this.eliminarObservacion.id = "";
      this.eliminarObservacion.id = "";
      this.eliminarObservacion.fecha = "";
      this.eliminarObservacion.descripcion = "";
      this.my_custom_alert(
        true,
        "blue",
        "info",
        "¡La acción fue anulada!",
        1500
      );
    },
    /**
     * Elimina una observacion, para esto llamamos a la API
     */
    EliminarObservacion() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        cursoId +
        "/bitacora/1/observacion/" +
        this.eliminarObservacion.id;
      axios
        .delete(url, this.$store.state.config)
        .then((result) => {
          this.resetEliminarObservacion();
          this.obtenerObservaciones(); // crea un metodo para la eliminacion
          this.my_custom_alert(
            true,
            "green",
            "success",
            "¡Observación eliminada exitosamente!",
            2500
          );
        })
        .catch((error) => {
          this.my_custom_alert(
            true,
            "red",
            "error",
            "¡Error al eliminar la observación!",
            2500
          );
        });
    },
    /**
     * Registra la informacion de la observacion a eliminar en una
     * variable auxiliar.
     */
    cargarDatosEliminarObservacion(observacion) {
      this.dialogEliminarObservacion = true;
      this.eliminarObservacion = {
        id: "",
        titulo: "",
        descripcion: "",
      };
      this.eliminarObservacion.id = observacion.id;
      this.eliminarObservacion.titulo = observacion.titulo;
      this.eliminarObservacion.fecha = observacion.fecha;
      this.eliminarObservacion.descripcion = observacion.descripcion;
    },
    /**
     * Actualiza la información de una observación.
     */
    updateObservacion() {
      var usuario = this.getUserValido;
      let cursoId = this.$route.params.id;
      const url = this.$store.state.rutaDinamica + "profesor/" +  usuario.id +  "/curso/" + cursoId + "/bitacora/1/observacion/" + this.modificarObservacion.id;
      const request = {
        titulo: this.modificarObservacion.titulo,
        descripcion: this.modificarObservacion.descripcion,
        fecha: this.fechaUpObs,
      };
      axios
        .put(url, request, this.$store.state.config)
        .then((result) => {
          this.resetModificarObservacion();
          this.obtenerObservaciones(); // ver como actualizar la app sin  llamar a la bd
          this.my_custom_alert(
            true,
            "green",
            "success",
            "¡Observación modificada exitosamente!",
            2500
          );
        })
        .catch((error) => {
          this.my_custom_alert(
            true,
            "red",
            "error",
            "¡Error al modificar la observación!",
            2500
          );
        });
    },
    /**
     * Registra los datos de la observación a modificar en una varaible auxiliar,
     * para realizar su modificación
     */
    cargarDatosModificarObservacion(observacion) {
      this.dialogModificarObservacion = true;
      this.modificarObservacion = { id: "", titulo: "", descripcion: "" };
      this.modificarObservacion.id = observacion.id;
      this.modificarObservacion.titulo = observacion.titulo;
      this.modificarObservacion.fecha = observacion.fecha;
      this.modificarObservacion.descripcion = observacion.descripcion;
    },
    /**
     * Resetea las varaibles utilizadas para la modificacion de una observación
     */
    resetModificarObservacion() {
      this.my_custom_alert(
        true,
        "blue",
        "info",
        "¡La acción fue anulada!",
        1500
      );
      this.resetUpdateObservation();
      this.dialogModificarObservacion = false;
      this.modificarObservacion.id = "";
      this.modificarObservacion.titulo = "";
      this.modificarObservacion.fecha = "";
      this.modificarObservacion.descripcion = "";
      this.fechaAddObs = new Date().toISOString().substr(0, 10);
    },
    /**
     * Permite la creacion de alertas modificables.
     */
    my_custom_alert(
      show_alerta,
      alertColor,
      alertType,
      alert_mensaje,
      alert_timeout
    ) {
      this.show_alerta = show_alerta; // true | false
      this.alertColor = alertColor; // 'green', 'red', etc...
      this.alertType = alertType; // 'success', 'error', 'info', etc...
      this.alert_mensaje = alert_mensaje; // 'Se realizó la acción correctamente', etc...
      setTimeout(() => {
        this.show_alerta = false;
      }, alert_timeout);
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
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  padding: 10px;
}
</style>
