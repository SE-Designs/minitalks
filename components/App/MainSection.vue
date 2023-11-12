<script setup lang="ts">
const props = defineProps({
  posts: {
    type: [Array, Object],
    required: true,
  } as any,
});
</script>
<template>
  <section class="flex flex-col gap-y-8 flex-1">
    <div class="flex flex-col bg-neutral rounded-lg p-6 xl:p-8 mb-28 sm:mb-0">
      <div
        class="flex flex-col gap-y-8 mb-8 w-full"
        v-for="mininote in props.posts"
        :key="mininote.id"
      >
        <AppPost :post="mininote" />
        <div class="w-full h-[3px] bg-base-100 rounded" />
        <div
          class="flex flex-col gap-2 text-left"
          v-if="typeof props.posts === 'object' && props.posts.mininote"
        >
          <div class="flex flex-row justify-between items-center gap-x-4">
            <h4 class="font-bold">Comments: {{ mininote.replies.length }}</h4>
          </div>
          <div
            class="flex flex-col gap-y-2 mb-2"
            v-for="comment in mininote.replies"
            :key="comment.id"
          >
            <AppPost :post="comment" />
            <div class="w-3/4 mx-auto h-[3px] bg-base-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
