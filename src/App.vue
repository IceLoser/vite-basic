<template>
  <AppMain />
</template>

<script lang="ts" setup name="App">
  import AppMain from '/@/layout/AppMain/index.vue';

  import { useTitle } from '/@/hooks/useTitle';
  // import { useTheme } from '/@/hooks/useTheme';

  useTitle();
  // useTheme();
</script>

<style scoped></style>
