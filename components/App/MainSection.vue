<script setup lang="ts">
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  } as any,
});
</script>
<template>
  <section class="flex flex-col gap-y-8 flex-1">
    <div class="flex flex-col bg-neutral rounded-lg p-6 xl:p-8 mb-28 sm:mb-0">
      <div
        class="flex flex-col gap-y-12 w-full"
        v-for="mininote in props.posts"
        :key="mininote.id"
      >
        <AppPost :post="mininote" />
        <div class="w-full h-[3px] bg-base-100 rounded" />
      </div>
    </div>
  </section>
</template>
