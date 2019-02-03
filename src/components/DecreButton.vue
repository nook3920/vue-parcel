<template>
  <v-btn @click.prevent="decre" color="#56b983">DECRE</button>
</template>

<script>
export default {
  methods: {
    decre () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>
