<template>
  <div class="px-8 pt-8 pb-20 bg-white sm:px-12 lg:pt-16 lg:pb-28 lg:px-16">
    <!-- Contact us form -->
    <div>
      <base-section-title
        title="Contact us"
        subtitle="Use the online form to send us your message"
      />
      <div
        class="flex flex-col p-10 mt-8 space-y-8 border border-gray-200 rounded-md shadow-md "
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
            class="w-full py-3 text-lg font-black tracking-tight text-center text-indigo-800 transition-all duration-150 ease-in-out border-2 border-indigo-700  rounded-2xl hover:bg-indigo-600 hover:text-white"
          >
            Send message
          </button>
        </div>
      </div>
    </div>

    <!-- Contact information -->
    <div class="mt-16">
      <base-section-title
        title="Company information"
        subtitle="Here you can find all the contact information about the company"
      />
      <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col p-6 space-y-1 border border-gray-100 shadow">
          <span class="label">Email</span>
          <p class="text-2xl font-light">ouremail@company.info.com</p>
        </div>
        <div class="flex flex-col p-6 space-y-1 border border-gray-100 shadow">
          <span class="label">Address</span>
          <p class="text-2xl font-light">Via Roma, 41, Milano</p>
        </div>
        <div class="flex flex-col p-6 space-y-1 border border-gray-100 shadow">
          <span class="label">CEO</span>
          <p class="text-2xl font-light">Daniel Johnson</p>
        </div>
        <div class="flex flex-col p-6 space-y-1 border border-gray-100 shadow">
          <span class="label">Tel.</span>
          <p class="text-2xl font-light">335-1928922928</p>
        </div>
        <div class="flex flex-col p-6 space-y-1 border border-gray-100 shadow">
          <span class="label">Fax</span>
          <p class="text-2xl font-light">335-99827282</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // SEO metadata
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
