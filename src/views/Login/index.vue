<template>
  <section class="flex flex-col content-center justify-between w-full h-full overflow-hidden">
    <div class="text-center text-white login_card login_card_logo">
      <h1 class="font-mono text-xl font-bold">完美大学</h1>
      <img class="w-32 h-32 mx-auto my-8 rounded-full" src="/@/assets/images/logo.png" alt="" />
      <p class="text-justify text-base p-4 indent-8.5 backdrop-blur-sm bg-white/20 rounded">
        优秀名企快速了解,海量招聘实时更新;只读经典和精华,让阅读变得简单高效;专业点评新鲜资讯,理解快人一步.
      </p>
    </div>
    <div class="bg-white login_card">
      <div class="grid grid-cols-6 gap-6 mb-8">
        <div class="col-span-6 sm:col-span-3">
          <label for="first-name" class="block text-base text-gray-700"> 手机号码 </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="login_card_input"
          />
        </div>
        <div class="relative col-span-6 sm:col-span-3">
          <label for="first-name" class="block text-base text-gray-700"> 验证码 </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="pr-28 login_card_input"
          />
          <a class="absolute bottom-0 right-0 block w-auto h-10 px-4 leading-10 text-primary">
            获取验证码
          </a>
        </div>
      </div>
      <div class="mb-4 bg-gray-50">
        <button type="submit" class="login_card_button"> 登录 </button>
      </div>
      <p class="text-sm text-right text-zinc-400">若手机号未注册,我们将为您自动注册</p>
    </div>
  </section>
</template>

<script lang="ts" setup name="Login">
  // const router = useRouter();
  // console.info('ICE-[ router ] >', router);
</script>

<style scoped lang="less">
  .login_card {
    @apply flex flex-col place-content-center w-full h-1/2 p-8;

    &_input {
      @apply block w-full h-10 mt-1 border-b border-b-gray-light sm:text-sm;
      @apply outline-0;
      @apply focus:ring-primary focus:border-primary focus-visible:ring-primary focus-visible:border-primary;
      @apply transition duration-150;
    }

    &_button {
      font-size: 16px;

      @apply text-white;
      @apply block w-full h-12 py-2 px-4;
      @apply border border-transparent bg-primary shadow-sm shadow-primary/50;
      @apply hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary;
      @apply transition duration-150;
    }
  }

  .login_card_logo {
    background-image: var(--ice-purple-cyan);
  }
</style>
