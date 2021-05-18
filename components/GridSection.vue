<template>
  <div class="bg-white pt-16 pb-20 px-8 sm:px-12 lg:pt-24 lg:pb-28 lg:px-16">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <section-title :title="title" :subtitle="subtitle" />
      <div
        class="
          mt-6
          grid
          gap-16
          pt-12
          lg:grid-cols-3
          lg:gap-x-5 lg:gap-y-12
          border-t border-gray-200
        "
      >
        <div v-for="post in posts" :key="post.id">
          <div class="flex-shrink-0">
            <img
              class="
                h-48
                w-full
                object-cover
                shadow-xl
                border border-gray-300
                rounded
              "
              :src="post.image_url"
              :alt="post.image_url"
            />
          </div>
          <div class="flex-1 bg-white px-2 py-3 flex flex-col justify-between">
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
      <div class="flex items-center justify-center mt-12">
        <a
          :href="href"
          class="
            inline-flex
            items-center
            px-4
            py-2
            border border-gray-300
            shadow-sm
            text-base
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          {{ buttontext }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionTitle from './SectionTitle.vue'

export default Vue.extend({
  components: { SectionTitle },
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
    href: {
      type: String,
      required: true,
    },
    subhref: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    subhrefLink(id: string) {
      return this.subhref + '/' + id
    },
  },
})
</script>
