<script setup lang="ts"></script>
<template>
  <section class="flex flex-col gap-y-8 w-full">
    <AppWrite />
    <div class="flex flex-col gap-y-4 p-8 bg-neutral rounded-lg">
      <AppFilter />
      <div class="w-full h-[3px] bg-base-100 rounded" />
      <AppPost />
    </div>
  </section>
</template>
