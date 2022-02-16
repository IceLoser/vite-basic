<template>
  <AppMain />
</template>

<script lang="ts" setup name="App">
  import AppMain from '/@/layout/AppMain/index.vue';

  import { useTitle } from '/@/hooks/useTitle';
  import { useNetworkStatus } from '/@/hooks/useEvent';
  // import { useTheme } from '/@/hooks/useTheme';

  useTitle();
  useNetworkStatus();
  // useTheme();
</script>

<style scoped></style>
