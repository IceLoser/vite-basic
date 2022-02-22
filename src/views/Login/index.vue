<template>
  <div class="w-full h-full p-4 bg-white dark:dark-bg ice_login">
    <section class="container relative h-full p-2 mx-auto sm:p-10">
      <div class="flex h-full">
        <!-- 左侧 说明 -->
        <TheExplain />
        <!-- 右侧 登录 OR 其他 -->
        <LoginForm />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup name="Login">
  import TheExplain from './TheExplain.vue';
  import LoginForm from './LoginForm.vue';
  // import { useCountDown } from '/@/hooks/useCountDown';

  // const { countDown, countStart } = useCountDown();
</script>

<style scoped lang="less">
  .ice_login {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-left: -48%;
      background-image: url('/@/assets/images/login/login_bg.svg');
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: '';
    }
  }
  html[data-theme='dark'] {
    .ice_login {
      &::before {
        background-image: url('/@/assets/images/login/login_bg_dark.svg');
      }
    }
  }
</style>
