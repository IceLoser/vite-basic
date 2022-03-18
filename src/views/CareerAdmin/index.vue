<template>
  <section class="career-admin">
    <SpinLoading :loadingStatus="loadingStatus" loadingText="职业C端后台管理系统加载中...">
      <micro-app
        class="career-admin-content"
        :name="option.name"
        :url="option.url"
        :baseroute="option.baseroute"
        @created="onHandleCreate"
        @beforemount="onHandleBeforeMount"
        @mounted="onHandleMount"
        @unmount="onHandleUnmount"
        @error="onHandleError"
        @datachange="onHandleDataChange"
      />
    </SpinLoading>
  </section>
</template>

<script lang="ts" name="CareerAdmin" setup>
  import { getViteMicroApp } from '/@/utils';
  import SpinLoading from '/@/components/SpinLoading';

  const loadingStatus = ref(true);
  const { name, url } = getViteMicroApp('CareerAdmin');
  const option = reactive({
    name,
    url,
    baseroute: '/career-admin/',
  });

  function onHandleCreate() {
    console.log('CareerAdmin 应用创建了');
  }

  function onHandleBeforeMount(): void {
    console.log('CareerAdmin 即将被渲染');
  }

  function onHandleMount(): void {
    console.log('CareerAdmin 已经渲染完成');
  }

  function onHandleUnmount(): void {
    console.log('CareerAdmin 卸载了');
  }

  function onHandleError(): void {
    console.log('CareerAdmin 加载出错了');
  }

  function onHandleDataChange(e: CustomEvent): void {
    const { isLoaded } = e.detail.data;
    isLoaded && (loadingStatus.value = false);
  }
</script>

<style lang="less" scoped>
  .career-admin {
    @apply w-full h-full;

    &-title {
      @apply font-serif text-2xl subpixel-antialiased font-bold tracking-wide text-white;
    }

    &-content {
      @apply w-full h-full;

      :deep(micro-app-body) {
        @apply w-full h-full;

        #CareerAdminRoot {
          overflow: hidden;
        }
      }
    }
  }
</style>
