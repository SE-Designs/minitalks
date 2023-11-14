<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

definePageMeta({
  middleware: ["auth"],
});

const { useAuthUser } = await useAuth();
const { getMininotes } = useMininotes();

const user = (useAuthUser() || "") as unknown as ShortUserType;

const searchMininotes = ref([]) as any;
const loading = ref(false);
const searchQuery = ref(useRoute().query.q);

watch(
  () => (searchQuery.value = useRoute().query.q),
  () => getData()
);

async function getData() {
  loading.value = true;
  try {
    const { mininotes }: any = await getMininotes({
      searchQuery: searchQuery.value,
    });

    searchMininotes.value = mininotes;
  } catch (error) {
    console.error(`GET HOME MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(async () => {
  await getData();
});
</script>
<template>
  <div class="flex flex-col gap-y-4 flex-1">
    <AppFilter />
    <p>Search: {{ searchQuery }}</p>
    <AppMainFallback v-if="loading" />
    <AppMainSection
      v-else-if="searchMininotes.length > 0"
      :posts="searchMininotes"
    />
    <AppMainNotFound v-else-if="searchMininotes.length === 0" />
    <AppMainError v-else />
  </div>
</template>
