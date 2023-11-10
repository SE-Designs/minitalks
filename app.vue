<script setup lang="ts">
const { initAuth } = useAuth();

onBeforeMount(() => {
  initAuth();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html {
  scroll-behavior: smooth;
  min-height: 100vh;
}

dialog {
  transition: backdrop-filter 0.2s;
  backdrop-filter: blur(8px);
}

.modal-box {
  border: 1px solid rgba(222, 222, 222, 0.2);
  background: rgba(0, 0, 0, 0.4);
}

.text-gradient {
  font-weight: 900;
  background: -webkit-linear-gradient(70deg, #641ae6, #d926a9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
