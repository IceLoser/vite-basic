<template>
  <div class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12 login-form">
    <div class="login-form-card">
      <h2 class="login-form-title">登录</h2>
      <n-form
        :label-width="80"
        :model="formData"
        :rules="rules"
        :show-label="false"
        size="medium"
        ref="formRef"
        class="login-form-box"
      >
        <n-form-item path="userName" class="login-form-box-item">
          <n-input v-model:value="formData.userName" placeholder="请输入您的账号" />
        </n-form-item>
        <n-form-item path="password" class="login-form-box-item">
          <n-input placeholder="请输入您的密码" v-model:value="formData.password" />
        </n-form-item>
        <n-form-item class="login-form-box-item">
          <!-- <basic-drag-verify @success="handleSuccess" /> -->
        </n-form-item>
        <n-form-item label="Checkbox" path="checkboxValue">
          <n-checkbox v-model:checked="formData.remember"> 记住密码 </n-checkbox>
        </n-form-item>
        <n-form-item class="login-form-box-item">
          <n-button block type="primary" @click="onLogin" attr-type="button"> 登录 </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup name="LoginForm">
  import { NForm, NFormItem, NInput, NButton, NCheckbox } from 'naive-ui';

  const formRef = ref(null);
  const formData = reactive({
    userName: '',
    password: '',
    remember: false,
  });

  const rules = {
    userName: {
      required: true,
      message: '请输入姓名',
      trigger: ['input'],
    },
    password: {
      required: true,
      message: '请输入年龄',
      trigger: ['input'],
    },
  };

  // const handleSuccess = (data: PassingData) => {
  //   const { time } = data;
  //   console.info('ICE-[ time ] >>>', time);
  // };

  const onLogin = () => {
    console.info('ICE-[ login ] >>>', formData);
  };
</script>

<style lang="less">
  .login-form {
    &-card {
      @apply relative w-full px-5 py-8 m-auto;
      @apply rounded-md shadow-md;
      @apply xl:ml-16 xl:bg-transparent xl:p-4 xl:w-auto xl:shadow-none;
      @apply sm:px-8;
      @apply sm:w-3/4 lg:w-2/4;
    }

    &-title {
      @apply mb-4;
      @apply font-bold text-2xl text-center;
      @apply xl:text-3xl xl:text-left;
    }

    &-box {
      @apply w-full;

      &-item {
        @apply w-96;
      }
    }
  }
</style>
