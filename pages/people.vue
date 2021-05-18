<template>
  <div>
    <header-menu />
    <div class="p-8">
      <section-title title="People" subtitle="Some people" />
      <div class="mt-10 grid grid-cols-3 gap-4">
        <div
          v-for="member in this.postsMembers"
          :key="member.id"
          class="flex flex-col bg-gray-50 border border-gray-400"
        >
          <div class="w-full h-48 bg-gray-300">
            <img
              class="h-48 w-full object-cover"
              :src="member.image_url"
              alt=""
            />
          </div>
          <div class="p-10">
            <h2>{{ member.name }}</h2>
            <span>{{ member.surname }}</span>
          </div>
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: { SectionTitle, HeaderMenu },
  beforeMount() {
    this.getMembers()
  },

  methods: {
    async getMembers() {
      let { data: members, error } = await this.$supabase
        .from('member')
        .select('*')
      this.postsMembers = members
    },
  },
  data() {
    return {
      postsMembers: [],
    }
  },
}
</script>

<style></style>
