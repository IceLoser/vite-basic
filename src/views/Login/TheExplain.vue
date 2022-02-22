<template>
  <div class="min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
    <AppLogo class="ice_login_logo" />
    <div class="my-auto">
      <img alt="title" src="/@/assets/images/login/login_box_bg.svg" class="w-1/2 -mt-16" />
      <div class="mt-10 font-mono text-white">
        <span class="inline-block mt-4 text-3xl"> 中后台管理系统</span>
      </div>
      <div class="mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x">
        输入您的个人详细信息开始使用！
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="theExplain">
  import { AppLogo } from '/@/components/Application';
</script>

<style scoped lang="less">
  .ice_login_logo {
    @apply absolute top-12;
  }
</style>
