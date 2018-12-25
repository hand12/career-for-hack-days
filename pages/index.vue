<template>
  <section class="container">
    <div class="job-postings">
      <job-posting
        v-for="jobPosting in jobPostings"
        :key="jobPosting.key"
        :jobPosting="jobPosting" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import JobPosting from '~/components/JobPosting'

export default {
  components: {
    JobPosting
  },
  methods: {
    ...mapActions('job_posting', ['bindJobPosting'])
  },
  computed: {
    ...mapGetters('job_posting', ['jobPostings'])
  },
  created() {
    this.bindJobPosting();
  }
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
  .job-postings {
    width: 100%;
    padding: 8px;
  }
}

</style>
