<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-8 mt-12 w-full px-4">
    <div class="flex flex-col gap-2 text-center">
      <h2 class="font-bold text-3xl">
        its <span class="text-gradient">minitalks</span>
      </h2>
      <p class="text-xs">
        Built in 2 weeks by
        <a href="#" class="link link-accent italic">mixturegg</a>
      </p>
    </div>
    <AppTopAside />
    <div
      class="flex flex-row justify-between w-full gap-x-4 xl:gap-x-8 xl:px-8"
    >
      <AppLeftAside />
      <AppMainSection />
      <AppRightAside />
    </div>
  </div>
</template>
