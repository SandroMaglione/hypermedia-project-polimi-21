<template>
  <div>
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <base-search-header
        title="Products"
        subtitle="Some products"
        :search-text="searchText"
        :update-search="updateSearch"
      />
      <div class="mt-10 flex gap-8 flex-col">
        <div
          v-for="product in this.searchProduct"
          :key="product.id"
          class="
            flex
            justify-center
            bg-indigo-900
            border border-gray-400
            rounded-lg
            shadow-lg
            flex-col
            lg:flex-row
          "
        >
          <div class="flex-1 h-72">
            <img
              class="h-72 w-full object-cover"
              :src="product.image_url"
              :alt="product.image_url"
            />
          </div>
          <div class="flex-1 p-10">
            <a :href="hrefLink(product.id)">
              <h2 class="font-black text-5xl text-white">{{ product.name }}</h2>
              <p class="font-medium text-2xl text-white">
                {{ product.description }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    const { data: products } = await $supabase.from('product').select()
    return { postsProducts: products }
  },
  data() {
    return {
      postsProducts: [],
      searchText: '',
    }
  },
  head() {
    return {
      title: 'Products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: {
    searchProduct() {
      return this.postsProducts.filter(
        (m) =>
          this.searchText === '' ||
          m.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
  },
  methods: {
    updateSearch(e) {
      this.searchText = e.target.value
    },
    hrefLink(id) {
      return 'product/' + id
    },
  },
}
</script>
