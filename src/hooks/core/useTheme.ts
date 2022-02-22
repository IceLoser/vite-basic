import { useDark, useToggle } from '@vueuse/core';

/**
 * 动态切换主题
 */
export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
  });

  const toggleDark = useToggle(isDark);

  return { isDark, toggleDark };
}
