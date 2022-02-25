import type { PropType } from 'vue';
import styles from './styles/app_logo.module.less';

export default defineComponent({
  name: 'AppLogo',
  props: {
    type: {
      type: String as PropType<string>,
      default: '',
    },
    status: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const title = import.meta.env.VITE_GLOB_APP_TITLE;

    const formatStyle = computed(() => {
      if (props.type === 'sider') {
        return styles['container-sider'];
      }
      return styles.container;
    });

    const collapsed = computed(() => props.status);

    return { title, formatStyle, collapsed };
  },
  render() {
    const { title, formatStyle, collapsed } = this;

    function appLogoText() {
      return <h2 class={styles.title}>{title}</h2>;
    }

    function appLogoImg() {
      return <img class={styles.logo} src="/@/assets/images/logo.png" alt="" />;
    }

    return (
      <div class={formatStyle}>
        {appLogoImg()}
        {!collapsed && appLogoText()}
      </div>
    );
  },
});
