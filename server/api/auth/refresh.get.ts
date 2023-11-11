import { DecodedTokenType, TokenType } from "~/types/types";

import { decodeRefreshToken } from "~/utils/decodeTokens";
import generateTokens from "~/utils/generateTokens";
import { getRefreshTokenByToken } from "~/server/db/refreshToken";
import { getUserById } from "~/server/db/user";
import { sendError } from "#imports";

export default defineEventHandler(async (event: any) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  console.log(`> useAuth: refresh.get.ts - refreshToken: ${refreshToken}`);

  const refToken = (await getRefreshTokenByToken(refreshToken)) as TokenType;

  if (!refToken?.token)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  console.log(`> useAuth: refresh.get.ts - refToken: ${refToken?.token}`);

  const token = decodeRefreshToken(refToken.token) as DecodedTokenType;

  console.log(`> useAuth: refresh.get.ts - token: ${token.userId}`);

  try {
    const user = await getUserById(token.userId);

    console.log(`> useAuth: refresh.get.ts - user: ${user?.username}`);

    const { accessToken } = generateTokens(user);

    console.log(`> useAuth: refresh.get.ts - accessToken: ${accessToken}`);

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
