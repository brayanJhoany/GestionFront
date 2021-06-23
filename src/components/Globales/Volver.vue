<template>
  <div>
    <v-btn class="rounded-pill" elevation="0" color="white" @click="volver()">
      <i class="fas fa-arrow-left" style="color: #f17300"></i>
      <div class="ml-1" style="color: #f17300">Volver</div>
    </v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    volver() {
      this.$router.back();
    },
  },
};
</script>