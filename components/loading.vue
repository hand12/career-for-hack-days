<template>
  <el-main v-loading.fullscreen.lock="loading" />
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  },
}
</script>

