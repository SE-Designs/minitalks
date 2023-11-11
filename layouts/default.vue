<script setup lang="ts">
import { isWriteModalOpen } from "#imports";
import type { ShortUserType } from "~/types/types";

const { useAuthLoading, useAuthUser } = await useAuth();
const user = (useAuthUser() || "") as unknown as ShortUserType;
const isLoading = useAuthLoading();
</script>
<template>
  <ClientOnly>
    <main v-if="!isLoading">
      <header>
        <LayoutNav />
      </header>
      <section
        class="mt-[60px] flex flex-col justify-center items-center max-w-[1480px] w-full mx-auto"
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
      </section>
    </main>
    <LayoutLoading v-else />
  </ClientOnly>
</template>
