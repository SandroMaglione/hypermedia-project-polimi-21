<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50">
    <div class="bg-blue-700 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
        alt=""
      />
    </div>
    <div
      class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-20 lg:py-28"
    >
      <div class="md:ml-auto md:w-1/2 md:pl-20">
        <p
          class="
            mt-2
            text-gray-900 text-3xl
            font-extrabold
            tracking-tight
            sm:text-4xl
          "
        >
          {{ title }}
        </p>
        <p class="mt-3 text-lg text-gray-800">
          {{ desc }}
        </p>
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
    desc: {
      type: String,
      required: true,
    },
  },
})
</script>
