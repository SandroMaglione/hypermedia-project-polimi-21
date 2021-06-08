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
  },
})
</script>
