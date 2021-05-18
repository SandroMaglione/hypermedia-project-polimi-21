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
          <span>{{ singleProduct.name }}</span>
        </div>
      </div>
      <div class="my-10">
        <h2>Product details description</h2>
        <span>Only message</span>
      </div>
      <div>
        <h2>Product pricing</h2>
        <div class="flex items-end gap-10">
          <div class="flex-1">
            <div class="h-60 bg-gray-300">
              <span>Pricing 1</span>
            </div>
          </div>
          <div class="flex-1">
            <div class="h-72 border border-gray-400 bg-gray-300">
              <span>Pricing 2</span>
            </div>
          </div>
          <div class="flex-1">
            <div class="h-60 bg-gray-300">
              <span>Pricing 3</span>
            </div>
          </div>
        </div>
      </div>
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
    const myProductId = this.$route.params.singleproduct
    this.getSingleProduct(myProductId)
  },

  methods: {
    async getSingleProduct(myProductId) {
      let { data: product, error } = await this.$supabase
        .from('product')
        .select('*')
        .eq('id', myProductId)
        .single()
      this.singleProduct = product
    },
  },
  data() {
    return {
      singleProduct: {},
    }
  },
}
</script>

<style></style>
