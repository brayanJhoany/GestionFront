<template>
  <div class="Administrador">
    <AppBarGlobal />
    <Navegacion />
    <router-view></router-view>
    <!-- <FooterGlobal /> -->
  </div>
</template>

<script>
import AppBarGlobal from "@/components/Globales/AppBarGlobal.vue";
// import FooterGlobal from "@/components/Globales/FooterGlobal.vue";
import Navegacion from "@/components/Globales/Navegacion.vue";
export default {
  components: {
    AppBarGlobal,
    // FooterGlobal,
    Navegacion,
  },
};
</script>
