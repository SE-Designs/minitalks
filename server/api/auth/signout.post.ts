import { removeRefreshToken } from "~/server/db/refreshToken";
import sendRefreshToken from "~/utils/sendRefreshToken";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);

    const refreshToken = cookies.refresh_token;

    await removeRefreshToken(refreshToken);
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: `Something went wrong: ${error}`,
      })
    );
  }

  sendRefreshToken(event, "");

  return { message: "Done" };
});
