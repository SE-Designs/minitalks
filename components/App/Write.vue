<script setup lang="ts">
import { isWriteReply } from "#imports";
const emit = defineEmits(["onSubmit"]);
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});

const content = ref("");
const fileInput = ref();
const uploadFile = ref() as any;
const tempFileName = ref([]) as any;

function handleSelectImage() {
  fileInput.value.click();
}

function handleUploadImage(event: any) {
  uploadFile.value = event.target?.files[0];

  tempFileName.value.push(uploadFile.value.name);
}

function handleFormPublish() {
  // console.log({
  //   content: content.value,
  //   media: uploadFile && uploadFile[0] !== undefined ? [uploadFile.value] : [],
  //   replyTo: isWriteReply.value.id,
  // });
  emit("onSubmit", {
    content: content.value,
    media: uploadFile && uploadFile[0] !== undefined ? [uploadFile.value] : [],
    replyTo: isWriteReply.value.id,
  });
}

const isNew = computed(() => {
  return JSON.stringify(isWriteReply.value) === "{}" ? "new" : "reply";
});
</script>
<template>
  <div class="flex flex-col">
    <h3 class="font-bold text-2xl text-center mb-4">{{ isNew }} mininote</h3>
    <h6 class="mt-2" v-if="isNew === 'reply'">
      replying to {{ isWriteReply.username }}
    </h6>
    <div class="flex flex-col gap-y-2">
      <label class="font-black text-sm" for="note">start writing:</label>
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
            :disabled="content.length > 0 ? false : true || props.loading"
            @click="handleFormPublish"
          >
            <span v-if="!props.loading">Publish</span>
            <div v-else class="flex flex-row items-center gap-x-2">
              <span class="loading loading-spinner"></span> loading
            </div>
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <p v-for="file in tempFileName" :key="file">{{ file }}</p>
      </div>
    </div>
  </div>
</template>
