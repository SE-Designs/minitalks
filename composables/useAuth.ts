import { jwtDecode } from "jwt-decode";

export default function () {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  function setToken(newToken: any) {
    const authToken = useAuthToken();
    authToken.value = newToken;
  }

  function setUser(newUser: string) {
    const authUser = useAuthUser();
    authUser.value = newUser;
  }

  function setAuthLoading(state: boolean) {
    const authLoading = useAuthLoading();
    authLoading.value = state;
  }

  async function signIn({ username, password }: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch(`/api/auth/signin`, {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        setToken(data.access_token);
        setUser(data.user);

        resolve(true);
      } catch (error) {
        console.error(`Some errors, when auth: ${error}`);

        reject(error);
      }
    });
  }

  // update the tokens
  async function refreshToken() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch(`/api/auth/refresh`, {
          method: "GET",
        });

        setToken(data?.access_token);

        resolve(true);
      } catch (error) {
        console.error(`Some errors, when auth: ${error}`);

        reject(error);
      }
    });
  }

  async function getUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = (await useProtectedFetch(`/api/auth/user`)) as any;

        setUser(data?.user);

        resolve(true);
      } catch (error) {
        console.error(`Some errors, when auth: ${error}`);

        reject(error);
      }
    });
  }

  async function refreshAccessToken() {
    const authToken = useAuthToken();

    if (!authToken.value) return;

    const jwt = jwtDecode(authToken.value as string);
    const refreshTime = (jwt?.exp as number) - 60000;

    setTimeout(async () => {
      await refreshToken();
      refreshAccessToken();
    }, refreshTime);
  }

  // when just visit app.vue
  async function initAuth() {
    console.log("init started - loading");

    return new Promise(async (resolve, reject) => {
      try {
        setAuthLoading(true);

        await refreshToken();
        await getUser();

        refreshAccessToken();

        resolve(true);
      } catch (error) {
        console.error(`Some errors, when auth: ${error}`);

        reject(error);
      } finally {
        setAuthLoading(false);
      }
    });
  }

  return { useAuthToken, useAuthUser, useAuthLoading, signIn, initAuth };
}
