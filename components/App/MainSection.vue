<script setup lang="ts"></script>
<template>
  <section class="flex flex-col gap-y-8 flex-1">
    <!-- <AppWrite /> -->
    <div class="flex flex-col gap-y-4 bg-neutral rounded-lg p-6 xl:p-8">
      <AppFilter />
      <div class="w-full h-[3px] bg-base-100 rounded" />
      <AppPost />
    </div>
  </section>
</template>
