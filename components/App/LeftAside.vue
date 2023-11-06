<script setup lang="ts"></script>
<template>
  <aside
    class="hidden flex-col gap-y-4 w-full max-w-[64px] xl:gap-y-8 xl:min-w-[200px] h-fit sm:flex sticky left-0 top-[108px]"
  >
    <div class="flex flex-col gap-y-2 bg-neutral rounded-lg p-2 xl:p-4">
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:home" class="block xl:hidden" />
        <span class="hidden xl:inline">Home</span>
      </NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:map" class="block xl:hidden" />
        <span class="hidden xl:inline">Explore</span>
      </NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:user" class="block xl:hidden" />
        <span class="hidden xl:inline">Profile</span>
      </NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:logout" class="block xl:hidden" />
        <span class="hidden xl:inline">Logout</span>
      </NuxtLink>
    </div>

    <div
      to="/"
      class="flex flex-row gap-x-2 items-center btn btn-primary"
      @click="useWriteModal"
    >
      <Icon name="pixelarticons:edit" />
      <span class="hidden xl:inline">Write</span>
    </div>
  </aside>
</template>
