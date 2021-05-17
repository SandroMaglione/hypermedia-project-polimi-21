<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="Products" subtitle="Some products" />
      <div class="mt-10">
        <div
          v-for="v in [1, 2, 3]"
          :key="v"
          class="flex justify-center bg-gray-50 border border-gray-400"
        >
          <div class="flex-1 bg-gray-400 border border-gray-600 h-48"></div>
          <div class="flex-1 p-10">
            <h2>Product name</h2>
            <span>Product description</span>
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
