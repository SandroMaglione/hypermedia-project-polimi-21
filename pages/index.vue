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

<script>
import HeroSection from '~/components/section/HeroSection.vue'
import GridSection from '~/components/section/GridSection.vue'

export default {
  components: {
    HeroSection,
    GridSection,
  },
  async asyncData({ $supabase }) {
    const { data: areas } = await $supabase.from('area').select()
    const { data: teams } = await $supabase.from('team').select()
    const { data: products } = await $supabase.from('product').select()
    return {
      postsAreas: areas,
      postsTeams: teams,
      postsProducts: products,
    }
  },
  data() {
    return {
      postsAreas: [],
      postsTeams: [],
      postsProducts: [],
    }
  },
}
</script>
