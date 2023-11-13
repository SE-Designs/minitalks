<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
}) as any;
</script>
<template>
  <div class="w-full bg-neutral rounded-xl p-8">
    <div class="flex flex-row flex-wrap justify-between items-center">
      <div class="flex flex-row items-center gap-4">
        <NuxtLink
          :to="`/minitalker/${props.user.username}`"
          class="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full bg-warning text-warning-content border-2 border-warning overflow-hidden"
        >
          <img
            class="w-full h-full p-[12px] flex justify-center items-center"
            :src="props.user.avatar"
            :alt="props.user.username"
            v-if="props.user.avatar"
          />
          <div
            v-else
            class="w-full h-full p-[12px] flex justify-center items-center"
          >
            <Icon name="pixelarticons:downasaur" class="w-full h-full" />
          </div>
        </NuxtLink>
        <div class="flex flex-col">
          <NuxtLink
            :to="`/minitalker/${props.user.username}`"
            class="w-fit font-black link link-hover hover:text-warning"
          >
            {{ props.user.username }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row items-center gap-4">
        <p>Following: {{ props.user.followingNumber }}</p>
      </div>
    </div>
  </div>
</template>
