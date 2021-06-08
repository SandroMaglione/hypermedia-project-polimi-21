<template>
  <footer class="bg-white">
    <div
      class="px-0 py-12 mx-auto  max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <!-- Footer information -->
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-base text-center text-gray-400">
          &copy; 2020 The Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

const navigation = [
  {
    name: 'Facebook',
    href: '#',
  },
  {
    name: 'Instagram',
    href: '#',
  },
  {
    name: 'Twitter',
    href: '#',
  },
  {
    name: 'GitHub',
    href: '#',
  },
  {
    name: 'Dribbble',
    href: '#',
  },
]

export default Vue.extend({
  data() {
    return {
      navigation,
    }
  },
})
</script>
