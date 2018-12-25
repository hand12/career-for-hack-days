<template>
  <section class="container">
    <div class="applications">
      <div class="job-posting-card">
        <div class="label">
          応募一覧
        </div>
        <div class="cells">
          <application
            v-if="currentUser"
            v-for="application in currentUsersApplications()"
            :key="application.id"
            :application="application"
            :jobPosting="jobPosting(application.jobPosting.id)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import JobPosting from '~/components/JobPosting'
import Application from '~/components/Application'

export default {
  components: {
    JobPosting,
    Application
  },
  methods: {
    currentUsersApplications() {
      if (!this.currentUser) return
      return this.applications.filter(application => application.user.uid === this.currentUser.uid)
    },
    jobPosting(id) {
      return this.jobPostings.find(jobPosting => jobPosting.id === id)
    },
    ...mapActions('job_posting', ['bindJobPosting']),
    ...mapActions('application', ['bindJApplication']),
  },
  computed: {
    ...mapGetters('job_posting', ['jobPostings']),
    ...mapGetters('application', ['applications']),
    ...mapGetters('user', ['currentUser']),
  },
  created() {
    this.bindJobPosting()
    this.bindJApplication()
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/common';

.container {
  padding-top: 48px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .applications {
    width: 100%;
    padding: 8px;
    .job-posting-card {
      border-radius: 2.5px;
      border: 1px solid $grayBorderColor;
      background: white;
      .label {
        text-align: center;
        color: $mainColor;
        font-size: $sizeSm;
        font-weight: bold;
        padding: 8px;
        border-bottom: 1px solid $mainColor;
      }
    }
  }
}

</style>
