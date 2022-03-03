<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :default-value="currentRoute"
  />
</template>

<script lang="ts" name="AppMenu" setup>
  import type { PropType, Component } from 'vue';
  import type { MenuOption } from 'naive-ui';

  import { RouterLink } from 'vue-router';
  import { NIcon } from 'naive-ui';
  import { HomeOutline as MainIcon } from '@vicons/ionicons5';

  const props = defineProps({
    status: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const router = useRouter();
  const currentRoute = router.currentRoute.value.name;
  console.info('ICE-[ currentRoute ] >>>', currentRoute);

  const collapsed = computed(() => props.status);
  const menuOptions: MenuOption[] = [
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: 'MainRoot',
              path: '/main/index',
            },
          },
          { default: () => '首页' },
        ),
      key: 'Main',
      icon: renderIcon(MainIcon),
    },
  ];

  function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }
</script>

<style lang="less" scoped></style>
