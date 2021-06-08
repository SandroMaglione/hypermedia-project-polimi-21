<template>
  <div class="px-4 pt-16 pb-20 bg-white sm:px-12 lg:pt-24 lg:pb-28 lg:px-16">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <base-section-title :title="title" :subtitle="subtitle" />
      <div
        class="grid gap-16 pt-12 mt-6 border-t border-gray-200  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <!-- Grid of elements to display -->
        <div v-for="post in posts" :key="post.id">
          <div class="flex-shrink-0">
            <img
              class="object-cover w-full h-48 border border-gray-300 rounded shadow-xl "
              :src="post.image_url"
              :alt="post.image_url"
            />
          </div>
          <div class="flex flex-col justify-between flex-1 px-2 py-3 bg-white">
            <div class="flex-1">
              <a :href="subhrefLink(post.id)" class="block">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.name }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="hasViewAll" class="flex items-center justify-center mt-12">
        <!-- Link to sub-page -->
        <a
          :href="href"
          class="inline-flex items-center px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ buttontext }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    buttontext: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: '#',
    },
    subhref: {
      type: String,
      required: false,
      default: '#',
    },
    hasViewAll: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    // Link to sub-page
    subhrefLink(id: string) {
      return this.subhref + '/' + id
    },
  },
})
</script>
