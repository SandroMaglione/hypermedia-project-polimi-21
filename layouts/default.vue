<template>
  <div>
    <layout-header-menu />
    <Nuxt />
    <base-chat :chat-list="list" />
    <layout-footer-section />
  </div>
</template>

<script>
import MMCCMixin from '~/mixins/mmcc-mixin'

export default {
  mixins: [MMCCMixin],
}
</script>
