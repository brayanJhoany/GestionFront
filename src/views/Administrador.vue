<template>
  <div class="Administrador">
    <AppBarGlobal />
    <Navegacion />
    <router-view></router-view>
    <!-- <FooterGlobal /> -->
  </div>
</template>

<script>
import Navegacion from '@/components/Globales/Navegacion.vue';
import AppBarGlobal from '../components/Globales/AppBarGlobal';
// import FooterGlobal from "@/components/Globales/FooterGlobal.vue";

export default {
  components: {
    AppBarGlobal,
    // FooterGlobal,
    Navegacion,
  },
};
</script>
