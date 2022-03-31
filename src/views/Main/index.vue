<template>
  <div class="main">
    <n-grid :x-gap="12" :y-gap="8" :cols="3">
      <n-grid-item>
        <n-card>
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由ThoughtWorks在2016年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。它主要解决了两个问题：1、随着项目迭代应用越来越庞大，难以维护。2、跨团队或跨部门协作开发项目导致效率低下的问题。
            </TextMore>
          </template>
          <template #footer>
            <div>
              <span>left</span>
              <span>right</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <p class="line-clamp-2">
          微前端的概念是由ThoughtWorks在2016年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。它主要解决了两个问题：1、随着项目迭代应用越来越庞大，难以维护。2、跨团队或跨部门协作开发项目导致效率低下的问题。
        </p>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" name="MainIndex" setup>
  import TextMore from '/@/components/TextMore';

  const line = ref(2);
</script>

<style lang="less" scoped>
  .main {
    // height: calc(100% + 200px);
  }
</style>
