<template>
  <footer class="bg-white">
    <div
      class="px-0 py-12 mx-auto  max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <!-- Footer information -->
      <div class="flex items-center justify-between w-full mt-8 mr-20">
        <div>
          <p
            class="text-base text-center text-indigo-400 underline  hover:text-indigo-700"
          >
            <a href="#"> Privacy Policy </a>
          </p>
        </div>
        <div>
          <p class="text-base text-center text-gray-400">
            &copy; 2020 The Company<br />
            Inc. All rights reserved.
          </p>
        </div>
        <section-social-nav />
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
