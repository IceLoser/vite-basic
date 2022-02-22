export default defineComponent({
  name: 'AppLogo',
  setup() {
    const title = import.meta.env.VITE_GLOB_APP_TITLE;
    return { title };
  },
  render() {
    const { title } = this;
    return (
      <div class="flex items-center">
        <img class="w-16 h-16 rounded-full" src="/@/assets/images/logo.png" alt="" />
        <h2 class="px-4 font-comfortaa font-bold text-2xl text-white">{title}</h2>
      </div>
    );
  },
});
