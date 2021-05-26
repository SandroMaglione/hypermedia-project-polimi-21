<template>
  <div>
    <hero-section />
    <grid-section
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      href="/areas"
      subhref="/area"
      :posts="postsAreas"
    />
    <grid-section
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      href="/people"
      subhref="/member"
      :posts="postsTeams"
    />
    <grid-section
      title="Products"
      subtitle="Products of the company"
      buttontext="Learn more"
      href="/products"
      subhref="/product"
      :posts="postsProducts"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/section/HeroSection.vue'
import GridSection from '~/components/section/GridSection.vue'

export default Vue.extend({
  components: {
    HeroSection,
    GridSection,
  },
  data() {
    return {
      postsAreas: [],
      postsTeams: [],
      postsProducts: [],
    }
  },
  beforeMount() {
    this.getAreas()
    this.getTeams()
    this.getProducts()
  },

  methods: {
    async getAreas() {
      // @ts-ignore
      const { data: areas, error } = await this.$supabase
        .from('area')
        .select('*')
      this.postsAreas = areas
    },

    async getTeams() {
      // @ts-ignore
      const { data: teams, error } = await this.$supabase
        .from('team')
        .select('*')
      this.postsTeams = teams
    },

    async getProducts() {
      // @ts-ignore
      const { data: products, error } = await this.$supabase
        .from('product')
        .select('*')
      this.postsProducts = products
    },
  },
})
</script>
