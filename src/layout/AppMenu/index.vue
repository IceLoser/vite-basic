<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :default-value="currentRoute"
  />
</template>

<script lang="ts" name="AppMenu" setup>
  import type { PropType, ComputedRef } from 'vue';
  import type { MenuOption } from 'naive-ui';

  import { usePermissionStore } from '/@/store/modules/permission';

  const props = defineProps({
    status: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const router = useRouter();
  const currentRoute = router.currentRoute.value.name as string;

  const permissionStore = usePermissionStore();
  const menuOptions = computed(() => permissionStore.getMenuList) as ComputedRef<MenuOption[]>;

  const collapsed = computed(() => props.status);
</script>

<style lang="less" scoped></style>
