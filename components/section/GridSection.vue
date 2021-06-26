<template>
  <div
    class="
      px-4
      pt-16
      pb-20
      bg-white
      border border-blue-500
      shadow-md
      sm:px-12
      lg:pt-18
      lg:pb-20
      lg:px-16
    "
  >
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <base-section-title :title="title" :subtitle="subtitle" :link="link" />
      <div
        class="
          grid
          gap-16
          pt-12
          mt-6
          border-t border-gray-200
          lg:grid-cols-3
          lg:gap-x-5 lg:gap-y-12
        "
      >
        <!-- Grid of elements to display -->
        <div v-for="post in posts" :key="post.id">
          <!-- Link to website page or external website if 'externalLink' is true (projects section) -->
          <a
            :href="subhrefLink(externalLink ? post.website_url : post.id)"
            class="block"
          >
            <div
              class="
                flex-shrink-0
                transition-transform
                duration-150
                ease-in-out
                transform
                hover:scale-105
              "
            >
              <img
                class="
                  object-cover
                  w-full
                  h-48
                  border border-gray-300
                  rounded
                  shadow-xl
                "
                :src="post.image_url"
                :alt="post.image_url"
              />
            </div>
            <div
              class="flex flex-col justify-between flex-1 px-2 py-3 bg-white"
            >
              <div class="flex-1">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.name }}
                </p>
              </div>
            </div>
          </a>
        </div>
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
    link: {
      type: Object,
      required: false,
      default: null,
    },
    posts: {
      type: Array,
      required: true,
    },
    subhref: {
      type: String,
      required: false,
      default: '#',
    },
    externalLink: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  methods: {
    // Link to sub-page
    subhrefLink(idOrLink: string) {
      return this.externalLink ? idOrLink : this.subhref + '/' + idOrLink
    },
  },
})
</script>
