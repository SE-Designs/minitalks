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
  } finally {
    loading.value = false;
  }
}

onBeforeMount(async () => {
  await getMininotes();
});
</script>
<template>
  <div class="flex flex-col gap-8 w-full px-4">
    <div class="flex flex-col gap-2 text-center">
      <h2 class="font-bold text-3xl">
        its
        <span class="text-gradient">minitalks</span>
      </h2>
      <p class="text-xs">
        <a href="#" class="link link-accent italic">start writing</a>
      </p>
      <AppTopAside />
      <div
        class="flex flex-row justify-between w-full gap-x-4 xl:gap-x-8 xl:px-8"
      >
        <AppLeftAside />
        <div class="flex flex-col gap-y-8 flex-1">
          <AppMainFallback v-if="loading" />
          <AppMainNotFound v-else-if="isPromise(mininote)" />
          <AppMainSection v-else-if="mininote" :posts="mininote" />
          <AppMainError v-else />
        </div>
        <AppRightAside />
      </div>
    </div>
  </div>
</template>
