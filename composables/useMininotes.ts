export default function () {
  async function publishMininote(formData: any) {
    const form = new FormData();

    form.append("content", formData.content);
    form.append("replyTo", formData.replyTo);

    formData.media.forEach((file: any, index: number) => {
      form.append("media_file_" + index, file);
    });

    return await useProtectedFetch(`/api/user/mininote`, {
      method: "POST",
      body: form,
    });
  }

  async function getMininotes(params: any = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useProtectedFetch(`/api/mininotes`, {
          method: "GET",
          params,
        });

        resolve(response);
      } catch (error) {
        console.error(`GET MININOTES ERR: ${error}`);

        reject(error);
      }
    });
  }

  async function getMininoteById(mininoteId: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useProtectedFetch(
          `/api/mininotes/${mininoteId}`,
          {
            method: "GET",
          }
        );

        resolve(response);
      } catch (error) {
        console.error(`GET MININOTE BY ID ERR: ${error}`);

        reject(error);
      }
    });
  }

  async function getUserMininotesByUsername(username: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useProtectedFetch(`/api/user/${username}`, {
          method: "GET",
        });

        resolve(response);
      } catch (error) {
        console.error(`GET USER MININOTES ERR: ${error}`);

        reject(error);
      }
    });
  }

  return {
    publishMininote,
    getMininotes,
    getMininoteById,
    getUserMininotesByUsername,
  };
}
