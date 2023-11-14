<script setup lang="ts">
import type { ShortUserType } from "~/types/types";

const { links, isActiveLink } = await useNavLinks();
const { useAuthUser, signOut } = await useAuth();
const user = useAuthUser() as unknown as ShortUserType;

async function signoutEvent() {
  try {
    await signOut();

    navigateTo(`/auth#sign-in`);
  } catch (error) {
    console.error(`SIGN OUT ERR: ${error}`);
  }
}
</script>
<template>
  <aside
    class="hidden flex-col gap-y-4 w-full max-w-[64px] xl:gap-y-8 xl:min-w-[200px] h-fit sm:flex sticky left-0 top-[108px]"
  >
    <!-- <NuxtLink class="flex flex-row gap-x-2 items-center btn btn-neutral" to="/">
      <p>{{ user?.username }}</p>
    </NuxtLink> -->
    <div class="flex flex-col gap-y-2 bg-neutral rounded-lg p-2 xl:p-4">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :class="isActiveLink(link.url) ? 'btn btn-active' : 'btn btn-ghost'"
      >
        <Icon :name="link.icon" class="block xl:hidden" />
        <span class="hidden xl:inline">{{ link.name }}</span>
      </NuxtLink>
      <div class="btn btn-ghost" @click="signoutEvent">
        <Icon name="pixelarticons:logout" class="block xl:hidden" />
        <span class="hidden xl:inline">Logout</span>
      </div>
    </div>

    <div
      class="flex flex-row gap-x-2 items-center btn btn-primary"
      @click="useWriteModal({})"
    >
      <Icon name="pixelarticons:edit" />
      <span class="hidden xl:inline">Write</span>
    </div>
  </aside>
</template>
