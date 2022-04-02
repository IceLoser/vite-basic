<template>
  <n-layout has-sider class="layout-container">
    <n-layout-sider show-trigger collapse-mode="width" :on-update:collapsed="onCollapsed">
      <app-logo type="sider" :status="collapsed" />
      <app-menu :status="collapsed" />
    </n-layout-sider>
    <n-layout class="layout-content-container">
      <n-layout-header>
        <app-header />
      </n-layout-header>
      <n-layout-content :native-scrollbar="false">
        <app-main />
      </n-layout-content>
      <n-layout-footer>
        <app-footer />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup name="Layout">
  import AppMain from './AppMain/index.vue';
  import AppMenu from './AppMenu/index.vue';
  import AppHeader from './AppHeader/index.vue';
  import { AppLogo, AppFooter } from '/@/components/Application';

  const collapsed = ref(false);
  const onCollapsed = (status: boolean) => (collapsed.value = status);
</script>

<style scoped lang="less">
  .layout-container {
    --header-height: 52px;
    --footer-height: 48px;
    @apply w-full h-full;

    :deep(.n-layout-scroll-container) {
      .n-layout-sider {
        @apply hidden shadow-2xl z-10;
        @apply sm:flex;

        background-size: 100% 100%;
        background-position: center center;
        background-image: url('/@/assets/images/layout/bg_sider_02.jpg');

        @apply after:absolute after:z-0 after:inset-0 after:bg-white after:opacity-80;
        @apply after:content-[""];

        @apply dark:shadow-black dark:after:bg-dark-bg;

        [class|='app_logo-module__container'] {
          @apply relative z-10;
        }

        .n-menu {
          @apply relative z-10;
        }

        .n-layout-toggle-button {
          @apply dark:bg-dark-bg;
        }
      }

      .n-layout-toggle-button {
        @apply z-20;
      }

      .layout-content-container {
        .n-layout-header {
          @apply relative z-20 px-4;
          @apply bg-gradient-to-r from-primary to-blue bg-repeat-x;
          @apply dark:from-dark-primary dark:to-dark-blue;

          height: var(--header-height);
          line-height: var(--header-height);
        }

        .n-layout-content {
          @apply bg-transparent relative;
          @apply before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-24;
          @apply before:bg-gradient-to-r from-primary to-blue bg-repeat-x;

          height: calc(100% - var(--header-height) - var(--footer-height) - 1px); // footer 1px 边框
          background-color: var(--ice-background-color);

          .n-scrollbar {
            @apply relative z-20 rounded-lg p-8;

            .n-scrollbar-container,
            .n-scrollbar-content {
              @apply w-full h-full;
            }
          }
        }

        .n-layout-footer {
          @apply px-4 border-t border-dotted border-slate-300;

          height: var(--footer-height);
          line-height: var(--footer-height);
          background-color: var(--ice-background-color);
        }
      }
    }
  }
</style>
