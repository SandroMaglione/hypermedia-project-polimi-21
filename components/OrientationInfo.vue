<template>
  <div class="flex gap-10">
    <div class="flex-1">
      <span>{{ section }}</span>
    </div>
    <div class="flex gap-8">
      <span>{{ link1 }}</span>
      <span>{{ link2 }}</span>
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
