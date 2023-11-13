<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const id = useRoute().params.id as string;
const loading = ref(false);
const mininote = ref();

const { getMininoteById } = useMininotes();

function isPromise(p: any) {
  return p && Object.prototype.toString.call(p) === "[object Promise]";
}

async function getMininotes() {
  loading.value = true;
  try {
    const response = await getMininoteById(id);

    mininote.value = response;
  } catch (error) {
    console.error(`GET MININOTE BY ID ERR: ${error}`);
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
    <AppMainFallback v-if="loading" />
    <AppMainNotFound v-else-if="isPromise(mininote)" />
    <AppMainSection v-else-if="mininote" :posts="mininote" />
    <AppMainError v-else />
  </div>
</template>
