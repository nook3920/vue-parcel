<template>
  <v-btn @click.prevent="increment" color="#56b983">Add</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    incre () {
      console.log('dispatch incre')
      this.$store.dispatch('increment')
    },
    ...mapActions([
      'increment'
    ])
    
  }
}
</script>
