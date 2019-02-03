import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from '../vuex/store'

Vue.use(Vuetify)
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});