<template>
  <div>
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <base-orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />
      <div class="mt-6 mb-10 pt-10 border-t border-gray-300">
        <div class="flex items-center mb-6">
          <div class="flex-1">
            <span
              class="
                font-bold
                px-8
                rounded-md
                py-2
                border border-gray-400
                bg-gray-50
                text-gray-800
                shadow
              "
              >Features</span
            >
          </div>
          <div class="flex-1 text-right">
            <span
              class="
                font-bold
                px-8
                rounded-md
                py-2
                border border-gray-400
                bg-gray-50
                text-gray-800
                shadow
              "
              >More info</span
            >
          </div>
        </div>
        <div
          :style="{ backgroundImage: `url(${singleProduct.image_url})` }"
          class="
            flex
            items-center
            justify-center
            h-60
            bg-gray-300
            border border-gray-400
            relative
            rounded-lg
            shadow-xl
          "
        >
          <div
            class="absolute inset-0 bg-indigo-900 opacity-75 rounded-lg"
          ></div>
          <h1 class="z-50 font-black text-6xl text-white">
            {{ singleProduct.name }}
          </h1>
        </div>
      </div>
      <div class="mb-20">
        <base-section-title
          title="Product details"
          :subtitle="singleProduct.description"
        />
      </div>
      <div>
        <base-section-title
          title="Product pricing"
          subtitle="Different prices available for the product"
        />
        <div class="flex flex-col lg:flex-row items-end gap-10 mt-12">
          <div class="flex-1 w-full lg:w-auto">
            <div class="h-60 bg-gray-300 text-center py-20">
              <span class="font-bold text-3xl text-gray-900 tracking-widest"
                >Pricing 1</span
              >
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div
              class="
                h-72
                border border-gray-400
                shadow-xl
                bg-gray-300
                py-24
                text-center
              "
            >
              <span class="font-bold text-5xl text-gray-900 tracking-widest"
                >Pricing 2</span
              >
            </div>
          </div>
          <div class="flex-1 w-full lg:w-auto">
            <div class="h-60 bg-gray-300 text-center py-20">
              <span class="font-bold text-3xl text-gray-900 tracking-widest"
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
  head() {
    return {
      title: 'Single product',
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
