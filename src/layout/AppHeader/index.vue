<template>
  <div class="header-container">
    <div class="header-less"></div>
    <div class="header-more">
      <user-drop />
      <full-screen />
      <the-refresh />
    </div>
  </div>
</template>

<script lang="ts" name="AppHeader" setup>
  import UserDrop from './components/UserDrop';
  import FullScreen from './components/FullScreen';
  import TheRefresh from './components/TheRefresh';
</script>

<style lang="less" scoped>
  .header-container {
    @apply flex flex-nowrap h-full;

    .header-less {
      @apply basis-1/4;
    }

    .header-more {
      @apply basis-3/4;
      @apply inline-flex flex-row-reverse items-center;

      :deep(.n-icon) {
        @apply mx-3;
      }
    }
  }
</style>
