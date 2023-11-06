<script setup lang="ts"></script>
<template>
  <aside class="hidden flex-col gap-y-4 mx-auto xl:gap-y-8 w-[280px] md:flex">
    <div
      class="flex flex-row justify-center items-center w-full gap-x-4 max-w-[360px] xl:gap-x-6"
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
    <div
      class="flex flex-col gap-y-2 bg-neutral px-4 py-3 rounded-lg xl:px-8 xl:py-6"
    >
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
    <div class="flex flex-col gap-1 text-xs text-neutral-content">
      <div class="flex flex-row gap-x-2 items-center">
        <span>stable version: 1.0</span>
        <Icon name="pixelarticons:check" class="min-w-[14px] min-h-[14px]" />
      </div>
      <div class="flex flex-row gap-x-2 items-center">
        <span>author: mixturegg</span>
        <Icon
          name="pixelarticons:external-link"
          class="min-w-[14px] min-h-[14px]"
        />
      </div>
    </div>
  </aside>
</template>
