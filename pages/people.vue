<template>
  <div>
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <div class="flex items-center">
        <div class="flex-1">
          <section-title title="People" subtitle="Some people" />
        </div>
        <div class="flex-none">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search by name"
            class="px-5 py-1.5 border border-gray-200 tracking-wide"
            :value="searchText"
            @input="updateSearch"
          />
        </div>
      </div>
      <div class="mt-10 grid grid-cols-3 gap-4">
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
import SectionTitle from '~/components/SectionTitle.vue'

export default {
  components: { SectionTitle },
  data() {
    return {
      postsMembers: [],
      searchText: '',
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
  beforeMount() {
    this.getMembers()
  },
  methods: {
    updateSearch(e) {
      this.searchText = e.target.value
    },
    async getMembers() {
      // @ts-ignore
      const { data: members, error } = await this.$supabase
        .from('member')
        .select('*')
      this.postsMembers = members
    },
    hrefLink(id) {
      return 'member/' + id
    },
  },
}
</script>
