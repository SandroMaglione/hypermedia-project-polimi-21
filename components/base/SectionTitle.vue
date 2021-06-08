<template>
  <!-- Section title and subtitle -->
  <div>
    <h2
      class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p class="mt-1 text-xl text-gray-600 sm:mt-2">
      {{ subtitle }}
    </p>
    <a
      v-if="link != null"
      :href="link.href"
      class="
        inline-flex
        mt-3
        items-center
        px-4
        py-1.5
        text-sm
        font-bold
        text-indigo-600
        bg-white
        border border-gray-300
        rounded-md
        shadow-sm
        hover:bg-indigo-600
        hover:text-white
        transition-all
        duration-150
        ease-in-out
        focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      "
    >
      {{ link.label }}
    </a>
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
  },
})
</script>
