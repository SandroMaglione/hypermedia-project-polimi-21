<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="Areas" subtitle="Some areas" />
      <div class="mt-10">
        <div
          v-for="area in this.postsAreas"
          :key="area.id"
          class="
            flex
            items-center
            justify-center
            p-24
            bg-gray-50
            border border-gray-400
          "
        >
          <h2>{{ area.name }}</h2>
          <span>{{ area.description }}</span>
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
    this.getAreas()
  },

  methods: {
    async getAreas() {
      let { data: areas, error } = await this.$supabase.from('area').select('*')
      this.postsAreas = areas
    },
  },
  data() {
    return {
      postsAreas: [],
    }
  },
}
</script>
