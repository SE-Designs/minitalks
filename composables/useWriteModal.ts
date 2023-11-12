export const isWriteModal = ref(false);
export const isWriteReply = ref({}) as any;

export default function (reply: object = {}) {
  isWriteReply.value = reply;

  return (isWriteModal.value = !isWriteModal.value);
}
