import { getUserById } from "~/server/db/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // if (process.server) return;
  const event = useRequestHeaders();
  console.log(event);
  // const { useAuthUser } = useAuth();
  // const user = useAuthUser();

  // if (!user.value) return navigateTo("/auth#sign-in");
  // const token = event?.req.headers.authorization?.split(" ")[1];
  // console.log(token);

  // const decoded = decodeAccessToken(token);
  // console.log(decoded);
  // if (!decoded) return navigateTo("/auth#sign-in");

  // try {
  //   const userId = decoded.userId;
  //   const user = await getUserById(userId);

  //   event.context.auth = user;
  // } catch (error) {
  //   console.error(`middleware: auth error: ${error}`);
  //   return navigateTo("/auth#sign-in");
  // }
});
