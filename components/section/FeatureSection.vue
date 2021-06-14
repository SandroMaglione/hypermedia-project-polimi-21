<template>
  <!-- Image on the left and title with description on the right -->
  <div>
    <div v-if="left">
      <div class="relative bg-gray-50">
        <div class="bg-blue-700 md:absolute md:left-0 md:h-full md:w-1/2">
          <img class="object-cover w-full h-full" :src="image_url" alt="" />
        </div>
        <div
          class="
            relative
            px-4
            py-12
            mx-auto
            max-w-7xl
            sm:px-6
            lg:px-20
            lg:py-28
          "
        >
          <div class="md:ml-auto md:w-1/2 md:pl-20">
            <p
              class="
                mt-2
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-900
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
    </div>
    <div v-else>
      <div class="relative bg-gray-50">
        <div
          class="
            relative
            px-4
            py-12
            mx-auto
            max-w-7xl
            sm:px-6
            lg:px-20
            lg:py-28
          "
        >
          <div class="md:mr-auto md:w-1/2 md:pr-20">
            <p
              class="
                mt-2
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-900
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

        <div class="bg-blue-700 md:absolute md:right-0 md:h-full md:w-1/2">
          <img class="object-cover w-full h-full" :src="image_url" alt="" />
        </div>
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
    image_url: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
