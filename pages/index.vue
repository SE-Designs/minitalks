<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

definePageMeta({
  middleware: ["auth"],
});

const { useAuthUser } = await useAuth();
const user = (useAuthUser() || "") as unknown as ShortUserType;
</script>
<template>
  <div class="flex flex-col gap-8 w-full px-4">
    <div class="flex flex-col gap-2 text-center">
      <h2 class="font-bold text-3xl">
        its <span class="text-gradient">minitalks</span>
      </h2>
      <p class="text-xs">
        How are you {{ user?.username }}?
        <a href="#" class="link link-accent italic">start writing</a>
      </p>
    </div>

    <AppTopAside />
    <div
      class="flex flex-row justify-between w-full gap-x-4 xl:gap-x-8 xl:px-8"
    >
      <AppLeftAside />
      <AppMainSection />
      <AppRightAside />
    </div>
  </div>
</template>
