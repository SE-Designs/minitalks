<script setup lang="ts">
const { links, isActiveLink } = await useNavLinks();
const { search, startSearch } = await useSearch();
const { signOut } = await useAuth();

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
    class="flex flex-col gap-4 justify-center items-center w-full md:hidden"
  >
    <div class="flex flex-row gap-x-4">
      <button
        class="btn btn-secondary btn-outline"
        onclick="trending_topics.showModal()"
      >
        Trending topics
      </button>
      <button
        class="btn btn-info btn-outline"
        onclick="new_minitalkers.showModal()"
      >
        New minitalkers
      </button>
    </div>
    <div
      class="flex flex-row justify-center items-center w-full gap-x-4 max-w-[360px]"
    >
      <input
        type="search"
        placeholder="Search..."
        class="input input-primary input-bordered w-full"
        v-model.value="search"
        @keypress.enter="startSearch"
      />
      <div class="btn btn-primary" @click="startSearch">
        <Icon name="pixelarticons:search" />
      </div>
    </div>
    <dialog id="trending_topics" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">Trending topics:</h3>
        <div class="flex flex-col gap-y-2 mt-4 w-full max-w-[280px] mx-auto">
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-secondary"
            >
              <Icon name="pixelarticons:arrow-right" />
              <span>Dev</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-secondary"
            >
              <Icon name="pixelarticons:arrow-right" />
              <span>Meta</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-secondary"
            >
              <Icon name="pixelarticons:arrow-right" />
              <span>TV Series</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-secondary"
            >
              <Icon name="pixelarticons:arrow-right" />
              <span>Music</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-secondary"
            >
              <Icon name="pixelarticons:arrow-right" />
              <span>Gaming</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="new_minitalkers" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">Some new minitalkers:</h3>
        <div class="flex flex-col gap-y-2 mt-4 w-full max-w-[280px] mx-auto">
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-info"
            >
              <Icon name="pixelarticons:user" />
              <span>7Vers</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-info"
            >
              <Icon name="pixelarticons:user" />
              <span>IGClan</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-info"
            >
              <Icon name="pixelarticons:user" />
              <span>DDDance</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-info"
            >
              <Icon name="pixelarticons:user" />
              <span>YOLO_creator</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex flex-row gap-x-2 justify-between items-center font-bold"
          >
            <div
              class="flex flex-row gap-x-2 items-center justify-center link link-hover link-info"
            >
              <Icon name="pixelarticons:user" />
              <span>mixture_gg</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </aside>
  <nav
    class="fixed left-1/2 bottom-0 pb-12 flex flex-row justify-center items-center gap-x-4 max-h-[64px] z-50 -translate-x-1/2 sm:hidden"
  >
    <div
      class="flex flex-row gap-x-4 rounded-lg p-2 border border-neutral-700 backdrop-blur"
      style="
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.8)
        );
      "
    >
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :class="
          isActiveLink(link.url)
            ? 'btn btn-primary bg-opacity-40'
            : 'btn btn-ghost'
        "
      >
        <Icon :name="link.icon" class="block xl:hidden" />
        <span class="hidden xl:inline">{{ link.name }}</span>
      </NuxtLink>
      <div class="btn btn-ghost" @click="signoutEvent">
        <Icon name="pixelarticons:logout" />
      </div>
      <div class="btn btn-ghost" @click="useWriteModal({})">
        <Icon name="pixelarticons:edit" />
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
