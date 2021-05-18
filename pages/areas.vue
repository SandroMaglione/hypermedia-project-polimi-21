<template>
  <div>
    <header-menu />
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <section-title title="Areas" subtitle="Some areas" />
      <div class="mt-10 flex flex-col gap-8">
        <div
          v-for="area in this.postsAreas"
          :key="area.id"
          :style="{ backgroundImage: `url(${area.image_url})` }"
          class="
            bg-cover
            flex
            items-center
            justify-center
            py-16
            bg-gray-50
            border border-gray-400
            shadow-lg
            rounded-lg
            relative
          "
        >
          <div
            class="absolute inset-0 bg-indigo-900 opacity-75 rounded-lg"
          ></div>
          <div class="z-50 text-center">
            <a :href="hrefLink(area.id)" class="hover:underline text-white">
              <h2 class="font-bold text-6xl text-white tracking-wider">
                {{ area.name }}
              </h2>
              <p class="font-medium text-2xl text-white">
                {{ area.description }}
              </p>
            </a>
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
  data() {
    return {
      postsAreas: [],
    }
  },

  beforeMount() {
    this.getAreas()
  },

  methods: {
    async getAreas() {
      const { data: areas, error } = await this.$supabase
        .from('area')
        .select('*')
      this.postsAreas = areas
    },
    hrefLink(id) {
      return 'area/' + id
    },
  },
}
</script>
