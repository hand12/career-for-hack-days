<template>
  <section class="container">
    <div class="job-postings">
      <job-posting />
      <job-posting />
      <job-posting />
    </div>
  </section>
</template>

<script>
import JobPosting from '~/components/JobPosting'

export default {
  components: {
    JobPosting
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/common';

.container {
  padding-top: 72px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .job-postings {
    padding: 8px;
  }
}

</style>
