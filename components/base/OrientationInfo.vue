<template>
  <!-- Section name on the left and links on the right -->
  <div class="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
    <div class="flex-1">
      <span class="text-xl font-bold tracking-widest font-gray-800">{{
        section
      }}</span>
    </div>
    <div class="flex gap-8">
      <a
        v-if="href1 != null"
        :href="href1"
        class="
          px-6
          py-1.5
          font-bold
          text-sm text-indigo-600
          bg-white
          border border-indigo-400
          rounded-md
          shadow
          hover:bg-indigo-600
          hover:text-white
          transition-all
          duration-150
          ease-in-out
        "
        >{{ link1 }}</a
      >
      <a
        v-if="href2 != null"
        :href="href2"
        class="
          px-6
          py-1.5
          font-bold
          text-sm text-indigo-600
          bg-white
          border border-indigo-400
          rounded-md
          shadow
          hover:bg-indigo-600
          hover:text-white
          transition-all
          duration-150
          ease-in-out
        "
        >{{ link2 }}</a
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
    href1: {
      type: String,
      required: false,
      default: null,
    },
    href2: {
      type: String,
      required: false,
      default: null,
    },
  },
})
</script>
