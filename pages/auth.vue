<script setup lang="ts">
definePageMeta({
  layout: "clean",
});

const signInValue = ref({
  username: "",
  password: "",
});

const signUpValue = ref({
  email: "",
  username: "",
  password: "",
  repeat: "",
});

const auth = ref("sign-in");
</script>
<template>
  <section
    class="flex flex-row flex-wrap-reverse justify-between items-center gap-12 min-h-screen p-8"
  >
    <div
      class="flex flex-col p-4 bg-neutral rounded-lg flex-1 min-w-[320px] w-full max-w-[520px] mx-auto"
    >
      <div class="flex flex-row items-center gap-x-4 mx-auto">
        <NuxtLink
          to="/auth#sign-in"
          @click="auth = 'sign-in'"
          :class="auth === 'sign-in' ? 'btn btn-primary' : 'btn'"
          >Sign In</NuxtLink
        >
        <NuxtLink
          to="/auth#sign-up"
          @click="auth = 'sign-up'"
          :class="auth === 'sign-up' ? 'btn btn-primary' : 'btn'"
          >Sign Up</NuxtLink
        >
      </div>
      <div
        class="flex flex-col items-center text-neutral bg-neutral-content p-2 rounded-md mt-4 gap-4"
        v-if="auth === 'sign-in'"
      >
        <h3 class="text-xl font-bold mt-4">Sign In</h3>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signin-username"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Email or username</span>
          </label>
          <input
            id="signin-username"
            type="text"
            v-model.value="signInValue.username"
            maxlength="12"
            placeholder="Email or username"
            class="input input-bordered w-full text-white"
          />
        </div>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signin-password"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Password</span>
          </label>
          <input
            id="signin-password"
            type="password"
            v-model.value="signInValue.password"
            placeholder="Password"
            class="input input-bordered w-full text-white"
          />
        </div>
        <button class="btn btn-outline btn-primary w-full">Sign in</button>
      </div>
      <div
        class="flex flex-col items-center text-neutral bg-neutral-content p-2 rounded-md mt-4 gap-4"
        v-else
      >
        <h3 class="text-xl font-bold mt-4">Sign Up</h3>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signup-email"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Email</span>
          </label>
          <input
            id="signup-email"
            type="email"
            v-model.value="signUpValue.email"
            maxlength="12"
            placeholder="Email"
            class="input input-bordered w-full text-white"
          />
        </div>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signup-username"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Username</span>
          </label>
          <input
            id="signup-username"
            type="text"
            v-model.value="signUpValue.username"
            maxlength="12"
            placeholder="Username"
            class="input input-bordered w-full text-white"
          />
        </div>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signup-password"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Password</span>
          </label>
          <input
            id="signup-password"
            type="password"
            v-model.value="signUpValue.password"
            placeholder="Password"
            class="input input-bordered w-full text-white"
          />
        </div>
        <div class="flex flex-col text-left w-full gap-1">
          <label
            for="signup-repeat"
            class="flex flex-row gap-x-2 items-center text-sm"
          >
            <Icon name="pixelarticons:flag" />
            <span>Repeat password</span>
          </label>
          <input
            id="signup-repeat"
            v-model.value="signUpValue.repeat"
            type="password"
            placeholder="Repeat password"
            class="input input-bordered w-full text-white"
          />
        </div>
        <button class="btn btn-outline btn-primary w-full">Sign Up</button>
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="text-5xl font-black mb-8">
        <span v-if="auth === 'sign-in'">Hello, </span>
        <span v-else>Welcome, </span>
        <span class="text-gradient" v-if="auth === 'sign-in'">{{
          signInValue.username ? signInValue.username : "minitalker"
        }}</span>
        <span class="text-gradient" v-else>{{
          signUpValue.username ? signUpValue.username : "minitalker"
        }}</span>
      </h1>
      <h3
        class="flex flex-row items-center gap-x-4 text-3xl font-bold mb-2 text-accent"
      >
        <Icon name="pixelarticons:downasaur" />
        <span>what is minitalks</span>
      </h3>
      <div class="flex flex-row items-center gap-x-2">
        <Icon name="pixelarticons:play" class="min-w-[12px] min-h-[12px]" />
        <p>Mini social network for <span class="font-bold">mini-posts</span></p>
      </div>
      <div class="flex flex-row items-center gap-x-2">
        <Icon name="pixelarticons:play" class="min-w-[12px] min-h-[12px]" />
        <p>Frontend powered with Nuxt 3, Tailwindcss, Daisy UI, Nuxt Icon</p>
      </div>
      <div class="flex flex-row items-center gap-x-2">
        <Icon name="pixelarticons:play" class="min-w-[12px] min-h-[12px]" />
        <p>Backend powered with Nuxt 3, Prisma, JWT</p>
      </div>
      <div class="flex flex-row flex-wrap items-center gap-x-12">
        <a
          href="https://github.com/SE-Designs/"
          class="flex flex-row items-center gap-x-4 text-xl font-bold mt-4"
        >
          <Icon name="pixelarticons:user" />
          <span class="link">mixturegg</span>
        </a>
        <a
          href="https://github.com/SE-Designs/minitalks"
          class="flex flex-row items-center gap-x-4 text-xl font-bold mt-4"
        >
          <Icon name="pixelarticons:git-commit" />
          <span class="link">minitalks repo</span>
        </a>
      </div>
    </div>
  </section>
</template>
