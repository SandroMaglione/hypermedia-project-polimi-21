<template>
  <div>
    <header-menu />
    <Nuxt />
    <footer-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderMenu from '../components/HeaderMenu'
import FooterSection from '../components/FooterSection'

export default Vue.extend({
  components: {
    HeaderMenu,
    FooterSection,
  },
})
</script>
