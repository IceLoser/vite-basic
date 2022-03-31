import type { PropType } from 'vue';

import styles from './styles/text_more.module.less';

export default defineComponent({
  name: 'TextMore',
  props: {
    lineClamp: {
      type: Number as PropType<number>,
      default: 2,
      validator: (value: number) => {
        return value >= 6 && value < 0;
      },
    },
  },
  setup(props, { slots }) {
    const isUnFold = ref(false);
    const line = computed(() => props.lineClamp);

    function onToggle() {
      isUnFold.value = !unref(isUnFold);
    }

    function toggleInput() {
      return (
        <input
          id="textMoreToggleInput"
          type="checkbox"
          class={styles.textMoreWrapToggleInput}
          v-model={isUnFold}
        />
      );
    }

    function content() {
      return (
        <div class={[styles.textMoreWrapContent, `line-clamp-${unref(line)}`]}>
          <label class={styles.textMoreWrapContentButton} onClick={onToggle}>
            {unref(isUnFold) ? '收起' : '展开'}
          </label>
          {slots.default?.()}
          {/* <label class={styles.textMoreWrapContentButtonNoAbsolute} for="textMoreToggleInput">
            收起
          </label> */}
        </div>
      );
    }

    return { toggleInput, content };
  },
  render() {
    const { toggleInput, content } = this;
    return (
      <div class={styles.textMoreWrap}>
        {toggleInput()}
        {content()}
      </div>
    );
  },
});
