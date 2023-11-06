<script setup lang="ts">
import { isWriteModalOpen } from "#imports";
</script>
<template>
  <header>
    <LayoutNav />
  </header>
  <main
    class="mt-[60px] flex flex-col justify-center items-center max-w-[1480px] w-full mx-auto"
  >
    <div class="mt-12 w-full">
      <slot />
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
</template>
