import { DecodedTokenType } from "~/types/types";
import UrlPattern from "url-pattern";
import { decodeAccessToken } from "~/utils/decodeTokens";
import { getUserById } from "../db/user";

export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/user",
    "/api/user/mininote",
    "/api/mininotes",
    "/api/mininotes/:id",
  ];

  const isHandledByThisMiddleware = endpoints.some((endopoint) => {
    const pattern = new UrlPattern(endopoint);

    return pattern.match(event.path);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.headers.get("authorization")?.split(" ")[1] as string;

  const decoded = decodeAccessToken(token) as DecodedTokenType;

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
