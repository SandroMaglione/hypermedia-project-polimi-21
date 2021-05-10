<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        md:flex
        md:items-center
        md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <!-- <component :is="item.icon" class="h-6 w-6" aria-hidden="true" /> -->
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
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
