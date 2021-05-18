<template>
  <div>
    <header-menu />
    <div class="p-8">
      <orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />
      <div class="my-10">
        <div class="flex items-center">
          <div class="flex-1">
            <span>Left</span>
          </div>
          <div class="flex-1 text-right">
            <span>Right</span>
          </div>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            h-60
            bg-gray-300
            border border-gray-400
          "
        >
          <span>{{ singleArea.name }}</span>
        </div>
      </div>
      <feature-section
        title="We are project driven"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis."
      />
      <feature-section
        title="We are project driven"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis."
      />
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
  beforeMount() {
    const myAreaId = this.$route.params.singlearea
    this.getSingleArea(myAreaId)
  },

  methods: {
    async getSingleArea(myAreaId) {
      let { data: area, error } = await this.$supabase
        .from('area')
        .select('*')
        .eq('id', myAreaId)
        .single()
      this.singleArea = area
    },
  },
  data() {
    return {
      singleArea: {},
    }
  },
}
</script>

<style></style>
