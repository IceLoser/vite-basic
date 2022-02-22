import { useTitle as usePageTitle } from '@vueuse/core';
import { useGlobSetting } from '/@/hooks/useGlobSetting';
/**
 * 动态改变网站标题
 */
export function useTitle() {
  const { title } = useGlobSetting();

  const { currentRoute } = useRouter();

  const pageTitle = usePageTitle();

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute);

      const tTitle = route?.meta?.title;

      pageTitle.value = tTitle ? ` ${tTitle} - ${title} ` : `${title}`;
    },
    { immediate: true },
  );
}
