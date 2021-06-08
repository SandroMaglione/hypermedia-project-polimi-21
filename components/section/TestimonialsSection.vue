<template>
  <div class="px-8 pt-16 pb-20 bg-white sm:px-12 lg:pt-24 lg:pb-28 lg:px-16">
    <base-section-title title="Testimonial" subtitle="Some test" />

    <!-- List of testimonials -->
    <div class="mt-10">
      <div
        v-for="v in [1, 2, 3]"
        :key="v"
        class="flex flex-col gap-8 lg:flex-row"
      >
        <div class="flex-1 p-20 border border-gray-200">
          <span>Profile</span>
        </div>
        <div class="flex-1 p-20 border border-gray-200">
          <h2>Review title</h2>
          <span>Some review</span>
        </div>
      </div>
    </div>
  </div>
</template>
