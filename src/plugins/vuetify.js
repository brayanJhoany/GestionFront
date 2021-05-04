import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1A535C",
        secondary: "#4ECDC4",
        fondo: "#F7FFF7",
        accent: "#FFE66D",
        error: "#FFC107",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FF6B6B"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
