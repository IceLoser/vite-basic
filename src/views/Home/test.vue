<template>
  <section class="home-container">
    <div class="clipboard-box">
      <div class="clipboard-img" data-msg="农业"></div>
    </div>
  </section>
</template>

<script lang="ts" setup name="Home"></script>

<style lang="less" scoped>
  .home-container {
    @apply flex items-center justify-center;
    @apply w-full h-full;
    box-shadow: 20px 20px 100px #d2d3d5, -20px -20px 100px #ffffff;

    .clipboard-box {
      width: 156px;
      height: 180px;
      padding: 17px 15px;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('http://dev-deswx.wanxue.cn/assets/Property2_hover.f14ad1fd.png');
      border-radius: 50px;

      .clipboard-img {
        @apply relative;
        @apply w-full h-full;

        background-position: top center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url('https://wx-dev-image.wanxue.cn/WEB/basic-manager/question-bank/image/20211216/f437778200ba42f8823bc61be020afcc.png');
        clip-path: polygon(50% 0%, 100% 37px, 100% 110px, 50% 100%, 0 110px, 0 37px);

        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 84px;
          height: auto;
          padding: 4px 10px;
          transform: translate3d(-50%, -50%, 0);

          color: #fff;
          text-align: justify;
          text-align-last: center;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(74, 144, 226, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(5px);
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          content: attr(data-msg);
        }
      }
    }
  }
</style>
