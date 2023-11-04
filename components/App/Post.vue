<script setup lang="ts">
const user = {
  username: "DDDance",
  avatar: "",
  content: `Lorem ipsum dolor
sit amet consectetur, adipisicing elit. 

#typescript #javascript`,
  reply: "mixturegg",
  theme: "warning",
};
</script>
<template>
  <article class="flex flex-row items-center">
    <div class="flex flex-col gap-4 w-full bg-base-100 rounded-lg p-4">
      <div class="flex flex-row justify-between items-center gap-4">
        <!-- avatar img or downsaur icon -->
        <div class="flex flex-row items-center gap-4">
          <NuxtLink
            to="/"
            class="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full bg-warning text-warning-content overflow-hidden"
          >
            <div
              class="w-full h-full p-[12px] flex justify-center items-center"
            >
              <Icon name="pixelarticons:downasaur" class="w-full h-full" />
            </div>
          </NuxtLink>
          <div class="flex flex-col">
            <NuxtLink
              to="/"
              class="w-fit font-black link link-hover hover:text-warning"
            >
              {{ user.username }}
            </NuxtLink>
            <NuxtLink
              to="/"
              class="w-fit text-sm font-bold link link-hover hover:opacity-100 opacity-60"
              v-if="user.reply"
            >
              replying to {{ user.reply }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <p class="text-xs font-bold">14 mins ago</p>
          <button
            class="w-[28px] h-[28px] min-w-[28px] min-h-[28px] p-[4px] flex justify-center items-center bg-neutral rounded-full"
          >
            <Icon name="pixelarticons:more-vertical" />
          </button>
        </div>
      </div>
      <div class="h-px w-full bg-neutral"></div>
      <pre class="font-sans">{{ user.content }}</pre>
    </div>
    <aside class="flex flex-col justify-center gap-2 items-center ml-6">
      <button
        class="flex flex-col items-center text-center gap-1 w-full cursor-pointer"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-primary hover:text-primary-content"
        >
          <Icon name="pixelarticons:arrow-up" />
        </div>
        <p class="text-sm font-semibold">14</p>
      </button>
      <button
        class="flex flex-col items-center text-center gap-1 w-full cursor-pointer"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-success hover:text-success-content"
        >
          <Icon name="pixelarticons:visible" />
        </div>
        <p class="text-sm font-semibold">129</p>
      </button>
      <button
        class="flex flex-col items-center text-center gap-1 w-full cursor-pointer"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-info hover:text-info-content"
        >
          <Icon name="pixelarticons:message-text" />
        </div>
        <p class="text-sm font-semibold">3</p>
      </button>
    </aside>
  </article>
</template>
