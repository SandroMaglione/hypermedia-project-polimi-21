<template>
  <div>
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <base-search-header
        title="People"
        subtitle="Some people"
        :search-text="searchText"
        :update-search="updateSearch"
      />
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="member in this.searchMember"
          :key="member.id"
          class="
            flex flex-col
            bg-indigo-900
            border border-gray-300
            rounded-lg
            shadow-lg
          "
        >
          <a :href="hrefLink(member.id)">
            <div class="w-full h-60 bg-gray-300">
              <img
                class="h-60 w-full object-cover rounded-t-lg"
                :src="member.image_url"
                alt=""
              />
            </div>
            <div class="px-6 py-5">
              <h2 class="font-bold text-xl text-white tracking-wider">
                {{ member.name + ' ' + member.surname }}
              </h2>
              <p class="font-medium text-md text-white">{{ member.role }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    const { data: members } = await $supabase.from('member').select()
    return { postsMembers: members }
  },
  data() {
    return {
      postsMembers: [],
      searchText: '',
    }
  },
  head() {
    return {
      title: 'People',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: {
    searchMember() {
      return this.postsMembers.filter(
        (m) =>
          this.searchText === '' ||
          m.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          m.surname.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
  },
  methods: {
    updateSearch(e) {
      this.searchText = e.target.value
    },
    hrefLink(id) {
      return 'member/' + id
    },
  },
}
</script>
