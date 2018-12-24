<template>
  <div class="job-posting">
    <div class="title">
      <h2>
        【営業総合職/スラッシュキャリア】自身のキャリアタグを増やし、<br />
          ほげほげほげほげほげほげほげほげ
      </h2>
    </div>
    <div class="pr">
      ■配属部署について：これまでの経験やご経験を踏まえて、以下のいずれかの先行・配属になります。
    </div>
    <div class="bottom">
      <div class="salary-field">
        <span class="salary">420</span>
        <span class="unit">万円 ~ </span>
        <span class="salary">500</span>
        <span class="unit">万円</span>
      </div>
      <div class="detail-btn">
        詳細を見る
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
@import '~assets/css/common';

.job-posting {
  border-radius: 2.5px;
  border: 1px solid $grayBorderColor;
  border-top: 1px solid $mainColor;
  padding: 16px;
  background: white;
  margin-bottom: 24px;
  .title {
    overflow: hidden;
    width: 100%;
    height: calc(#{$sizeMd} * 3);
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

