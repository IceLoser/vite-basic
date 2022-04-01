import type { PropType } from 'vue';

import styles from './styles/text_more.module.less';

export default defineComponent({
  name: 'TextMore',
  props: {
    lineClamp: {
      type: Number as PropType<number>,
      default: 2,
      validator: (value: number) => {
        return value <= 6 && value > 0;
      },
    },
  },
  setup(props, { slots }) {
    const isUnFold = ref(false);
    const wrapContent = ref<HTMLDivElement | null>(null);
    const line = computed(() => props.lineClamp);

    function onToggle() {
      if (unref(wrapContent)) {
        isUnFold.value = !unref(isUnFold);

        if (unref(isUnFold)) {
          unref(wrapContent)?.classList.remove(styles[`textMoreWrapLineClamp_${unref(line)}`]);
          unref(wrapContent)?.classList.add(styles['textMoreWrapLineClamp_none']);
        } else {
          unref(wrapContent)?.classList.remove(styles['textMoreWrapLineClamp_none']);
          unref(wrapContent)?.classList.add(styles[`textMoreWrapLineClamp_${unref(line)}`]);
        }
      }
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
      const topLabel = () => {
        return (
          <label class={styles.textMoreWrapContentButton} onClick={onToggle}>
            {unref(isUnFold) ? '收起' : '展开'}
          </label>
        );
      };
      const bottomLabel = () => {
        return (
          <label class={styles.textMoreWrapContentButtonNoAbsolute} onClick={onToggle}>
            收起
          </label>
        );
      };
      return (
        <div
          class={[styles.textMoreWrapContent, styles[`textMoreWrapLineClamp_${unref(line)}`]]}
          ref={wrapContent}
        >
          {!unref(isUnFold) && topLabel()}
          {slots.default?.()}
          {unref(isUnFold) && bottomLabel()}
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
