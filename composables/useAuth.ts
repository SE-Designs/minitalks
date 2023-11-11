import { jwtDecode } from "jwt-decode";

export default async function () {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  function setToken(newToken: any) {
    const authToken = useAuthToken();
    authToken.value = newToken;

    console.log(`setting token to: ${newToken}`);
  }

  function setUser(newUser: any) {
    const authUser = useAuthUser();
    authUser.value = newUser;

    console.log(`setting user to: ${newUser}`);
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

        console.log(
          `> useAuth: signIn - data: ${
            data.user && data.access_token ? "OK" : "NOT"
          }`
        );

        resolve(true);
      } catch (error) {
        console.error(`SIGN IN ERR: ${error}`);

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

        console.log(
          `> useAuth: access_token - data: ${data.access_token ? "OK" : "NOT"}`
        );

        resolve(true);
      } catch (error) {
        console.error(`UPDATE REFRESH TOKEN ERR: ${error}`);

        reject(error);
      }
    });
  }

  async function getUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = (await useProtectedFetch(`/api/auth/user`)) as any;

        setUser(data.user);

        console.log(`> useAuth: getUser - user: ${data.user?.username}`);

        resolve(true);
      } catch (error) {
        console.error(`GET USER ERR: ${error}`);

        reject(error);
      }
    });
  }

  async function refreshAccessToken() {
    const authToken = useAuthToken();

    if (!authToken.value) return;

    const jwt = jwtDecode(authToken.value as string);
    const refreshTime = (jwt?.exp as number) - 60000;

    console.log(`> useAuth: refreshAccessToken - data: ${jwt ? "OK" : "NOT"}`);
    console.log(`> useAuth: refreshAccessToken - refresh: ${refreshTime}`);

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

        console.log(`> useAuth: initAuth - data: OK`);

        resolve(true);
      } catch (error) {
        console.error(`INIT AUTH ERR: ${error}`);

        reject(error);
      } finally {
        setAuthLoading(false);
      }
    });
  }

  return {
    useAuthToken,
    useAuthUser,
    useAuthLoading,
    signIn,
    initAuth,
  };
}
