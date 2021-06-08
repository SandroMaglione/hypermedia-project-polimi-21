<template>
  <div>
    <!-- Homepage hero section presenting the company -->
    <section-hero-section />
    <!-- List of areas -->
    <section-grid-section
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      href="/areas"
      subhref="/area"
      :posts="postsAreas"
    />
    <!-- List of people -->
    <section-grid-section
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      href="/people"
      subhref="/member"
      :posts="postsTeams"
    />
    <!-- List of products -->
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
    // Retrieve all `area`, `team`, and `product` from database in the server (asyncData)
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
  // SEO metadata
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
