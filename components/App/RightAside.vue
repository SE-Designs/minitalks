<script setup lang="ts"></script>
<template>
  <aside class="flex flex-col gap-y-8 w-[360px]">
    <input
      type="text"
      placeholder="Search..."
      class="input input-primary input-bordered w-full max-w-xs"
    />
    <div class="flex flex-col gap-y-2 bg-neutral px-8 py-6 rounded-lg">
      <h2 class="font-bold">Trending topics</h2>
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
    <div class="flex flex-col gap-y-2 bg-neutral px-8 py-6 rounded-lg">
      <h2 class="font-bold">New minitalkers</h2>
      <NuxtLink
        to="/"
        class="flex flex-row gap-x-2 justify-between items-center font-bold"
      >
        <div
          class="flex flex-row gap-x-2 items-center justify-center link link-hover link-accent"
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
          class="flex flex-row gap-x-2 items-center justify-center link link-hover link-accent"
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
          class="flex flex-row gap-x-2 items-center justify-center link link-hover link-accent"
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
          class="flex flex-row gap-x-2 items-center justify-center link link-hover link-accent"
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
          class="flex flex-row gap-x-2 items-center justify-center link link-hover link-accent"
        >
          <Icon name="pixelarticons:user" />
          <span>mixture_gg</span>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>
