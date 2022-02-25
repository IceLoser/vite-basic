<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive :include="[]" :max="20">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </template>
  </router-view>
</template>

<script lang="ts" setup name="AppMain"></script>

<style scoped></style>
