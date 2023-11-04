<script setup lang="ts"></script>
<template>
  <aside class="flex flex-col gap-y-8 w-[240px]">
    <div class="flex flex-col gap-y-2 p-4 bg-neutral rounded-lg">
      <NuxtLink to="/" class="btn btn-ghost"> Home</NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost"> Explore</NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">Profile</NuxtLink>
      <NuxtLink to="/" class="btn btn-ghost">Logout</NuxtLink>
    </div>

    <NuxtLink to="/" class="flex flex-row gap-x-2 items-center btn btn-primary">
      <Icon name="pixelarticons:edit" />
      Write</NuxtLink
    >
  </aside>
</template>
