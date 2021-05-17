<template>
  <div>
    <h2
      class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p class="mt-3 text-xl text-gray-500 sm:mt-4">
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
