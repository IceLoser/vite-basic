import styles from './styles/index.module.less';

export default defineComponent({
  name: 'AppLogo',
  setup() {
    const title = import.meta.env.VITE_GLOB_APP_TITLE;
    return { title };
  },
  render() {
    const { title } = this;
    return (
      <div class={styles.container}>
        <img class={styles.logo} src="/@/assets/images/logo.png" alt="" />
        <h2 class={styles.title}>{title}</h2>
      </div>
    );
  },
});
