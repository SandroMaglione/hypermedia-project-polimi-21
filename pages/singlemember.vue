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
        <div class="flex items-center gap-4">
          <span>Left</span>
          <span>Right</span>
        </div>
        <div class="flex">
          <div class="h-60 w-60 bg-gray-300 border border-gray-400"></div>
          <div>
            <h2>Name and surname</h2>
            <span>Company name</span>
            <span>Personal quote</span>
          </div>
        </div>
      </div>
      <div>
        <section-title title="Bio" subtitle="Some bio" />
        <div class="mt-10">
          <span>Some bio</span>
        </div>
      </div>
      <div>
        <section-title title="Education" subtitle="Some bio" />
        <div class="mt-10">
          <span>Some bio</span>
        </div>
      </div>
      <div>
        <section-title title="Work" subtitle="Some bio" />
        <div class="mt-10">
          <span>Some bio</span>
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
}
</script>

<style></style>
