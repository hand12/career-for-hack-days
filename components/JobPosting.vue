<template>
  <div class="job-posting">
    <div class="title">
      <h2>
        {{ jobPosting.name }}
      </h2>
    </div>
    <div class="pr">
      {{ jobPosting.pr }}
    </div>
    <div class="bottom">
      <div class="salary-field">
        <span class="salary">{{ jobPosting.salary.min }}</span>
        <span class="unit">万円 ~ </span>
        <span class="salary">{{ jobPosting.salary.max }}</span>
        <span class="unit">万円</span>
      </div>
      <div
        @click="segueToDetail(jobPosting.id)"
        class="detail-btn">
        詳細を見る
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['jobPosting'],
  methods: {
    segueToDetail(id) {
      this.$router.push({ name: 'job_postings-id', params: { id: id } })
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/css/common';

.job-posting {
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid $grayBorderColor;
  border-top: 1px solid $mainColor;
  padding: 16px;
  background: white;
  margin-bottom: 24px;
  .title {
    width: 100%;
    margin-bottom: 12px;
    h2 {
      font-weight: bold;
      font-size: $sizeMd;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  .pr {
    size: $sizeXs;
    color: $fontDarkGrayColor;
    white-space: pre-line;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-bottom: 12px;
  }
  .bottom {
    border-top: 1px solid $grayBorderColor;
    padding: 16px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .salary-field {
      width: 60%;
      font-weight: bold;
      .salary {
        font-size: $sizeMd;
      }
      .unit {
        font-size: $sizeSm;
      }
    }
    .detail-btn {
      background: $mainColor;
      border-radius: 2.5px;
      padding: 8px 16px;
      font-weight: bold;
      font-size: $sizeSm;
      color: white;
    }
  }
}

</style>

