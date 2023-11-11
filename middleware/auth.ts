export default defineNuxtRouteMiddleware(async (event) => {
  if (process.server) return;

  const { useAuthUser, useAuthLoading } = await useAuth();
  const loading = useAuthLoading();
  const user = useAuthUser();

  watch(loading, () => {
    console.log(`auth middleware says: ${user.value} ${!event.path}`);

    if (!event.path.startsWith(`/auth`, 0) && !user.value) {
      console.log("auth middleware redirect to /auth");
      return navigateTo(`/auth`);
    } else if (event.path.startsWith(`/auth`, 0) && user.value) {
      console.log("auth middleware redirect to /");
      return navigateTo(`/`);
    }
  });
});
