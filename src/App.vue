<template>
  <AppMain />
</template>

<script lang="ts" setup name="App">
  import AppMain from '/@/layout/AppMain/index.vue';

  import { useTitle } from '/@/hooks/useTitle';

  useTitle();
</script>

<style scoped></style>
