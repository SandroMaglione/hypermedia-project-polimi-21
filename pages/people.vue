<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="People" subtitle="Some people" />
      <div class="mt-10 grid grid-cols-3 gap-4">
        <div
          v-for="v in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="v"
          class="flex flex-col bg-gray-50 border border-gray-400"
        >
          <div class="w-full h-48 bg-gray-300"></div>
          <div class="p-10">
            <h2>Area name</h2>
            <span>Area description</span>
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
}
</script>

<style></style>
