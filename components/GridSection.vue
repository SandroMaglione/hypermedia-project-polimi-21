<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          {{ title }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ subtitle }}
        </p>
      </div>
      <div
        class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <div v-for="post in posts" :key="post.id">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              :src="post.image_url"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.name }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button
          type="button"
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
        </button>
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
  },
  data() {
    return {}
  },
})
</script>
