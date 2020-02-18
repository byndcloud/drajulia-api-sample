import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6600CC'
      },
      dark: {
        primary: '#00A99D'
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'fa'
  }
})
