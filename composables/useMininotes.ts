export default function () {
  async function publishMininote(formData: any) {
    const form = new FormData();

    form.append("content", formData.content);
    formData.media.forEach((file: any, index: number) => {
      form.append("media_file_" + index, file);
    });

    console.log(form);

    return await useProtectedFetch(`/api/user/mininote`, {
      method: "POST",
      body: form,
    });
  }

  async function getHomeMininotes() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useProtectedFetch(`/api/mininotes`, {
          method: "GET",
        });

        resolve(response);
      } catch (error) {
        console.error(`MININOTE GET ERR: ${error}`);

        reject(error);
      }
    });
  }

  return { publishMininote, getHomeMininotes };
}
