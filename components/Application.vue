<template>
  <div
    class="cell"
    @click="segieToDetail">
    <div class="cell-title">
      {{ jobPosting.name }}
    </div>
    <div class="cell-body">
      <span class="cell-body-left">
        <span class="imgbox">
          <img :src="jobPosting.postUser.profileImage" />
        </span>
        <span class="name">
          {{ jobPosting.postUser.name }}
        </span>
      </span>
      <span class="cell-body-right">
        <span class="date">
          2018/12/26 12:48
        </span>
      </span>
    </div>
    <div class="read-label">
      NEW
    </div>
  </div>
</template>

<script>
export default {
  props: ['application', 'jobPosting'],
  methods: {
    segieToDetail() {
      this.$router.push({ name: 'applications-id', params: { id: this.application.id }})
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/css/common';

.cell {
  position: relative;
  padding: 12px 8px;
  &:nth-child(odd) {
    background: $grayBgColor;
  }
  .cell-title {
    font-weight: bold;
    font-size: $sizeMd;
    margin-bottom: 16px;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cell-body{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cell-body-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .imgbox {
        width: 46px;
        height: 46px;
        margin-right: 12px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          @include box-shadow();
        }
      }
      .name {
        color: $fontDarkGrayColor;
        font-size: $sizeSm;
        text-align: left;
      }
    }
    .cell-body-right {
      .date {
        color: $fontDarkGrayColor;
        font-size: $sizeSm;
        text-align: right;
      }
    }
  }
  .read-label {
    position: absolute;
    top: 12px;
    right: 12px;
    background: $mainColor;
    border-radius: 2.5px;
    color: white;
    padding: 4px 12px;
    font-size: $sizeSm;
    font-weight: bold;
    @include materialShadow();
  }
}

</style>


