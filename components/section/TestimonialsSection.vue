<template>
  <div class="bg-white pt-16 pb-20 px-8 sm:px-12 lg:pt-24 lg:pb-28 lg:px-16">
    <section-title title="Testimonial" subtitle="Some test" />
    <div class="mt-10">
      <div v-for="v in [1, 2, 3]" :key="v" class="flex">
        <div class="flex-1 border border-gray-200 p-20">
          <span>Profile</span>
        </div>
        <div class="flex-1 border border-gray-200 p-20">
          <h2>Review title</h2>
          <span>Some review</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'
export default {
  components: { SectionTitle },
}
</script>
