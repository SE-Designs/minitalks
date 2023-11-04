<script setup lang="ts"></script>
<template>
  <div
    class="fixed flex justify-center items-center left-0 top-0 w-screen h-[60px] bg-primary"
  >
    <div
      class="max-w-[1480px] w-full mx-auto flex flex-row justify-between items-center gap-x-8 px-8"
    >
      <NuxtLink
        to="/"
        class="flex flex-row items-center gap-x-2 font-bold link-secondary link-hover"
      >
        <Icon name="pixelarticons:downasaur" />
        <h1>minitalks</h1>
      </NuxtLink>
      <p>minitalks - max length 80</p>
      <a href="#" class="font-bold link-neutral link-hover"> source code </a>
    </div>
  </div>
</template>
