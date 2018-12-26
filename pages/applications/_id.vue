<template>
  <section class="container">
    <div class="job-posting">
      <div class="title">
        {{ jobPosting.name }}
      </div>
      <div class="job-posting-main-card">
        <div class="imagebox">
          <img :src="jobPosting.imageUrl" />
        </div>
        <div class="point">
          求人のポイント
        </div>
        <div class="pr">
          {{ jobPosting.pr }}
        </div>
      </div>
      <div class="job-posting-sub-card">
        <div class="label">
          未経験歓迎の求人です
        </div>
        <div class="cells">
          <div class="cell">
            <span class="salary">{{ jobPosting.salary.min }}</span>
            <span class="unit">万円 ~</span>
            <span class="salary">{{ jobPosting.salary.max }}</span>
            <span class="unit">万円</span>
          </div>
          <div class="cell">
            正社員
          </div>
          <div class="cell">
            東京都
          </div>
        </div>
      </div>
    </div>
    <div class="messages">
      <div
        v-if="currentUser"
        v-for="message in applicationsMessages()"
        :key="message.id">
        <message-left
          v-if="message.user.uid === currentUser.uid"
          :message="message" />
        <message-right
          v-else
          :message="message" />
      </div>
      <div id="scrollMark"></div>
    </div>
    <div class="bottom-buttons">
      <textarea rows="3" v-model="body" />
      <button
        @click="submit"
        type="submit">送信</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MessageRight from '~/components/MessageRight'
import MessageLeft from '~/components/MessageLeft'

export default {
  data() {
    return {
      body: null
    }
  },
  components: {
    MessageRight,
    MessageLeft
  },
  computed: {
    application() {
      return this.applications.find(application => application.id === this.$route.params.id)
    },
    jobPosting() {
      return this.application.jobPosting
    },
    ...mapGetters('job_posting', ['jobPostings']),
    ...mapGetters('application', ['applications']),
    ...mapGetters('message', ['messages']),
    ...mapGetters('user', ['currentUser']),
  },
  methods: {
    applicationsMessages() {
      return this.messages.filter(message => message.application.id === this.$route.params.id)
    },
    async submit() {
      if (this.body.trim().length <= 0) return
      this.$nuxt.$loading.start()

      const message = {
        application: { ...this.application },
        body: this.body,
        user: { ...this.currentUser },
        isRead: false,
      }
      await this.addMessage(message)
      this.$nuxt.$loading.finish()
      this.body = null
    },
    ...mapActions('job_posting', ['bindJobPosting']),
    ...mapActions('application', ['bindJApplication', 'addApplication']),
    ...mapActions('message', ['bindMessage', 'addMessage']),
  },
  created() {
    this.bindJobPosting()
    this.bindJApplication()
    this.bindMessage()
  },
  watch: {
    messages(newVal, oldVal) {
      if (newVal.length === oldVal.length) return
      this.$scrollTo('#scrollMark', 700)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/common';

.container {
  padding-top: 16px;
  min-height: 100vh;
  .job-posting {
    padding: 8px;
    padding-bottom: 48px;
    background: white;
    .title {
      font-size: $sizeMd;
      font-weight: bold;
      border-bottom: 1px solid $grayBorderColor;
      padding-bottom: 8px;
      margin-bottom: 8px;
    }
    .job-posting-main-card {
      border-radius: 2.5px;
      border: 1px solid $grayBorderColor;
      margin-bottom: 12px;
      .imagebox {
        width: 100%;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .point {
        display: inline-block;
        padding: 4px 6px;
        border: 1px solid $mainColor;
        border-radius: 2.5px;
        color: $mainColor;
        font-size: $sizeXs;
        font-weight: bold;
        margin: 8px;
      }
      .pr {
        font-size: $sizeSm;
        line-height: $sizeSm * 1.6;
        font-weight: bold;
        padding: 8px;
        padding-top: 0;
        padding-bottom: 16px;
      }
    }
    .job-posting-sub-card {
      border-radius: 2.5px;
      border: 1px solid $grayBorderColor;
      .label {
        text-align: center;
        color: $mainColor;
        font-size: $sizeSm;
        font-weight: bold;
        padding: 8px;
        border-bottom: 1px solid $mainColor;
      }
      .cells {
        .cell {
          padding: 12px 8px;
          font-size: $sizeSm;
          &:nth-child(even) {
            background: $grayBgColor;
          }
        }
      }
    }
  }
  .messages {
    padding: 16px;
    padding-bottom: 96px;
  }
  .bottom-buttons {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(45,55,64,0.75);
    padding: 12px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    textarea {
      width: 75%;
      border-radius: 2.5px;
      outline: none;
      border: none;
      padding: 8px;
      font-size: $sizeSm;
    }
    button {
      width: 20%;
      background: $mainColor;
      padding: 8px 16px;
      border: none;
      border-radius: 2.5px;
      font-weight: bold;
      color: white;
      font-size: $sizeMd;
      outline: none;
      @include materialShadow();
    }
  }
}

</style>
