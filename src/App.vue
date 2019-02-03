<template>
  <div id="app">
    <v-toolbar color="indigo" fixed app>
      <v-toolbar-items>
        <v-btn flat><v-icon>home</v-icon></v-btn>
        
      </v-toolbar-items>
      <v-toolbar-title>Hello</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>LOGIN</v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IncreButton from './components/IncreButton'
import DecreButton from './components/DecreButton'
export default {
  name: 'app',
  components: {
    IncreButton,
    DecreButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!!!'
    }
  },
  methods: {
    ttt () {
      console.log('test')
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>