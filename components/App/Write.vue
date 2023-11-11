<script setup lang="ts">
const emit = defineEmits(["onSubmit"]);
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});

const content = ref("");
const fileInput = ref();
const uploadFile = ref();

function handleSelectImage() {
  fileInput.value.click();
}

function handleUploadImage(event: any) {
  const file = event.target?.files[0];

  uploadFile.value = file;
}

function handleFormPublish() {
  emit("onSubmit", {
    content: content.value,
    media: uploadFile ? [uploadFile.value] : [],
  });
}
</script>
<template>
  <div class="flex flex-col">
    <h3 class="font-bold text-2xl text-center mb-4">start your mininotes</h3>
    <div class="flex flex-col gap-y-2">
      <label class="font-black text-sm" for="note">mininote:</label>
      <textarea
        id="note"
        class="textarea textarea-bordered h-32 max-h-40"
        maxlength="80"
        v-model.value="content"
        placeholder="What's in your mind?"
      ></textarea>
      <div class="flex flex-row justify-between items-center gap-x-8">
        <p class="text-sm">one post per 24 hours</p>
        <p class="text-sm">
          {{ content.length > 0 ? content.length : "max. characters - 80" }}
        </p>
      </div>
      <div class="flex justify-between items-center gap-x-24 mt-2">
        <p class="text-xs">include some hashtags</p>
        <div class="flex flex-row items-center gap-x-2">
          <button class="btn btn-secondary btn-sm" @click="handleSelectImage">
            <Icon name="pixelarticons:image" />
            <input
              ref="fileInput"
              type="file"
              accept="video/*,image/*"
              hidden
              @change="handleUploadImage"
            />
          </button>
          <button
            class="btn btn-primary btn-sm"
            :disabled="content.length > 0 ? false : true"
            @click="handleFormPublish"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
