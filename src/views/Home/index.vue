<template>
  <div class="flex flex-col content-center justify-center w-full h-full p-8">
    <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
      <img
        class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
        src="/@/assets/images/logo.png"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind
            CSS是我所见过的唯一一个可以在大型团队中进行扩展的框架。它很容易定制，适用于任何设计，而且构建尺寸很小。”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400"> 莎拉·达扬 </div>
          <div class="text-slate-700 dark:text-slate-500"> 主管工程师,阿尔戈利亚 </div>
        </figcaption>
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup name="Home"></script>

<style scoped></style>
