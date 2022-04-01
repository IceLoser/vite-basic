import type { PropType } from 'vue';

import { NTooltip } from 'naive-ui';
import styles from './styles/text_more.module.less';

export default defineComponent({
  name: 'TextMore',
  components: {
    'n-tooltip': NTooltip,
  },
  props: {
    tooltip: {
      type: [String, Boolean] as PropType<'hover' | 'click' | false>,
      default: false,
    },
    lineClamp: {
      type: Number as PropType<number>,
      default: 2,
      validator: (value: number) => {
        return value <= 6 && value > 0;
      },
    },
  },
  setup(props, { slots }) {
    const wrapContent = ref<HTMLDivElement | null>(null); // 元素

    const isUnFold = ref(false); // 是否展开
    const line = computed(() => props.lineClamp); // 收起时的显示行数
    const tipType = computed(() => props.tooltip); // tooltip

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

      if (!unref(tipType)) {
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

      return (
        <n-tooltip
          class={styles.textMoreWrapTooltip}
          trigger={unref(tipType)}
          v-slots={{
            trigger: () => (
              <div
                class={[
                  styles.textMoreWrapContent,
                  styles[`textMoreWrapLineClamp_${unref(line)}`],
                  'cursor-pointer',
                ]}
                ref={wrapContent}
              >
                {slots.default?.()}
              </div>
            ),
            default: () => slots.default?.(),
          }}
        />
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
