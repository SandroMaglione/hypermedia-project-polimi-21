<template>
  <div>
    <HeroSection />
    <GridSection
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      href="/areas"
      subhref="/area"
      :posts="postsAreas"
    />
    <GridSection
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      href="/people"
      subhref="/member"
      :posts="postsTeams"
    />
    <GridSection
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
  beforeMount() {
    this.getAreas()
    this.getTeams()
    this.getProducts()
  },

  methods: {
    async getAreas() {
      const { data: areas, error } = await this.$supabase
        .from('area')
        .select('*')
      this.postsAreas = areas
    },

    async getTeams() {
      const { data: teams, error } = await this.$supabase
        .from('team')
        .select('*')
      this.postsTeams = teams
    },

    async getProducts() {
      const { data: products, error } = await this.$supabase
        .from('product')
        .select('*')
      this.postsProducts = products
    },
  },
})
</script>
