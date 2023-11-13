<script setup lang="ts">
const props = defineProps({
  posts: {
    type: [Array, Object],
    required: true,
  } as any,
});

function isCommentsExist(mininote: any) {
  if (mininote.repliesNumber > 0)
    return `SEE COMMENTS (${mininote.repliesNumber})`;

  return `REPLY TO ${mininote.author.username}`;
}

const isSinglePost = computed(() => {
  if (typeof props.posts === "object" && props.posts.mininote) return true;

  return false;
});
</script>
<template>
  <section class="flex flex-col gap-y-4 flex-1">
    <div class="flex flex-col bg-neutral rounded-lg p-6 xl:p-8 mb-28 sm:mb-0">
      <div
        class="flex flex-col gap-4 w-full"
        v-for="mininote in props.posts"
        :key="mininote.id"
      >
        <AppPost :post="mininote" />
        <NuxtLink
          :to="`/mininote/${mininote.id}`"
          @click="isSinglePost ? useWriteModal({}) : ''"
          class="btn w-full hover:btn-warning sm:w-[calc(100%-64px)]"
        >
          <Icon name="pixelarticons:arrow-right" />
          <span>{{ isCommentsExist(mininote) }}</span>
        </NuxtLink>
        <div
          class="w-full h-[3px] bg-base-100 rounded mt-6"
          :class="isSinglePost ? 'mb-4' : 'mb-12'"
        />
        <div class="flex flex-col gap-2 text-left" v-if="isSinglePost">
          <div class="flex flex-row justify-between items-center gap-x-4">
            <h4 class="font-bold">Comments: {{ mininote.repliesNumber }}</h4>
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
