export const isWriteModalOpen = ref(false);

export default function () {
  return (isWriteModalOpen.value = !isWriteModalOpen.value);
}
