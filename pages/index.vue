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

async function getMininotes() {
  loading.value = true;
  try {
    const { mininotes }: any = await getHomeMininotes();

    homeMininotes.value = mininotes;
  } catch (error) {
    console.error(`GET HOME MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(async () => {
  await getMininotes();
});
</script>
<template>
  <div class="flex flex-col gap-y-4 flex-1">
    <AppFilter />
    <AppMainFallback v-if="loading" />
    <AppMainSection
      v-else-if="homeMininotes.length > 0"
      :posts="homeMininotes"
    />
    <AppMainNotFound v-else-if="homeMininotes.length === 0" />
    <AppMainError v-else />
  </div>
</template>
