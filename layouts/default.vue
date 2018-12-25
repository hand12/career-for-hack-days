<template>
  <div>
    <div class="header">
      <div
        @click="segueToRoot"
        class="leftbox">
        <span class="tensyoku">転職</span>
        <span class="kaigi">会議</span>
      </div>
      <div class="rightbox">
        <span
          v-if="isSignedIn"
          class="applications-menu">
          応募一覧
        </span>
        <span
          v-if="isSignedIn"
          class="user-name">
          {{ currentUser.name }}
        </span>
        <span
          v-if="!isSignedIn"
          @click="googleLogin">
          facebookでログイン
        </span>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    googleLogin() {
      this.signIn()
    },
    segueToRoot() {
      this.$router.push({ name: "index" })
    },
    ...mapActions('user', ['watchSignedInState', 'signIn'])
  },
  computed: {
    ...mapGetters('user', ['isSignedIn', 'currentUser', 'loading'])
  },
  mounted() {
    this.watchSignedInState()
  },
  watch: {
    loading(val) {
      if (val) {
        this.$nuxt.$loading.start()
      } else {
        this.$nuxt.$loading.finish()
      }
    }
  }
}
</script>


<style lang="scss">
@import '../assets/css/common';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  background: $bgColor;
  color: $fontMainColor;
  max-width: 500px;
  border: 1px solid $borderColor;
}

input[type="text"], 
input[type="password"], 
textarea, 
select {
    outline: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 16px;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);


  display: flex;
  justify-content: space-between;
  align-items: center;
  @include box-shadow();
  .leftbox {
    font-size: 0;
    .tensyoku {
      font-size: $sizeMd;
      font-weight: bold;
    }
    .kaigi {
      font-size: $sizeMd;
      font-weight: normal;
      margin-right: 8px;
    }
  }
  .rightbox {
    .applications-menu {
      font-size: $sizeSm;
      color: $fontDarkGrayColor;
      margin-right: 12px;
    }
    .user-name {
      font-size: $sizeSm;
      color: $fontDarkGrayColor;
    }
  }
}

</style>
