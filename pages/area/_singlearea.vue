<template>
  <div>
    <header-menu />
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />
      <div class="mt-6 mb-10 pt-10 border-t border-gray-300">
        <div class="flex items-center mb-8">
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
              >Researches</span
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
              >Contacts</span
            >
          </div>
        </div>
        <div
          :style="{ backgroundImage: `url(${singleArea.image_url})` }"
          class="
            bg-cover
            mt-4
            flex
            items-center
            justify-center
            h-72
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
            {{ singleArea.name }}
          </h1>
        </div>
      </div>
      <feature-section
        title="Area description"
        :desc="singleArea.description"
      />
      <feature-section title="More information" :desc="singleArea.more_info" />
    </div>
    <footer-section />
  </div>
</template>

<script>
import FeatureSection from '~/components/FeatureSection.vue'
import HeaderMenu from '~/components/HeaderMenu.vue'
import OrientationInfo from '~/components/OrientationInfo.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: { SectionTitle, HeaderMenu, OrientationInfo, FeatureSection },
  data() {
    return {
      singleArea: {},
    }
  },
  beforeMount() {
    const myAreaId = this.$route.params.singlearea
    this.getSingleArea(myAreaId)
  },

  methods: {
    async getSingleArea(myAreaId) {
      const { data: area, error } = await this.$supabase
        .from('area')
        .select('*')
        .eq('id', myAreaId)
        .single()
      this.singleArea = area
    },
  },
}
</script>

<style></style>
