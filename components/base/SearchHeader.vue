<template>
  <!-- Header with title, subtitle, and search input -->
  <div class="flex flex-col items-center space-y-6 lg:flex-row">
    <div class="flex-1 w-full text-left">
      <base-section-title :title="title" :subtitle="subtitle" />
    </div>
    <div class="flex-none w-full">
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search by name"
        class="
          px-5
          py-1.5
          border border-gray-200
          tracking-wide
          w-full
          lg:w-auto
        "
        :value="searchText"
        @input="updateSearch"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    searchText: {
      type: String,
      required: true,
    },
    updateSearch: {
      type: Function,
      required: true,
    },
  },
}
</script>
