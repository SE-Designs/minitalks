<script setup lang="ts">
import type { ShortUserType } from "~/types/types";
import { isImage, isVideo } from "~/utils/checkMediaFile";

const { useAuthUser } = await useAuth();
const user = (useAuthUser() || "") as unknown as ShortUserType;

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const mininote = props.post;
const author = props.post.author;
</script>
<template>
  <article class="flex flex-col gap-y-4 items-stretch sm:flex-row">
    <div
      class="ml-auto mr-0 w-fit flex flex-row items-center gap-x-2 sm:hidden"
    >
      <p class="text-xs font-bold">{{ mininote.time }}</p>
      <div
        class="dropdown dropdown-bottom dropdown-end"
        v-if="user.username === author.username"
      >
        <label
          tabindex="0"
          class="flex justify-center items-center cursor-pointer"
        >
          <button
            class="w-[32px] h-[32px] min-w-[32px] min-h-[32px] flex justify-center items-center rounded-full bg-base-100"
          >
            <Icon name="pixelarticons:more-vertical" />
          </button>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content translate-y-4 z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
        >
          <li>
            <NuxtLink
              :to="`/mininote/${mininote.id}`"
              class="w-full flex flex-row gap-x-4 items-center"
            >
              <Icon name="pixelarticons:arrow-right-box" />
              <span>Go to mininote</span>
            </NuxtLink>
          </li>
          <li>
            <p class="w-full flex flex-row gap-x-4 items-center">
              <Icon name="pixelarticons:edit" />
              <span>Edit</span>
            </p>
          </li>
          <li>
            <p class="w-full flex flex-row gap-x-4 items-center">
              <Icon name="pixelarticons:trash" />
              <span>Delete</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-bottom dropdown-end" v-else>
        <label
          tabindex="0"
          class="flex justify-center items-center cursor-pointer"
        >
          <button
            class="w-[32px] h-[32px] min-w-[32px] min-h-[32px] flex justify-center items-center rounded-full bg-base-100"
          >
            <Icon name="pixelarticons:more-vertical" />
          </button>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content translate-y-4 z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
        >
          <li>
            <NuxtLink
              :to="`/mininote/${mininote.id}`"
              class="w-full flex flex-row gap-x-4 items-center"
            >
              <Icon name="pixelarticons:arrow-right-box" />
              <span>Go to mininote</span>
            </NuxtLink>
          </li>
          <li>
            <p class="w-full flex flex-row gap-x-4 items-center">
              <Icon name="pixelarticons:downasaur" />
              <span>Author</span>
            </p>
          </li>
          <li>
            <p class="w-full flex flex-row gap-x-4 items-center">
              <Icon name="pixelarticons:flag" />
              <span>Report</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 w-full bg-base-100 rounded-lg p-4 border border-transparent cursor-pointer transition-colors hover:border-warning"
    >
      <div class="flex flex-row justify-between items-center gap-4">
        <!-- avatar img or downsaur icon -->
        <div class="flex flex-row items-center gap-4">
          <NuxtLink
            :to="`/minitalker/${author.username}`"
            class="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full bg-warning text-warning-content border-2 border-warning overflow-hidden"
          >
            <img
              class="w-full h-full p-[12px] flex justify-center items-center"
              :src="author.avatar"
              :alt="author.username"
              v-if="author.avatar"
            />
            <div
              v-else
              class="w-full h-full p-[12px] flex justify-center items-center"
            >
              <Icon name="pixelarticons:downasaur" class="w-full h-full" />
            </div>
          </NuxtLink>
          <div class="flex flex-col">
            <NuxtLink
              :to="`/minitalker/${author.username}`"
              class="w-fit font-black link link-hover hover:text-warning"
            >
              {{ author.username }}
            </NuxtLink>
            <NuxtLink
              :to="`/mininote/${mininote.replyTo.id}`"
              class="w-fit text-sm font-bold link link-hover hover:opacity-100 opacity-60"
              v-if="mininote.replyTo"
            >
              replying to {{ mininote.replyTo.author.username }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden flex-row items-center gap-2 sm:flex">
          <p class="text-xs font-bold">{{ mininote.time }}</p>
          <div
            class="dropdown dropdown-bottom dropdown-end"
            v-if="user.username === author.username"
          >
            <label
              tabindex="0"
              class="flex justify-center items-center cursor-pointer"
            >
              <button
                class="w-[28px] h-[28px] min-w-[28px] min-h-[28px] p-[4px] flex justify-center items-center bg-neutral rounded-full"
              >
                <Icon name="pixelarticons:more-vertical" />
              </button>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content translate-y-4 z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <NuxtLink
                  :to="`/mininote/${mininote.id}`"
                  class="w-full flex flex-row gap-x-4 items-center"
                >
                  <Icon name="pixelarticons:arrow-right-box" />
                  <span>Go to mininote</span>
                </NuxtLink>
              </li>
              <li>
                <p class="w-full flex flex-row gap-x-4 items-center">
                  <Icon name="pixelarticons:edit" />
                  <span>Edit</span>
                </p>
              </li>
              <li>
                <p class="w-full flex flex-row gap-x-4 items-center">
                  <Icon name="pixelarticons:trash" />
                  <span>Delete</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-bottom dropdown-end" v-else>
            <label
              tabindex="0"
              class="flex justify-center items-center cursor-pointer"
            >
              <button
                class="w-[28px] h-[28px] min-w-[28px] min-h-[28px] p-[4px] flex justify-center items-center bg-neutral rounded-full"
              >
                <Icon name="pixelarticons:more-vertical" />
              </button>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content translate-y-4 z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <NuxtLink
                  :to="`/mininote/${mininote.id}`"
                  class="w-full flex flex-row gap-x-4 items-center"
                >
                  <Icon name="pixelarticons:arrow-right-box" />
                  <span>Go to mininote</span>
                </NuxtLink>
              </li>
              <li>
                <p class="w-full flex flex-row gap-x-4 items-center">
                  <Icon name="pixelarticons:downasaur" />
                  <span>Author</span>
                </p>
              </li>
              <li>
                <p class="w-full flex flex-row gap-x-4 items-center">
                  <Icon name="pixelarticons:flag" />
                  <span>Report</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h-px w-full bg-neutral"></div>
      <pre class="font-sans">{{ mininote.content }}</pre>
      <div v-for="media in mininote.mediaFiles" :key="media.id">
        <img
          v-if="isImage(media.url)"
          class="block rounded-xl"
          :src="media.url"
          alt=""
        />
        <video
          v-else-if="isVideo(media.url)"
          class="flex rounded-xl"
          :src="media.url"
          alt=""
        />
      </div>
    </div>
    <aside
      class="flex flex-row justify-between gap-y-2 gap-x-6 items-center sm:ml-6 sm:justify-center sm:flex-col"
    >
      <button
        class="flex flex-row items-center text-center gap-2 w-full cursor-pointer sm:flex-col sm:gap-1"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-primary hover:text-primary-content"
        >
          <Icon name="pixelarticons:arrow-up" />
        </div>
        <p class="text-sm font-semibold">
          {{ mininote.likedNumber }}
        </p>
      </button>
      <button
        class="flex flex-row items-center text-center gap-2 w-full cursor-pointer sm:flex-col sm:gap-1"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-success hover:text-success-content"
        >
          <Icon name="pixelarticons:visible" />
        </div>
        <p class="text-sm font-semibold">
          {{ mininote.viewedNumber }}
        </p>
      </button>
      <button
        class="flex flex-row items-center text-center gap-2 w-full cursor-pointer sm:flex-col sm:gap-1"
      >
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-base-100 hover:bg-info hover:text-info-content"
          @click="useWriteModal({ id: mininote.id, username: author.username })"
        >
          <Icon name="pixelarticons:message-arrow-right" />
        </div>
        <p class="text-sm font-semibold">
          {{ mininote.repliesNumber }}
        </p>
      </button>
    </aside>
  </article>
</template>
<style scoped>
pre {
  text-align: left;

  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;

  word-wrap: break-word;
  word-break: normal;
}
</style>
