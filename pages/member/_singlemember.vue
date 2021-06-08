<template>
  <div>
    <layout-header-menu current="People" />

    <div class="px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <!-- Navigation links -->
      <base-orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />

      <!-- Single member general information -->
      <div class="my-10">
        <div class="flex flex-col lg:flex-row">
          <div
            :style="{ backgroundImage: `url(${singleMember.image_url})` }"
            class="w-full bg-gray-300 bg-cover border border-gray-400 rounded-lg shadow-lg  h-60 lg:w-60"
          ></div>
          <div class="pt-8 lg:p-10">
            <h2 class="text-5xl font-bold tracking-wider">
              {{ singleMember.name + ' ' + singleMember.surname }}
            </h2>
            <p class="text-lg font-medium">{{ singleMember.role }}</p>
            <p class="font-light text-md">{{ singleMember.quote }}</p>
          </div>
        </div>
      </div>

      <!-- Extra information -->
      <div class="flex flex-col gap-10">
        <!-- Bio -->
        <div>
          <base-section-title title="Bio" :subtitle="singleMember.bio" />
        </div>

        <!-- Education -->
        <div>
          <base-section-title
            title="Education"
            :subtitle="singleMember.education"
          />
        </div>

        <!-- Work -->
        <div>
          <base-section-title title="Work" :subtitle="singleMember.work" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $supabase }) {
    // Retrieve information about a single member by id
    const myMemberId = route.params.singlemember
    const { data: member } = await $supabase
      .from('member')
      .select()
      .eq('id', myMemberId)
      .single()
    return { singleMember: member }
  },
  data() {
    return {
      singleMember: {},
    }
  },
  // SEO metadata
  head() {
    return {
      title: this.headTitle,
      meta: [
        {
          hid: this.headHid,
          name: this.headName,
          content: this.headContent,
        },
      ],
    }
  },
  // SEO metadata computed from member information
  computed: {
    headTitle() {
      return this.singleMember.name + ' - The Company'
    },
    headHid() {
      return 'member ' + this.singleMember.name
    },
    headName() {
      return 'The Company ' + this.singleMember.name
    },
    headContent() {
      return (
        'View all the details about ' +
        this.singleMember.name +
        ' working at The Company'
      )
    },
  },
}
</script>
