<template>
  <div class="Home">
    <AppBarGlobal />
    <Navegacion />
    <router-view></router-view>
    <!-- <FooterGlobal /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import Navegacion from '../components/Globales/Navegacion';
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
