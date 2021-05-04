<template>
  <v-container fluid>
    <!-- <v-btn block @click="volver">
      <v-icon class="pr-2" color="primary"> fas fa-arrow-circle-left</v-icon>
      volver
    </v-btn> -->
    <v-row>
      <!-- <v-col cols="12" md="2" align-self="end"> </v-col> -->

      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" sm="0" md="1"> </v-col>
          <v-col cols="12" sm="12" md="10">
            <v-card class="mt-13" color="info">
              <v-row>
                <v-col cols="12" >
                  <v-card-title class="headline text--center " primary-title>
                    <div>
                        <strong
                        class=" blue--text"
                        >Observaciones</strong
                        >
                    </div>
                    <v-spacer></v-spacer>
                    <div style="text-align:right;">
                        <v-btn
                        :small="$vuetify.breakpoint.lgAndDown ? true : false"
                        fab
                        bottom
                        left
                        color="accent"
                        @click="dialogAgregarObservacion = true"
                        >
                        <v-icon color="white">fas fa-plus</v-icon>
                        </v-btn>
                    </div>
                  </v-card-title>
                </v-col>
                <!--<v-col cols="12" md="8" xl="9" class="align-self-center ">
                  <v-overlay :absolute="true" :value="cargando">
                    <v-progress-circular indeterminate size="64"> </v-progress-circular>
                  </v-overlay>
                  <v-row justify="center" v-if="validacionObservaciones">
                    <div id="chart">
                      <apexchart
                        ref="realtimeChart"
                        type="donut"
                        :options="chartOptions"
                        :series="series"
                        :width="$vuetify.breakpoint.lgAndDown ? 300 : 380"
                      ></apexchart>
                    </div>
                  </v-row>
                  <v-row justify="center" v-if="validacionObservacionesFalse == false">
                    <h3>No existen observaciones</h3>
                  </v-row>
                </v-col>-->
              </v-row>
            </v-card>
            <h3 class="white--text">/</h3>
            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(observacion, i) in observaciones"
                :key="i"
                color="success"
                large
              >
                <v-card :color="observacion.color">
                  <v-card-title class="headline  text--center" primary-title>
                    <div class="v-markdown">
                      <h5 class="blue--text ">{{ observacion.titulo }}</h5>
                    </div>
                  </v-card-title>
                  <v-container style="background-color:white;">
                    <v-row style="margin: 0; padding: 0;">
                      <v-col cols="4" lg="3" xl="2" style="margin: 0; padding: 0;">
                        <h5>Titulo</h5>
                      </v-col>
                      <v-col cols="8" lg="9" xl="10" style="margin: 0; padding: 0;">
                        <h5>: {{ observacion.titulo }}</h5>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0; padding: 0;">
                      <v-col cols="4" lg="3" xl="2" style="margin: 0; padding: 0;">
                        <h5>Fecha</h5>
                      </v-col>

                      <v-col cols="8" lg="9" xl="10" style="margin: 0; padding: 0;">
                        <h5>: {{ observacion.fecha }}</h5>
                      </v-col>
                    </v-row>
                    <h5 class="mt-4">Descripción</h5>
                    <div class="DIV  mb-2" style=" height:150px; overflow: auto; font-size: 90%">
                      {{ observacion.descripcion }}
                    </div>

                    <div style="text-align:right;">
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
                            <v-icon color="primary">
                              fas fa-edit
                            </v-icon>
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
                            <v-icon color="warning">
                              fas fa-trash-alt
                            </v-icon>
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
          <v-col cols="0" sm="0" md="1"> </v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="12" md="2"> </v-col> -->
    </v-row>
    <v-dialog v-model="dialogAgregarObservacion" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text ">Agregar observación</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_añadirObservacion"
            style="margin:0;padding:0;"
            v-model="form_añadirObservacionValido"
            lazy-validation
          >
            <v-text-field
              v-model="observacion.titulo"
              label="Titulo"
              outlined
              color="secondary"
              prepend-inner-icon="fas fa-heading"
              :rules="[(v) => !!v || 'El título es requerido']"
            ></v-text-field>
            <v-textarea
              v-model="observacion.descripcion"
              outlined
              color="secondary"
              label="Descripción"
              :rules="[(v) => !!v || 'La descripción es requerida.']"
            ></v-textarea>
            <div class="pb-1" style="text-align:right;">
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="warning"
                @click="resetAgregarObservacion"
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
          <h5 class="white--text ">Eliminar Observacion</h5>
        </v-card-title>

        <v-card-title
          class="text-justify"
          :style="$vuetify.breakpoint.smAndDown ? 'font-size: 90%;' : 'font-size: 100%;'"
          >Esta seguro que desea eliminar la siguiente observacion?</v-card-title
        >
        <v-container class="px-5" style="background-color:white;">
          <v-row style="margin: 0; padding: 0;">
            <v-col cols="4" lg="3" xl="2" style="margin: 0; padding: 0;">
              <h5>Titulo</h5>
            </v-col>
            <v-col cols="8" lg="9" xl="10" style="margin: 0; padding: 0;">
              <h5>: {{ eliminarObservacion.titulo }}</h5>
            </v-col>
          </v-row>

          <!-- <v-row style="margin: 0; padding: 0;">
            <v-col cols="4" lg="3" xl="2" style="margin: 0; padding: 0;">
              <h5>Fecha</h5>
            </v-col>

            <v-col cols="8" lg="9" xl="10" style="margin: 0; padding: 0;">
              <h5>: {{ eliminarObservacion.fecha }}</h5>
            </v-col>
          </v-row> -->
          <h5 class="mt-4">Descripción</h5>
          <div class="DIV  mb-2" style=" height:150px; overflow: auto; font-size: 90%">
            {{ eliminarObservacion.descripcion }}
          </div>
        </v-container>

        <div class="px-5  pb-4" style="text-align:right;">
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
          <h5 class="white--text ">Modificar observacion</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-text-field
            v-model="modificarObservacion.titulo"
            label="Titulo"
            outlined
            color="secondary"
            prepend-inner-icon="fas fa-heading"
          ></v-text-field>
          <v-textarea
            v-model="modificarObservacion.descripcion"
            outlined
            color="secondary"
            label="Descripcion"
          ></v-textarea>
          <div class="pb-1" style="text-align:right;">
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
              <h4 class="white--text">Modificar</h4>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      dialogAgregarObservacion: false,
      dialogModificarObservacion: false,
      dialogEliminarObservacion: false,
      alertError: false,
      textoError: '',
      alertAcept: false,
      textoAcept: '',
      delay: 4000,
      mostrar: false,
      cargando: false,
      validacionObservaciones: false,
      validacionObservacionesFalse: true,
      observaciones: [],
      auxObservaciones: [],
      series: [0, 0, 0, 0],
      seriesaux: [0, 0, 0, 0],
      chartOptions: {
        chart: {
          type: 'donut',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        colors: ['#4ECDC4', '#FF6B6B', '#1A535C', '#2196F3'],
        labels: ['Positiva', 'Negativa', 'Informativa', 'Otro'],
      },
      // store
      observacion: {
        titulo: '',
        descripcion: '',
      },
      eliminarObservacion: {
        titulo: '',
        descripcion: '',
      },
      modificarObservacion: {
        titulo: '',
        descripcion: '',
      },

      dialogAEditarEstudiante: false,

      reglasNumeros: [(v) => !!v || 'Requerido', (v) => /^[0-9]+$/.test(v) || 'Solo numeros'],
      reglasNota: [
        (v) => !!v || 'Requerido',
        (v) => /^[0-9]+$/.test(v) || 'Solo numeros',
        (v) => (v >= 50 && v <= 70) || 'Nota superior a 50 y menor a 70 (incluyendolos)',
      ],
      form_EditarEstudianteValido: true,
      form_añadirObservacionValido: true,
      form_solicitarEstudianteValido: true,

      tipos: ['Positiva', 'Negativa', 'Informativa', 'Otro'],
      enrutamiento: null,
      counter: 0,
      reglas_matricula: [
        (value) => !!value || 'Requerido',
        (value) => /^[0-9]+$/.test(value) || 'Matrícula solo debe incluir números',
        (value) => /^[0-9]{10}$/.test(value) || 'La matrícula debe compuesta de 10 números',
      ],
      reglas_rut: [
        (value) => !!value || 'Requerido',
        (value) => /^[0-9]+$/.test(value) || 'El rut debe estar compuesto solo por números',
        (value) => /^[0-9]{7,8}$/.test(value) || 'El rut debe contener entre 7 y 8 dígitos',
      ],
      reglas_Nombre: [
        (value) => !!value || 'Requerido',
        (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/.test(v) || 'Nombre no Válido.',
        (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{3,40}$/.test(v) || 'Largo del Nombre no Válido',
      ],
      reglas_Descripcion: [
        (value) => !!value || 'Requerido',
        (v) => /^\s.{1,500}$/.test(v) || 'Largo del Nombre no Válido',
      ],
      regla_Email: [
        (value) => !!value || 'Requerido',
        (v) => /.+@utalca\.cl/.test(v) || /.+@alumnos\.utalca\.cl/.test(v) || 'Correo no Válido',
      ],
      regla_Contraseña: [
        (value) => !!value || 'Requerido',
        (v) => /^[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/.test(v) || 'Contraseña muy corta',
      ],
      regla_anio: [
        (value) => !!value || 'Requerido',
        (value) => /^[0-9]+$/.test(value) || 'El año debe estar compuesto solo por numeros',
        (value) => value <= new Date().getFullYear() || 'El año no debe ser mayor al actual',
        (value) => value >= 1981 || 'El año no debe ser menor a 1981',
      ],
      regla_categoria: [(value) => !!value || 'Requerido'],
    };
  },
  computed: {
    ...mapState(['perfilEstudiante', 'usuario', 'admin', 'secretariaEscuela', 'profesor']),

    target() {
      return '#hola';
    },
    options() {
      return {
        duration: 300,
        offset: 23,
        easing: 'linear',
      };
    },
  },

  beforeMount() {
    this.obtenerObservaciones();
  },

  methods: {
    volver() {
      const auxruta = this.enrutamiento.split('');

      if (auxruta[0] === 1 || auxruta[0] === 2) {
        if (this.$store.state.usuario.usuario.rol == 'admin') {
          this.$router.push({ path: `/administrador/semestres/${this.enrutamiento}` });
        } else {
          this.$router.push({ path: `/secretariaEscuela/semestres/${this.enrutamiento}` });
        }
      } else if (this.$store.state.usuario.usuario.rol === 'admin') {
        this.$router.push({ path: `/administrador/${this.enrutamiento}` });
      } else if (this.$store.state.usuario.usuario.rol === 'secretaria de escuela') {
        this.$router.push({ path: `/secretariaEscuela/${this.enrutamiento}` });
      } else if (this.$store.state.usuario.usuario.rol === 'profesor') {
        this.$router.push({ path: `/profesor/${this.enrutamiento}` });
      }
    },
    obtenerObservaciones() {
      let idUsuario = this.$store.state.usuario.id;
      if(idUsuario == null){
        console.log("entre");
        idUsuario=1;
      }
      let cursoId = this.$route.params.id;
      const url = this.$store.state.rutaDinamica +"profesor/"+ idUsuario+"/curso/" +cursoId+"/bitacora/1/observaciones";
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
                chart: { type: 'donut' },
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: { enabled: true, delay: 150 },
                  dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                  },
                },
                colors: ['#4ECDC4', '#FF6B6B', '#1A535C', '#2196F3'],
                labels: ['Positiva', 'Negativa', 'Informativa', 'Otro'],
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
          console.log('error');
        });
    },
    resetAgregarObservacion() {
      this.dialogAgregarObservacion = false;
      this.observacion.titulo = '';
      this.observacion.descripcion = '';
    },
    agregarObservacion() {
      let idUsuario = this.$store.state.usuario.id;
      if(idUsuario == null){
        console.log("entre");
        idUsuario=1;
      }
      let cursoId = this.$route.params.id;
      const url = this.$store.state.rutaDinamica +"profesor/"+ idUsuario+"/curso/" +cursoId+"/bitacora/1/observacion";
      const request = {
        titulo: this.observacion.titulo,
        descripcion: this.observacion.descripcion,
      };
      console.log("agregar")
      axios.post(url, request, this.$store.state.config).then((result) => {
        this.resetAgregarObservacion();
        console.log(result.data);
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
      });
    },
    resetEliminarObservacion() {
      this.dialogEliminarObservacion = false;
      this.eliminarObservacion.id = '';
      this.eliminarObservacion.id = '';
      this.eliminarObservacion.fecha = '';
      this.eliminarObservacion.descripcion = '';
    },
    EliminarObservacion() {
      let idUsuario = this.$store.state.usuario.id;
      if(idUsuario == null){
        console.log("entre");
        idUsuario=1;
      }
      let cursoId = this.$route.params.id;
      const url = this.$store.state.rutaDinamica +"profesor/"+ idUsuario+"/curso/" +cursoId+"/bitacora/1/observacion/"+this.eliminarObservacion.id;
      axios
        .delete(url, this.$store.state.config)
        .then((result) => {
          // this.alertAcept = true;
          // this.textoAcept = 'Se ha eliminado correctamente la observación.';
          this.resetEliminarObservacion();
          this.obtenerObservaciones(); // crea un metodo para la eliminacion
        })
        .catch((error) => {
          // if (error.message == 'Network Error') {
          //   // console.log(error)
          //   this.alertError = true;
          //   this.textoError = 'Error al eliminar la observación, inténtelo más tarde.';
          //   this.resetEliminarObservacion();
          // } else if (error.response.data.success == false) {
          //   // console.log(error.response.data.code +' '+ error.response.data.message);
          //   // console.log(error.response.data);
          //   this.textoError = error.response.data.message;
          //   this.alertError = true;
          //   this.resetEliminarObservacion();
          // } else {
          //   // console.log(error)
          //   this.alertError = true;
          //   this.textoError = 'Error al eliminar la observación, inténtelo más tarde.';
          //   this.resetEliminarObservacion();
          // }
        });
    },
    cargarDatosEliminarObservacion(observacion) {
      this.dialogEliminarObservacion = true;
      this.eliminarObservacion = {
        id: '',
        titulo: '',
        descripcion: '',
      };
      this.eliminarObservacion.id = observacion.id;
      this.eliminarObservacion.titulo = observacion.titulo;
      this.eliminarObservacion.fecha = observacion.fecha;
      this.eliminarObservacion.descripcion = observacion.descripcion;
    },
    updateObservacion() {
      let idUsuario = this.$store.state.usuario.id;
      if(idUsuario == null){
        console.log("entre");
        idUsuario=1;
      }
      let cursoId = this.$route.params.id;
      const url = this.$store.state.rutaDinamica +"profesor/"+ idUsuario+"/curso/" +cursoId+"/bitacora/1/observacion/"+this.modificarObservacion.id;
      const request = {
        titulo: this.modificarObservacion.titulo,
        descripcion: this.modificarObservacion.descripcion,
      };
      axios
        .put(url, request, this.$store.state.config)
        .then((result) => {
          // console.log(result);
          // console.log(result.data);
          this.resetModificarObservacion();
          this.obtenerObservaciones(); // ver como actualizar la app sin  llamar a la bd
        })
        .catch((error) => {
          // if (error.message == 'Network Error') {
          //   // console.log(error)
          //   this.alertError = true;
          //   this.textoError = 'Error al modificar la observación, inténtelo más tarde.';
          //   this.resetModificarObservacion();
          // } else if (error.response.data.success == false) {
          //   // console.log(error.response.data.code +' '+ error.response.data.message);
          //   // console.log(error.response.data);
          //   this.textoError = error.response.data.message;
          //   this.alertError = true;
          //   this.resetModificarObservacion();
          // } else {
          //   // console.log(error)
          //   this.alertError = true;
          //   this.textoError = 'Error al modificar la observación, inténtelo más tarde.';
          //   this.resetModificarObservacion();
          // }
        });
    },
    cargarDatosModificarObservacion(observacion) {
      this.dialogModificarObservacion = true;
      this.modificarObservacion = { id: '', titulo: '', descripcion: '' };
      this.modificarObservacion.id = observacion.id;
      this.modificarObservacion.titulo = observacion.titulo;
      this.modificarObservacion.fecha = observacion.fecha;
      this.modificarObservacion.descripcion = observacion.descripcion;
    },
    resetModificarObservacion() {
      this.dialogModificarObservacion = false;
      this.modificarObservacion.id = '';
      this.modificarObservacion.titulo = '';
      this.modificarObservacion.fecha = '';
      this.modificarObservacion.descripcion = '';
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
