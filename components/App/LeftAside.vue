<script setup lang="ts">
const { useAuthUser } = await useAuth();
const user = (useAuthUser() || "") as any;

const links = ref([
  {
    name: "Home",
    url: "/",
    icon: "pixelarticons:home",
    isActive: false,
  },
  {
    name: "Explore",
    url: "/?new",
    icon: "pixelarticons:map",
    isActive: false,
  },
  {
    name: "Profile",
    url: `/minitalker/${user.value.username}`,
    icon: "pixelarticons:user",
    isActive: false,
  },
  {
    name: "Logout",
    url: "#",
    icon: "pixelarticons:logout",
    isActive: false,
  },
]) as any;

const url = computed(() => {
  return useRoute().fullPath;
});

function isActiveLink(link: string) {
  if (url.value === link) return true;

  return false;
}
</script>
<template>
  <aside
    class="hidden flex-col gap-y-4 w-full max-w-[64px] xl:gap-y-8 xl:min-w-[200px] h-fit sm:flex sticky left-0 top-[108px]"
  >
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
    </div>

    <div
      to="/"
      class="flex flex-row gap-x-2 items-center btn btn-primary"
      @click="useWriteModal({})"
    >
      <Icon name="pixelarticons:edit" />
      <span class="hidden xl:inline">Write</span>
    </div>
  </aside>
</template>
