import { NIcon } from 'naive-ui';
import styles from './styles/app_footer.module.less';

export default defineComponent({
  name: 'AppFooter',
  components: {
    'n-icon': NIcon,
  },
  setup() {
    const title = import.meta.env.VITE_GLOB_APP_TITLE;

    return { title };
  },
  render() {
    const { title } = this;

    function footerIcon() {
      return (
        <n-icon size="20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"></path>
              <path d="M6 6l1.5 1.5"></path>
              <path d="M16.5 16.5L18 18"></path>
            </g>
          </svg>
        </n-icon>
      );
    }

    function footerText(text: string) {
      return <span class={styles['footer-text']}>{text}</span>;
    }
    return (
      <div class={styles.container}>
        {footerText('Copyright')}
        {footerIcon()}
        {footerText('2022')}
        {footerText(title as string)}
      </div>
    );
  },
});
