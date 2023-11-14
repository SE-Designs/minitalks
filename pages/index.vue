<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

definePageMeta({
  middleware: ["auth"],
});

const { useAuthUser } = await useAuth();
const { getMininotes } = useMininotes();
const user = (useAuthUser() || "") as unknown as ShortUserType;

const homeMininotes = ref([]) as any;
const loading = ref(false);

async function getData(sort: string = "") {
  loading.value = true;
  try {
    const params = ref();

    switch (sort) {
      // most liked:
      case "best":
        params.value = {
          likedIds: "asc",
        };
        break;
      // most viewed:
      case "popular":
        params.value = {
          viewedIds: "asc",
        };
        break;
      // most discussed:
      case "interesting":
        params.value = {
          replies: {
            _count: "desc",
          },
        };
        break;
      // just latest:
      default:
        params.value = {
          createdAt: "desc",
        };
        break;
    }

    const { mininotes }: any = await getMininotes({
      orderByQuery: params.value,
    });

    homeMininotes.value = mininotes;
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
    <AppFilter @set-show="getData($event)" />
    <AppMainFallback v-if="loading" />
    <AppMainSection
      v-else-if="homeMininotes.length > 0"
      :posts="homeMininotes"
    />
    <AppMainNotFound v-else-if="homeMininotes.length === 0" />
    <AppMainError v-else />
  </div>
</template>
