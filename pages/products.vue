<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="Products" subtitle="Some products" />
      <div class="mt-10">
        <div
          v-for="product in this.postsProducts"
          :key="product.id"
          class="flex justify-center bg-gray-50 border border-gray-400"
        >
          <div class="flex-1 bg-gray-400 border border-gray-600 h-48">
            <img
              class="h-48 w-full object-cover"
              :src="product.image_url"
              alt=""
            />
          </div>
          <div class="flex-1 p-10">
            <h2>{{ product.name }}</h2>
            <span>{{ product.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: { SectionTitle, HeaderMenu },

  beforeMount() {
    this.getProducts()
  },

  methods: {
    async getProducts() {
      let { data: products, error } = await this.$supabase
        .from('product')
        .select('*')
      this.postsProducts = products
    },
  },
  data() {
    return {
      postsProducts: [],
    }
  },
}
</script>
