<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
        "
      >
        <div class="flex items-center">
          <div class="hidden ml-4 space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="
                text-base
                font-medium
                text-indigo-900
                hover:text-indigo-700
              "
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4"></div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Areas', href: '/areas' },
  { name: 'People', href: '/people' },
  { name: 'Products', href: '/products' },
  { name: 'About us', href: '/aboutus' },
  { name: 'Contact us', href: '#' },
]
export default Vue.extend({
  data() {
    return {
      navigation,
    }
  },
})
</script>
