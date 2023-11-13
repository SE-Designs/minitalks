<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const username = useRoute().params.username as string;
const loading = ref(false);
const author = ref();
const mininotes = ref();

const { getUserMininotesByUsername } = useMininotes();

function isPromise(p: any) {
  return p && Object.prototype.toString.call(p) === "[object Promise]";
}

async function getUserMininotes() {
  loading.value = true;
  try {
    const response = (await getUserMininotesByUsername(username)) as any;

    author.value = response.user;
    mininotes.value = response.user.mininote;
  } catch (error) {
    console.error(`GET USER MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(async () => {
  await getUserMininotes();
});
</script>
<template>
  <div class="flex flex-col gap-y-4 flex-1">
    <AppUserProfile v-if="author" :user="author" />

    <AppMainFallback v-if="loading" />

    <!-- <p v-if="mininotes">
      {{ mininotes }}
    </p> -->
    <AppMainNotFound v-else-if="isPromise(mininotes)" />
    <AppMainSection v-else-if="mininotes" :posts="mininotes" :user="author" />
    <AppMainError v-else />
  </div>
</template>
