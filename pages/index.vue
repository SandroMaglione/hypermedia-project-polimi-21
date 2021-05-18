<template>
  <div>
    <HeroSection />
    <GridSection
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      :posts="postsAreas"
    />
    <GridSection
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      :posts="postsTeams"
    />
    <GridSection
      title="Products"
      subtitle="Products of the company"
      buttontext="Learn more"
      :posts="postsProducts"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '../components/HeroSection'
import GridSection from '../components/GridSection'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Areas', href: '#' },
  { name: 'People', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Contact us', href: '#' },
]

export default Vue.extend({
  beforeMount() {
    this.getAreas()
    this.getTeams()
    this.getProducts()
  },

  methods: {
    async getAreas() {
      let { data: areas, error } = await this.$supabase.from('area').select('*')
      this.postsAreas = areas
    },

    async getTeams() {
      let { data: teams, error } = await this.$supabase.from('team').select('*')
      this.postsTeams = teams
    },

    async getProducts() {
      let { data: products, error } = await this.$supabase
        .from('product')
        .select('*')
      this.postsProducts = products
    },
  },

  components: {
    HeroSection,
    GridSection,
  },
  layout: 'page',
  data() {
    return {
      navigation,
      postsAreas: [],
      postsTeams: [],
      postsProducts: [],
    }
  },
})
</script>
