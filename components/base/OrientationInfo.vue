<template>
  <div class="flex flex-col gap-6 lg:flex-row lg:gap-10 items-center">
    <div class="flex-1">
      <span class="font-bold tracking-widest text-xl font-gray-800">{{
        section
      }}</span>
    </div>
    <div class="flex gap-8">
      <span
        class="
          font-bold
          px-8
          rounded-md
          py-2
          border border-gray-400
          bg-indigo-700
          text-white
          shadow
        "
        >{{ link1 }}</span
      >
      <span
        class="
          font-bold
          px-8
          rounded-md
          py-2
          border border-gray-400
          bg-indigo-700
          text-white
          shadow
        "
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
