<template>
  <section class="container">
    <div class="job-posting">
      <div class="title">
        【営業総合職/スラッシュキャリア】自身のキャリアタグを増やしませんか？
      </div>
      <div class="job-posting-main-card">
        <div class="imagebox">
          <img src="~/assets/images/livesense.jpg" />
        </div>
        <div class="point">
          求人のポイント
        </div>
        <div class="pr">
          縦にも横にも幅広くキャリア形成が可能！長期的に市場価値を高め続けていける環境があります。
        </div>
      </div>
      <div class="job-posting-sub-card">
        <div class="label">
          未経験歓迎の求人です
        </div>
        <div class="cells">
          <div class="cell">
            <span class="salary">420</span>
            <span class="unit">万円 ~</span>
            <span class="salary">500</span>
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
    <div class="bottom-buttons">
      <span class="button apply">応募する</span>
      <span class="button back">一覧に戻る</span>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '~assets/css/common';

.container {
  padding-top: 72px;
  min-height: 100vh;
  .job-posting {
    padding: 8px;
    padding-bottom: 96px;
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
  .bottom-buttons {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(45,55,64,0.75);
    padding: 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    .button {
      text-align: center;
      width: 40%;
      padding: 8px;
      font-weight: bold;
      border-radius: 2.5px;
    }
    .apply {
      background: $applicationButtonColor;
      border-bottom: 4px solid darken($applicationButtonColor, 10);
    }
    .back {
      background: white;
      border-bottom: 4px solid darken(white, 10);
    }
  }
}

</style>
