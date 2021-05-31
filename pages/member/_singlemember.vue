<template>
  <div>
    <div class="bg-white pb-20 px-8 sm:px-12 lg:pt-10 lg:pb-28 lg:px-16">
      <base-orientation-info
        section="Area / Domotics"
        link1="Areas"
        link2="Managers"
      />
      <div class="my-10">
        <div class="flex flex-col lg:flex-row">
          <div
            :style="{ backgroundImage: `url(${singleMember.image_url})` }"
            class="
              bg-cover
              w-full
              h-60
              lg:w-60
              bg-gray-300
              border border-gray-400
              rounded-lg
              shadow-lg
            "
          ></div>
          <div class="pt-8 lg:p-10">
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
          <base-section-title title="Bio" :subtitle="singleMember.bio" />
        </div>
        <div>
          <base-section-title
            title="Education"
            :subtitle="singleMember.education"
          />
        </div>
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
  head() {
    return {
      title: 'Single member',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>
