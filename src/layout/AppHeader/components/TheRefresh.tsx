import { NIcon } from 'naive-ui';
import { useRedo } from '/@/hooks/usePage';

export default defineComponent({
  name: 'TheRefresh',
  components: {
    'n-icon': NIcon,
  },
  setup() {
    const router = useRouter();
    const redo = useRedo(router);

    async function onRefresh() {
      await redo();
    }

    return { onRefresh };
  },
  render() {
    const { onRefresh } = this;
    return (
      <n-icon size="20" color="#fff" class="cursor-pointer" onclick={onRefresh}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4"></path>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
            <circle cx="12" cy="12" r="1"></circle>
          </g>
        </svg>
      </n-icon>
    );
  },
});
