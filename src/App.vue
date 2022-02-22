<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <AppMain />
  </n-config-provider>
</template>

<script lang="ts" setup name="App">
  import type { GlobalThemeOverrides } from 'naive-ui';

  import { NConfigProvider, darkTheme } from 'naive-ui';
  import AppMain from '/@/layout/AppMain/index.vue';

  import { useTitle } from './hooks/core/useTitle';
  import { useNetworkStatus } from './hooks/event/useEvent';
  import { getPropertyValue } from '/@/utils';
  import { useTheme } from './hooks/core/useTheme';

  const { isDark } = useTheme();

  const iceColor = computed(() => ({
    primaryColor: getPropertyValue('--ice-primary-color'),
    primaryColorHover: getPropertyValue('--ice-primary-hover-color'),
  }));
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: unref(iceColor).primaryColor,
      primaryColorHover: unref(iceColor).primaryColorHover,
      primaryColorPressed: unref(iceColor).primaryColor,
    },
  };
  const theme = computed(() => (unref(isDark) ? darkTheme : null));

  useTitle();
  useNetworkStatus();
</script>
