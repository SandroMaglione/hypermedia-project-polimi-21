<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="Areas" subtitle="Some areas" />
      <div class="mt-10">
        <div
          v-for="v in [1, 2, 3]"
          :key="v"
          class="
            flex
            items-center
            justify-center
            p-24
            bg-gray-50
            border border-gray-400
          "
        >
          <h2>Area name</h2>
          <span>Area description</span>
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
