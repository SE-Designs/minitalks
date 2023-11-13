import type { ShortUserType } from "~/types/types";

export default defineNuxtRouteMiddleware(async (event) => {
  if (process.server) return;

  const { useAuthUser, useAuthLoading } = await useAuth();
  const loading = useAuthLoading();
  const user = (useAuthUser() || "") as any;

  watch(loading, () => {
    console.log(`auth middleware says: ${user.value.username} ${!event.path}`);

    if (!event.path.startsWith(`/auth`, 0) && !user.value.username) {
      console.log("auth middleware redirect to /auth");
      return navigateTo(`/auth`);
    } else if (event.path.startsWith(`/auth`, 0) && user.value.username) {
      console.log("auth middleware redirect to /");
      return navigateTo(`/`);
    }
  });
});
