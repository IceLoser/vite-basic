<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" :breakpoints="breakpoints">
    <router-view />
    <n-dialog-provider>
      <dialog-content />
    </n-dialog-provider>
    <n-message-provider>
      <message-content />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup name="App">
  import type { GlobalThemeOverrides } from 'naive-ui';

  import { NConfigProvider, darkTheme } from 'naive-ui';
  import { DialogContent, MessageContent } from '/@/components/NaiveUI';

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
    Menu: {
      itemColorHover: unref(iceColor).primaryColorHover,
      itemTextColorHover: unref(iceColor).primaryColor,
      itemColorActive: unref(iceColor).primaryColorHover,
    },
  };
  const theme = computed(() => (unref(isDark) ? darkTheme : null));

  const breakpoints = { xs: 0, s: 640, m: 768, l: 1024, xl: 1280, xxl: 1536 };

  useTitle();
  useNetworkStatus();
</script>
