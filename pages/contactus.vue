<template>
  <div class="bg-white pt-8 pb-20 px-8 sm:px-12 lg:pt-16 lg:pb-28 lg:px-16">
    <div>
      <base-section-title
        title="Contact us"
        subtitle="Use the online form to send us your message"
      />
      <div
        class="
          p-10
          mt-8
          border border-gray-200
          rounded-md
          shadow-md
          flex flex-col
          space-y-8
        "
      >
        <div class="flex flex-col space-y-2">
          <label for="fullname" class="label">Full name</label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Insert full name"
            class="input"
            required
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="email" class="label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Insert email"
            class="input"
            required
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="message" class="label">Message</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            placeholder="Write here your message"
            class="input"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="
              border-2 border-indigo-700
              font-black
              w-full
              text-center
              py-3
              text-lg
              rounded-2xl
              text-indigo-800
              tracking-tight
              hover:bg-indigo-600
              hover:text-white
              transition-all
              duration-150
              ease-in-out
            "
          >
            Send message
          </button>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <base-section-title
        title="Company information"
        subtitle="Here you can find all the contact information about the company"
      />
      <div class="grid grid-cols-3 gap-8 mt-6">
        <div class="flex flex-col space-y-1 border border-gray-100 shadow p-6">
          <span class="label">Email</span>
          <p class="font-light text-2xl">ouremail@company.info.com</p>
        </div>
        <div class="flex flex-col space-y-1 border border-gray-100 shadow p-6">
          <span class="label">Address</span>
          <p class="font-light text-2xl">Via Roma, 41, Milano</p>
        </div>
        <div class="flex flex-col space-y-1 border border-gray-100 shadow p-6">
          <span class="label">CEO</span>
          <p class="font-light text-2xl">Daniel Johnson</p>
        </div>
        <div class="flex flex-col space-y-1 border border-gray-100 shadow p-6">
          <span class="label">Tel.</span>
          <p class="font-light text-2xl">335-1928922928</p>
        </div>
        <div class="flex flex-col space-y-1 border border-gray-100 shadow p-6">
          <span class="label">Fax</span>
          <p class="font-light text-2xl">335-99827282</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      postsAreas: [],
    }
  },
  head() {
    return {
      title: 'About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
})
</script>
