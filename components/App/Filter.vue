<script setup lang="ts">
const show = ref("latest");

const emits = defineEmits(["setShow"]);

const sortLinks = ref([
  {
    name: "latest",
    icon: "pixelarticons:hourglass",
  },
  {
    name: "best",
    icon: "pixelarticons:trophy",
  },
  {
    name: "popular",
    icon: "pixelarticons:cellular-signal-3",
  },
  {
    name: "interesting",
    icon: "pixelarticons:ac",
  },
]);

function setShow(category: string) {
  show.value = category;

  emits("setShow", show.value);
}
</script>
<template>
  <div class="flex flex-col justify-between items-center sm:flex-row">
    <p class="text-secondary font-bold">showing {{ show }}:</p>
    <div class="flex flex-row items-center gap-x-6 font-bold">
      <div
        v-for="link in sortLinks"
        :key="link.name"
        class="flex flex-row items-center gap-x-2 link link-hover hover:text-white"
        :class="show === link.name ? 'link-success' : ''"
        @click="setShow(link.name)"
      >
        <Icon :name="link.icon" />
        <p>{{ link.name }}</p>
      </div>
    </div>
  </div>
</template>
