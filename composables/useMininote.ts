export default function () {
  function publishMininote(formData: any) {
    const form = new FormData();

    form.append("content", formData.content);
    formData.media.forEach((file: any, index: number) => {
      form.append("media_file_" + index, file);
    });

    console.log(form);

    return useProtectedFetch(`/api/user/mininote`, {
      method: "POST",
      body: form,
    });
  }

  return { publishMininote };
}
