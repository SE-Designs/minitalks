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
</style>
