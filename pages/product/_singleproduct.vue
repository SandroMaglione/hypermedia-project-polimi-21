<template>
  <div>
    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Navigation links -->
      <base-orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />

      <!-- Single product general information -->
      <div class="pt-10 mt-6 mb-10 border-t border-gray-300">
        <div class="flex items-center mb-6">
          <div class="flex-1">
            <span
              class="px-8 py-2 font-bold text-gray-800 border border-gray-400 rounded-md shadow  bg-gray-50"
              >Features</span
            >
          </div>
          <div class="flex-1 text-right">
            <span
              class="px-8 py-2 font-bold text-gray-800 border border-gray-400 rounded-md shadow  bg-gray-50"
              >More info</span
            >
          </div>
        </div>
        <div
          :style="{ backgroundImage: `url(${singleProduct.image_url})` }"
          class="relative flex items-center justify-center bg-gray-300 border border-gray-400 rounded-lg shadow-xl  h-60"
        >
          <div
            class="absolute inset-0 bg-indigo-900 rounded-lg opacity-75"
          ></div>
          <h1 class="z-50 text-6xl font-black text-white">
            {{ singleProduct.name }}
          </h1>
        </div>
      </div>

      <!-- Extra information -->
      <div class="mb-20">
        <!-- Product description -->
        <base-section-title
          title="Product details"
          :subtitle="singleProduct.description"
        />
      </div>

      <!-- Product pricing -->
      <div>
        <base-section-title
          title="Product pricing"
          subtitle="Different prices available for the product"
        />
        <div class="flex flex-col items-end gap-10 mt-12 lg:flex-row">
          <div class="flex-1 w-full lg:w-auto">
            <div class="py-20 text-center bg-gray-300 h-60">
              <span class="text-3xl font-bold tracking-widest text-gray-900"
                >Pricing 1</span
              >
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div
              class="py-24 text-center bg-gray-300 border border-gray-400 shadow-xl  h-72"
            >
              <span class="text-5xl font-bold tracking-widest text-gray-900"
                >Pricing 2</span
              >
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div class="py-20 text-center bg-gray-300 h-60">
              <span class="text-3xl font-bold tracking-widest text-gray-900"
                >Pricing 3</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    // Retrieve information about a single product (by id)
    const myProductId = route.params.singleproduct
    const { data: product } = await $supabase
      .from('product')
      .select()
      .eq('id', myProductId)
      .single()
    return { singleProduct: product }
  },
  data() {
    return {
      singleProduct: {},
    }
  },
  // SEO metadata
  head() {
    return {
      title: this.headTitle,
      meta: [
        {
          hid: this.headHid,
          name: this.headName,
          content: this.headContent,
        },
      ],
    }
  },
  // SEO metadata computed from product information
  computed: {
    headTitle() {
      return this.singleProduct.name + ' - The Company'
    },
    headHid() {
      return 'product ' + this.singleProduct.name
    },
    headName() {
      return 'The Company ' + this.singleProduct.name
    },
    headContent() {
      return (
        'View all the details about the ' +
        this.singleProduct.name +
        ' product offered by The Company'
      )
    },
  },
}
</script>
