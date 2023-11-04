<script setup lang="ts">
const mininote = ref("");
</script>
<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-y-2">
      <label class="font-black text-sm" for="note">mininote:</label>
      <textarea
        id="note"
        class="textarea textarea-bordered max-h-40"
        maxlength="80"
        v-model.value="mininote"
        placeholder="What's in your mind?"
      ></textarea>
      <div class="flex flex-row justify-between items-center gap-x-8">
        <p class="text-sm">one post per 24 hours</p>
        <p class="text-sm">max. characters - 80</p>
      </div>
      <div class="ml-auto mr-0 mt-2">
        <button
          class="btn btn-sm"
          :class="mininote.length > 0 ? 'btn-primary' : 'btn-neutral'"
        >
          Publish
        </button>
      </div>
    </div>
  </div>
</template>
