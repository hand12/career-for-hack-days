<template>
  <div class="message">
    <div class="user">
      <div class="profile-image">
        <img :src="message.user.profileImage" />
      </div>
      <div class="name">
        {{ message.user.name }}
      </div>
    </div>
    <div class="balloon">
      <p
        class="text"
        v-html="message.body">
      </p>
      <div class="bottom-buttons">
        <div class="button">既読</div>
        <div class="posted-date">2018/12/26 12:42</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
}

</script>

<style scoped lang="scss">
@import '~assets/css/common';

.message {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 48px;
  .balloon {
    width: 600px;
    position: relative;
    background: white;
    border-radius: 4px;
    border: 1px solid $grayBorderColor;
    padding: 24px;
    &:before {
      position: absolute;
      top: 24px;
      left: -25px;
      border: 12px solid transparent;
      border-right: 12px solid $grayBorderColor;
      content: '';
      display: block;
    }
    &:after {
      position: absolute;
      top: 24px;
      left: -24px;
      border: 12px solid transparent;
      border-right: 12px solid white;
      content: '';
      display: block;
    }
    .text {
      white-space: pre-wrap;
      color: $fontMainColor;
      font-size: $sizeSm;
    }
    .bottom {
      .job-posting {
        padding-top: 12px;
        .label {
          color: $fontDarkGrayColor;
          font-size: $sizeSm;
          margin-bottom: 8px;
        }
        .name {
          font-size: $sizeSm;
          color: $fontTableHoverColor;
        }
      }
    }
    .bottom-buttons {
      position: absolute;
      bottom: -36px;
      right: 0;
      left: 0;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .button {
        font-size: $sizeXs;
        color: $fontDarkGrayColor;
        border: 1px solid $grayBorderColor;
        padding: 4px 12px;
        border-radius: calc(#{$sizeXs + 8px});
        background: white;
      }
      .posted-date {
        font-size: $sizeXs;
        color: $fontDarkGrayColor;
      }
    }
  }
  .user {
    margin-right: 24px;
    .profile-image {
      width: 50px;
      height: 50px;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .name {
      text-align: center;
      font-size: $sizeXs;
      color: $fontDarkGrayColor;
    }
  }
}

</style>
