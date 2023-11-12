<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

definePageMeta({
  middleware: ["auth"],
});

const { useAuthUser } = await useAuth();
const { getHomeMininotes } = useMininotes();
const user = (useAuthUser() || "") as unknown as ShortUserType;

const homeMininotes = ref([]) as any;
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { mininotes }: any = await getHomeMininotes();

    homeMininotes.value = mininotes;
  } catch (error) {
    console.error(`GET HOME MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div class="flex flex-col gap-8 w-full px-4">
    <div class="flex flex-col gap-2 text-center">
      <h2 class="font-bold text-3xl">
        its <span class="text-gradient">minitalks</span>
      </h2>
      <p class="text-xs">
        How are you {{ user?.username }}?
        <a href="#" class="link link-accent italic">start writing</a>
      </p>
    </div>

    <AppTopAside />
    <div
      class="flex flex-row justify-between w-full gap-x-4 xl:gap-x-8 xl:px-8"
    >
      <AppLeftAside />
      <div class="flex flex-col gap-y-8 flex-1">
        <AppFilter />
        <AppMainFallback v-if="loading" />
        <AppMainSection
          v-else-if="homeMininotes.length > 0"
          :posts="homeMininotes"
        />
        <AppMainNotFound v-else-if="homeMininotes.length === 0" />
        <AppMainError v-else />
      </div>
      <AppRightAside />
    </div>
  </div>
</template>
