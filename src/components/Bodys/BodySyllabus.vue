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
                    >Syllabus</strong
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
      </v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Volver from "@/components/Globales/Volver.vue";

export default {
  components: {
    Volver,
  },
  name: "Syllabus",
  data() {
    return {};
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
