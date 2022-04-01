<template>
  <div class="ice_login">
    <section class="container relative h-full p-2 mx-auto overflow-auto sm:p-10">
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
</script>

<style scoped lang="less">
  .ice_login {
    @apply w-full h-full p-4;
    @apply bg-white dark:bg-dark-bg;

    @apply before:absolute before:top-0 before:left-0 before:w-full before:h-full;
    @apply before:ml-[-36%] sm:before:ml-[-48%];
    @apply before:bg-[url('/@/assets/images/login/login_bg.svg')];
    @apply before:bg-[100%_center] before:bg-no-repeat before:bg-[length:auto_100%];
    @apply before:content-[""];

    @apply dark:before:bg-[url('/@/assets/images/login/login_bg_dark.svg')];
  }
</style>
