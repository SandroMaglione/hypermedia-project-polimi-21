<template>
  <div>
    <header-menu />
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />
      <div class="my-10">
        <div class="flex">
          <div
            :style="{ backgroundImage: `url(${singleMember.image_url})` }"
            class="
              bg-cover
              h-60
              w-60
              bg-gray-300
              border border-gray-400
              rounded-lg
              shadow-lg
            "
          ></div>
          <div class="p-10">
            <h2 class="font-bold text-5xl tracking-wider">
              {{ singleMember.name + ' ' + singleMember.surname }}
            </h2>
            <p class="font-medium text-lg">{{ singleMember.role }}</p>
            <p class="font-light text-md">{{ singleMember.quote }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10">
        <div>
          <section-title title="Bio" :subtitle="singleMember.bio" />
        </div>
        <div>
          <section-title title="Education" :subtitle="singleMember.education" />
        </div>
        <div>
          <section-title title="Work" :subtitle="singleMember.work" />
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import FeatureSection from '~/components/FeatureSection.vue'
import HeaderMenu from '~/components/HeaderMenu.vue'
import OrientationInfo from '~/components/OrientationInfo.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: { SectionTitle, HeaderMenu, OrientationInfo, FeatureSection },
  data() {
    return {
      singleMember: {},
    }
  },
  beforeMount() {
    const myMemberId = this.$route.params.singlemember
    this.getSingleMember(myMemberId)
  },

  methods: {
    async getSingleMember(myMemberId) {
      const { data: member, error } = await this.$supabase
        .from('member')
        .select('*')
        .eq('id', myMemberId)
        .single()
      this.singleMember = member
    },
  },
}
</script>

<style></style>
