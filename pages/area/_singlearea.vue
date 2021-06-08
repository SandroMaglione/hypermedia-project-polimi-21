<template>
  <div>
    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Navigation links -->
      <base-orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />

      <!-- Single area general information -->
      <div class="pt-10 mt-6 mb-10 border-t border-gray-300">
        <div class="flex items-center mb-8">
          <div class="flex-1">
            <span
              class="px-8 py-2 font-bold text-gray-800 border border-gray-400 rounded-md shadow  bg-gray-50"
              >Researches</span
            >
          </div>
          <div class="flex-1 text-right">
            <span
              class="px-8 py-2 font-bold text-gray-800 border border-gray-400 rounded-md shadow  bg-gray-50"
              >Contacts</span
            >
          </div>
        </div>
        <div
          :style="{ backgroundImage: `url(${singleArea.image_url})` }"
          class="relative flex items-center justify-center mt-4 bg-gray-300 bg-cover border border-gray-400 rounded-lg shadow-xl  h-72"
        >
          <div
            class="absolute inset-0 bg-indigo-900 rounded-lg opacity-75"
          ></div>
          <h1 class="z-50 text-6xl font-black text-white">
            {{ singleArea.name }}
          </h1>
        </div>
      </div>

      <!-- Description of the area -->
      <section-feature-section
        title="Area description"
        :desc="singleArea.description"
      />

      <!-- More information -->
      <section-feature-section
        title="More information"
        :desc="singleArea.more_info"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    // Retrieve single area information by id
    const myAreaId = route.params.singlearea
    const { data: area } = await $supabase
      .from('area')
      .select()
      .eq('id', myAreaId)
      .single()
    return { singleArea: area }
  },
  data() {
    return {
      singleArea: {},
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'Single area',
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
