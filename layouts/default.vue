<script setup lang="ts">
import { isWriteModal } from "#imports";
import type { ShortUserType } from "~/types/types";

const { publishMininote } = useMininotes();
const { useAuthLoading, useAuthUser } = await useAuth();
const user = (useAuthUser() || "") as unknown as ShortUserType;
const isLoading = useAuthLoading();
const loading = ref(false);

async function handleSubmit(data: any) {
  loading.value = true;
  try {
    const response = await publishMininote({
      content: data.content,
      media: data.media,
      replyTo: data.replyTo,
    });

    console.log(response);
  } catch (error) {
    console.error(`PUBLISH MININOTE ERR: ${error}`);
  } finally {
    loading.value = false;
  }
}
</script>
<template>
  <main v-if="!isLoading">
    <header>
      <LayoutNav />
    </header>
    <section
      class="mt-[60px] flex flex-col justify-center items-center max-w-[1480px] w-full mx-auto"
    >
      <div class="my-12 w-full">
        <slot />
      </div>
      <dialog
        id="write"
        class="flex justify-center items-center"
        :class="isWriteModal ? 'modal modal-open' : 'modal'"
        @click.self="useWriteModal({})"
      >
        <AppWrite @on-submit="handleSubmit" :loading="loading" />
        <form method="dialog" class="modal-backdrop">
          <button hidden>close</button>
        </form>
      </dialog>
    </section>
  </main>
  <LayoutLoading v-else />
</template>
