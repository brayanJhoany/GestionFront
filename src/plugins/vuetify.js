import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#054A91',
                secondary: '#3E7CB1',
                fondo: '#FFFFFF',
                accent: '#F17300',
                error: '#FFC107',
                info: '#DBE4EE',
                success: '#81A4CD',
                warning: '#FF6B6B'
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});
