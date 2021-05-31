<template>
  <div class="fixed bottom-4 right-4 flex items-end space-x-3">
    <div v-if="isOpen" class="rounded-md h-72 p-3 flex flex-col">
      <div
        id="chat-window"
        class="
          flex-1
          border border-indigo-500
          p-3
          shadow
          rounded-t-md
          bg-gray-50
        "
      >
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="flex-none">
        <input
          v-model="messageToSend"
          type="text"
          placeholder="Write here"
          class="border border-indigo-500 text-lg rounded-b-md px-3 py-1.5"
          @keypress.enter="sendMessage"
        />
      </div>
    </div>
    <div
      class="
        h-16
        w-16
        shadow
        bg-white
        rounded-full
        p-4
        border border-indigo-600
        hover:cursor-pointer
      "
      @click="isOpen = !isOpen"
    >
      <img src="https://img.icons8.com/ios-filled/452/chat--v1.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: true,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
  },
}
</script>
