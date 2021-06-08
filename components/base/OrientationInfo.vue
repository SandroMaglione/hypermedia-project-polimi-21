<template>
  <!-- Section name on the left and links on the right -->
  <div class="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
    <div class="flex-1">
      <span class="text-xl font-bold tracking-widest font-gray-800">{{
        section
      }}</span>
    </div>
    <div class="flex gap-8">
      <span
        class="px-8 py-2 font-bold text-white bg-indigo-700 border border-gray-400 rounded-md shadow "
        >{{ link1 }}</span
      >
      <span
        class="px-8 py-2 font-bold text-white bg-indigo-700 border border-gray-400 rounded-md shadow "
        >{{ link2 }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    section: {
      type: String,
      required: true,
    },
    link1: {
      type: String,
      required: true,
    },
    link2: {
      type: String,
      required: true,
    },
  },
})
</script>
