export default defineNuxtRouteMiddleware(() => {
  if (process.server) return;
  const { useAuthUser } = useAuth();
  const user = useAuthUser();

  if (!user.value) return navigateTo("/auth#sign-in");
});
