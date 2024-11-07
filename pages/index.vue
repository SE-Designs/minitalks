<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

definePageMeta({
  middleware: ["auth"],
});

const { useAuthUser } = await useAuth();
const { getMininotes } = useMininotes();
const user = (useAuthUser() || "") as unknown as ShortUserType;

const mininotesVal = ref([]) as any;
const loading = ref(false);
const last = ref(0);

async function loadData(sort: string = "", repeat: boolean = false) {
  loading.value = true;

  if (repeat) {
    last.value = 0;
    mininotesVal.value = [];
  }

  try {
    const sortBy = ref();

    switch (sort) {
      // most liked:
      case "best":
        sortBy.value = {
          likedIds: "asc",
        };
        break;
      // most viewed:
      case "popular":
        sortBy.value = {
          viewedIds: "asc",
        };
        break;
      // most discussed:
      case "interesting":
        sortBy.value = {
          replies: {
            _count: "desc",
          },
        };
        break;
      // just latest:
      default:
        sortBy.value = {
          createdAt: "desc",
        };
        break;
    }

    const { total, mininotes }: any = await getMininotes({
      orderByQuery: sortBy.value,
      lastCursorPoint: last.value,
    });

    if (last.value >= total) {
      console.log("OUT OF STOCKS");
    }

    mininotesVal.value.push(...mininotes);
  } catch (error) {
    console.error(`GET HOME MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
    last.value = mininotesVal.value.length;
  }
}

onBeforeMount(async () => {
  await loadData();
});
</script>
<template>
  <div class="flex flex-col gap-y-4 flex-1">
    {{ last }}
    <AppFilter @set-show="loadData($event, true)" />
    <AppMainFallback v-if="loading && last === 0" />
    <AppMainSection
      v-else-if="mininotesVal.length > 0"
      @load="loadData"
      :posts="mininotesVal"
    />

    <AppMainNotFound v-else-if="mininotesVal.length === 0" />
    <AppMainError v-else />
    <AppMainFallback v-if="loading && mininotesVal.length > 0 && last !== 0" />
  </div>
</template>
