<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
          hidden
          lg:block
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
      </div>
      <div class="px-4 py-6 lg:hidden">
        <div class="flex justify-end w-full items-center">
          <div class="flex-1">
            <span class="font-black text-indigo-900 tracking-tight text-xl"
              >Company</span
            >
          </div>
          <div class="flex-none">
            <button type="button" @click="openMenu">
              <svg
                class="w-8 h-8 text-indigo-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          v-if="isOpen"
          class="
            py-4
            flex flex-col
            space-y-3
            text-center text-lg
            lg:text-base lg:text-left
            lg:flex-wrap
            justify-center
            lg:space-x-6
            lg:hidden
          "
        >
          <a
            v-for="link in navigation"
            :key="link.name"
            :href="link.href"
            class="text-base font-medium text-indigo-600 hover:text-indigo-800"
          >
            {{ link.name }}
          </a>
        </div>
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
  { name: 'Contact us', href: '/contactus' },
]
export default Vue.extend({
  data() {
    return {
      navigation,
      isOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen
    },
  },
})
</script>
