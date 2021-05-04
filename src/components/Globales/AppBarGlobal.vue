<template>
  <div>
    <v-app-bar color="secondary" elevate-on-scroll :collapse="false">
      <!-- Logo Institucional -->
      <div class="d-flex align-center">
        <!--<v-img
          class="shrink mr-2 d-none d-sm-flex"
          src="@/assets/Globales/utalca.png"
          width="300"
        />
        <v-img
          class="shrink mr-2 d-flex d-sm-none"
          src="@/assets/Globales/utalca2.png"
          width="45"
        />-->
        <!-- Boton que llamará al panel lateral-->
        <v-btn class="ma-2" fab elevation="3" small dark color="white" @click="drawel">
          <v-icon color="primary" :class="icono == true ? 'd-flex' : 'd-none'"
            >fas fa-list-ul</v-icon
          >
          <v-icon color="primary" :class="icono == true ? 'd-none' : 'd-flex'"
            >fas fa-ellipsis-v</v-icon
          >
        </v-btn>
      </div>
        <div class="d-flex align-center ml-5" style="color: white;">
            <h3><strong>{{ $route.params.nombre }}</strong></h3>
        </div>
      <v-spacer></v-spacer>
        <v-btn
        class="ma-2 rounded-pill"
        outlined
        color="white"
        >
        <i class="fas fa-user"></i>
            <div class="ml-2" style="color: white;">
                Brayan escobar
            </div>
        </v-btn>
        
        
      <!-- Boton que abrira las notificaciones-->
      
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      icono: false,
      // Varibales para Alertas
      timeout: 4000,
      textoAlertas: '',
      alertaError: false,
      alertaExito: false,
      user: '',
      // Variables Dialog Contactar
      dialogContactar: false,
      keyContactar: 1,
      formContactar: true,
      cargando: false,
      // Variables para almacenar datos
      listaRoles: ['Administrador', 'Secretaría de Escuela'],
      listaAdmin: [],
      listaSecEscuela: [],
      listaAdminAux: [],
      listaSecEscuelaAux: [],
      datosContactar: [
        { rolDestinatario: '' },
        { idDestinatario: null },
        { motivo: '' },
        { descripcion: '' },
      ],
    };
  },
  beforeMount() {
    // this.obtenerUsuarios();
    this.user = 'Administrador';
  },
  methods: {
    drawel() {
      // console.log(this.$vuetify.breakpoint.name );
      if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') {
        this.$store.state.drawers.drawer = !this.$store.state.drawers.drawer;
        this.$store.state.drawers.miniVarianteAdm = false;
        // console.log(this.icono);
        this.icono = true;
      } else {
        this.$store.state.drawers.drawer = true;
        this.$store.state.drawers.miniVarianteAdm = !this.$store.state.drawers.miniVarianteAdm;
        this.$store.state.drawerProfesor = !this.$store.state.drawerProfesor;
        this.icono = this.$store.state.drawerProfesor;
      }
    },
  },
};
</script>
