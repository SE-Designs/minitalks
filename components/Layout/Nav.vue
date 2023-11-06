<script setup lang="ts"></script>
<template>
  <div
    class="fixed flex justify-center items-center left-0 top-0 w-screen h-[60px] bg-primary z-30"
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
      <!-- <p>minitalks - mini social network for mini notes</p> -->
      <a
        href="https://github.com/SE-Designs/minitalks"
        class="flex flex-row items-center gap-x-2"
      >
        <Icon name="pixelarticons:git-commit" class="text-info" />
        <span class="font-bold link-info link-hover"> source code </span>
      </a>
    </div>
  </div>
</template>
