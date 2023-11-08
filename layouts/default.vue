<script setup lang="ts">
import { isWriteModalOpen } from "#imports";

const { useAuthLoading, useAuthUser } = useAuth();
const user = useAuthUser();
const isLoading = useAuthLoading();
</script>
<template>
  <header>
    <LayoutNav />
  </header>
  <main
    class="mt-[60px] flex flex-col justify-center items-center max-w-[1480px] w-full mx-auto"
    v-if="!isLoading"
  >
    <div class="my-12 w-full">
      <slot />
      {{ user }}
    </div>
    <dialog
      id="write"
      class="flex justify-center items-center"
      :class="isWriteModalOpen ? 'modal modal-open' : 'modal'"
      @click.self="useWriteModal"
    >
      <AppWrite />
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </main>
  <main class="w-screen h-screen flex justify-center items-center">
    <span class="loading loading-spinner"></span>
  </main>
</template>
