import { decodeRefreshToken } from "~/utils/decodeTokens";
import generateTokens from "~/utils/generateTokens";
import { getRefreshTokenByToken } from "~/server/db/refreshToken";
import { getUserById } from "~/server/db/user";
import { sendError } from "#imports";

export default defineEventHandler(async (event: any) => {
  const cookies = parseCookies(event);
  console.log(cookies);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  const refToken = await getRefreshTokenByToken(refreshToken);

  if (!refToken)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token?.userId || null);

    const { accessToken } = generateTokens(user);

    return {
      access_token: accessToken,
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: `Something went wrong: ${error}`,
      })
    );
  }
});
