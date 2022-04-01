<template>
  <div class="main">
    <n-grid :x-gap="12" :y-gap="12" cols="s:1 m:4 l:5 xl:4 2xl:6" responsive="screen">
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
          </template>
          <template #default>
            <TextMore :line-clamp="line">
              微前端的概念是由 ThoughtWorks 在 2016年
              提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:19:14</span>
            </div>
          </template>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card hoverable :bordered="false">
          <template #cover>
            <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </template>
          <template #default>
            <TextMore tooltip="hover">
              微前端的概念是由 ThoughtWorks 在 2016
              年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。
            </TextMore>
          </template>
          <template #footer>
            <div class="main-card-footer">
              <span>作者: Ice</span>
              <span>2022-04-01 10:32:05</span>
            </div>
          </template>
        </n-card>
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
    :deep(.n-card) {
      &-cover {
        img {
          @apply h-64 object-cover;
        }
      }
      &__content {
        @apply bg-inherit;
      }
    }

    &-card-footer {
      @apply flex justify-between;
    }
  }
</style>
