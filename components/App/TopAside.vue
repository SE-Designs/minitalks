<script setup lang="ts"></script>
<template>
  <nav
    class="fixed left-1/2 bottom-0 pb-12 flex flex-row justify-center items-center gap-x-4 max-h-[64px] -translate-x-1/2 sm:hidden"
  >
    <div
      class="flex flex-row gap-x-4 rounded-lg p-2 border border-neutral backdrop-blur"
      style="
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.8)
        );
      "
    >
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:home" class="block xl:hidden" />
      </NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:map" class="block xl:hidden" />
      </NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:user" class="block xl:hidden" />
      </NuxtLink>
      <div class="btn btn-ghost" onclick="write.showModal()">
        <Icon name="pixelarticons:edit" />
      </div>
      <NuxtLink to="/" class="btn btn-ghost">
        <Icon name="pixelarticons:logout" class="block xl:hidden" />
      </NuxtLink>
    </div>
  </nav>
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
        type="text"
        placeholder="Search..."
        class="input input-primary input-bordered w-full"
      />
      <div class="btn btn-primary">
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
</template>
