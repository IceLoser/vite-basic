<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :default-value="currentRoute"
  />
</template>

<script lang="ts" name="AppMenu" setup>
  import type { PropType } from 'vue';

  import { usePermissionStore } from '/@/store/modules/permission';

  const props = defineProps({
    status: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const router = useRouter();
  const currentRoute = router.currentRoute.value.name;

  const permissionStore = usePermissionStore();
  const menuOptions = computed(() => permissionStore.getMenuList);

  const collapsed = computed(() => props.status);
  // const menuOptions: MenuOption[] = [
  //   {
  //     label: () =>
  //       h(
  //         RouterLink,
  //         {
  //           to: {
  //             name: 'MainRoot',
  //             path: '/main/index',
  //           },
  //         },
  //         { default: () => '首页' },
  //       ),
  //     key: 'Main',
  //     icon: renderIcon(MainIcon),
  //   },
  // ];
</script>

<style lang="less" scoped></style>
