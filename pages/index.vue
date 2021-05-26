<template>
  <div>
    <section-hero-section />
    <section-grid-section
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      href="/areas"
      subhref="/area"
      :posts="postsAreas"
    />
    <section-grid-section
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      href="/people"
      subhref="/member"
      :posts="postsTeams"
    />
    <section-grid-section
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
export default {
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
  head() {
    return {
      title: 'Welcome to our website',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>
