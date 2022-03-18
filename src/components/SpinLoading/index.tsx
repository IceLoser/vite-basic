import type { PropType } from 'vue';

import { NSpin, NIcon } from 'naive-ui';

import styles from './styles/index.module.less';

export default defineComponent({
  name: 'SpinLoading',
  components: {
    'n-spin': NSpin,
    'n-icon': NIcon,
  },
  props: {
    loadingText: {
      type: String as PropType<string>,
      default: '正在加载...',
    },
    loadingStatus: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props, { slots }) {
    const status = computed(() => props.loadingStatus);
    const description = computed(() => props.loadingText);

    return { status, description, slots };
  },
  render() {
    const { status, description, slots } = this;
    const spinSlots = {
      icon: () => loadingIcon(),
      default: () => slots.default?.(),
      description: () => <span class={styles['spin-loading-text']}>{description}</span>,
    };

    function loadingIcon() {
      return (
        <n-icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M496 16L15.88 208L195 289L448 64L223 317l81 179L496 16z" fill="currentColor" />
          </svg>
        </n-icon>
      );
    }

    return (
      <n-spin
        class={styles['spin-loading']}
        size="large"
        show={status}
        rotate={false}
        v-slots={spinSlots}
      ></n-spin>
    );
  },
});
