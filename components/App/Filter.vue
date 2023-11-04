<script setup lang="ts">
const show = ref("latest");
</script>
<template>
  <div class="flex flex-row justify-between items-center">
    <p class="text-secondary font-bold">showing {{ show }}:</p>
    <div class="flex flex-row items-center gap-x-4 font-bold">
      <div
        class="flex flex-row items-center gap-x-2 link link-hover hover:text-white"
        :class="show === 'latest' ? 'link-success' : ''"
        @click="show = 'latest'"
      >
        <Icon name="pixelarticons:hourglass" />
        <p>latest</p>
      </div>
      <div
        class="flex flex-row items-center gap-x-2 link link-hover hover:text-white"
        :class="show === 'trending' ? 'link-success' : ''"
        @click="show = 'trending'"
      >
        <Icon name="pixelarticons:cellular-signal-2" />
        <p>trending</p>
      </div>

      <div
        class="flex flex-row items-center gap-x-2 link link-hover hover:text-white"
        :class="show === 'best' ? 'link-success' : ''"
        @click="show = 'best'"
      >
        <Icon name="pixelarticons:trophy" />
        <p>best</p>
      </div>
    </div>
  </div>
</template>
